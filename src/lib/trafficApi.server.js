import { readTrafficReports, TrafficError } from './gaReports.server.js';

const response = (body, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'private, no-store', Vary: 'Authorization' } });
export async function handleTrafficRequest(request, { env = process.env, fetcher = fetch } = {}) {
  const authorization = request.headers.get('authorization') || '';
  if (!/^Bearer [^\s]{1,8192}$/.test(authorization)) return response({ code: 'UNAUTHORIZED', error: 'Sign in to an approved Admin account to view traffic.' }, 401);
  const dbUrl = env.NEXT_PUBLIC_SUPABASE_URL;
  const key = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!dbUrl || !key) return response({ code: 'AUTH_UNAVAILABLE', error: 'Admin authentication is temporarily unavailable.' }, 503);
  try {
    const authOptions = { headers: { apikey: key, Authorization: authorization }, cache: 'no-store', signal: AbortSignal.timeout(10000) };
    const userResponse = await fetcher(`${dbUrl}/auth/v1/user`, authOptions);
    if (!userResponse.ok) return response({ code: 'UNAUTHORIZED', error: 'Your Admin session expired. Sign in again.' }, 401);
    const user = await userResponse.json();
    if (!/^[0-9a-f-]{36}$/i.test(user.id || '')) return response({ code: 'UNAUTHORIZED', error: 'Sign in to Admin again.' }, 401);
    const membership = await fetcher(`${dbUrl}/rest/v1/admin_users?select=user_id&user_id=eq.${encodeURIComponent(user.id)}&limit=1`, { ...authOptions, signal: AbortSignal.timeout(10000) });
    if (!membership.ok) return response({ code: 'AUTH_UNAVAILABLE', error: 'Admin access could not be verified. Try again.' }, 503);
    const admins = await membership.json();
    if (!Array.isArray(admins) || !admins.some(admin => admin.user_id === user.id)) return response({ code: 'FORBIDDEN', error: 'This report is available only to approved administrators.' }, 403);
    const days = Number(new URL(request.url).searchParams.get('days') || 28);
    if (![7, 28, 90].includes(days)) return response({ code: 'INVALID_RANGE', error: 'Choose a 7, 28, or 90 day reporting period.' }, 400);
    const propertyId = env.GOOGLE_ANALYTICS_PROPERTY_ID || '';
    const email = env.GOOGLE_ANALYTICS_CLIENT_EMAIL || '';
    const privateKey = (env.GOOGLE_ANALYTICS_PRIVATE_KEY || '').replace(/\\n/g, '\n');
    const missing = [];
    if (!/^[1-9]\d{0,19}$/.test(propertyId)) missing.push('Numeric GA4 Property ID');
    if (!/^[^\s@]+@[^\s@]+\.iam\.gserviceaccount\.com$/.test(email)) missing.push('Google service account email');
    if (!privateKey) missing.push('Google service account private key');
    if (missing.length) return response({ configured: false, code: 'NOT_CONFIGURED', missing, serviceAccountEmail: /\.iam\.gserviceaccount\.com$/.test(email) ? email : '', error: 'Connect GA4 reporting to show real traffic in Admin.' }, 503);
    const data = await readTrafficReports({ propertyId, email, privateKey }, days, fetcher);
    return response(data);
  } catch (error) {
    if (error instanceof TrafficError) return response({ code: error.code, error: error.message }, error.status);
    return response({ code: 'REPORT_UNAVAILABLE', error: 'Traffic reporting is temporarily unavailable. Please try again.' }, 502);
  }
}
