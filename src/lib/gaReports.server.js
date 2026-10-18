import { createHash, createPrivateKey, sign } from 'node:crypto';

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const DATA_URL = 'https://analyticsdata.googleapis.com/v1beta';
const tokens = new Map();
const reports = new Map();
const pending = new Map();
const TTL = 60000;
export class TrafficError extends Error {
  constructor(code, message, status = 502) { super(message); this.code = code; this.status = status; }
}
const options = (extra = {}) => ({ cache: 'no-store', signal: AbortSignal.timeout(12000), ...extra });
function credentialsKey(config) { return createHash('sha256').update(`${config.email}:${config.privateKey}`).digest('hex'); }
function boundedSet(map, key, value) { if (map.size >= 12 && !map.has(key)) map.delete(map.keys().next().value); map.set(key, value); }
async function accessToken(config, fetcher) {
  const key = credentialsKey(config);
  const cached = tokens.get(key);
  if (cached && cached.expires > Date.now() + 60000) return cached.token;
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const claims = Buffer.from(JSON.stringify({ iss: config.email, scope: 'https://www.googleapis.com/auth/analytics.readonly', aud: TOKEN_URL, iat: now, exp: now + 3600 })).toString('base64url');
  let signature;
  try { signature = sign('RSA-SHA256', Buffer.from(`${header}.${claims}`), createPrivateKey(config.privateKey)).toString('base64url'); }
  catch { throw new TrafficError('INVALID_CREDENTIALS', 'The reporting private key is invalid. Check the server environment settings.', 503); }
  const response = await fetcher(TOKEN_URL, options({ method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${header}.${claims}.${signature}` }).toString() }));
  if (!response.ok) throw new TrafficError('GOOGLE_AUTH_FAILED', 'Google could not authenticate the reporting service account. Check its email and private key.');
  const data = await response.json();
  if (typeof data.access_token !== 'string' || !data.access_token) throw new TrafficError('GOOGLE_AUTH_FAILED', 'Google did not return a reporting access token.');
  boundedSet(tokens, key, { token: data.access_token, expires: Date.now() + Math.min(3600, Number(data.expires_in) || 3600) * 1000 });
  return data.access_token;
}
async function googleRequest(config, method, body, token, fetcher) {
  const response = await fetcher(`${DATA_URL}/properties/${config.propertyId}:${method}`, options({ method: 'POST', headers: { Authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify(body) }));
  if (!response.ok) {
    if (response.status === 401) tokens.delete(credentialsKey(config));
    if (response.status === 403) throw new TrafficError('GOOGLE_ACCESS_DENIED', 'Enable the Google Analytics Data API and grant this service account Viewer access to the GA4 property.');
    if (response.status === 404) throw new TrafficError('PROPERTY_NOT_FOUND', 'Google could not find this GA4 property. Check the numeric Property ID and service account access.');
    if (response.status === 429) throw new TrafficError('GOOGLE_QUOTA', 'Google’s reporting quota is temporarily exhausted. Please try again later.', 503);
    throw new TrafficError('GOOGLE_REPORT_FAILED', 'Google Analytics could not return this report. Try refreshing in a moment.');
  }
  return response.json();
}
const metrics = names => names.map(name => ({ name }));
function report(dateRanges, dimensions, names, limit = 10) {
  return { dateRanges, dimensions: dimensions.map(name => ({ name })), metrics: metrics(names), limit: String(limit), ...(dimensions.length ? { orderBys: [{ metric: { metricName: names[0] }, desc: true }] } : {}) };
}
export function trafficReportRequests(days) {
  const dateRanges = [{ startDate: `${days - 1}daysAgo`, endDate: 'today' }];
  const summary = report(dateRanges, [], ['activeUsers', 'newUsers', 'sessions', 'screenPageViews', 'engagementRate']);
  const daily = report(dateRanges, ['date'], ['activeUsers', 'sessions', 'screenPageViews'], 90);
  daily.orderBys = [{ dimension: { dimensionName: 'date' } }];
  return [summary, daily, report(dateRanges, ['sessionSourceMedium'], ['sessions']), report(dateRanges, ['country'], ['activeUsers'], 8), report(dateRanges, ['city', 'country'], ['activeUsers'], 8), report(dateRanges, ['deviceCategory'], ['sessions'], 10), report(dateRanges, ['pagePath'], ['screenPageViews'])];
}
function rows(report) {
  return (report?.rows || []).map(row => ({
    dimensions: (row.dimensionValues || []).map(value => value.value || '(not set)'),
    metrics: (row.metricValues || []).map(value => { const number = Number(value.value); return Number.isFinite(number) ? Math.max(0, number) : 0; }),
  }));
}
function dateKey(date, timeZone) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(date).map(part => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}
export function normalizeTrafficResults(results, realtime, days, now = new Date()) {
  const totals = rows(results[0])[0]?.metrics || [0, 0, 0, 0, 0];
  let timeZone = results[0]?.metadata?.timeZone || 'Asia/Dhaka';
  let today;
  try { today = dateKey(now, timeZone); } catch { timeZone = 'Asia/Dhaka'; today = dateKey(now, timeZone); }
  const lastDate = new Date(`${today}T12:00:00Z`);
  const dailyMap = new Map(rows(results[1]).map(row => [row.dimensions[0], row.metrics]));
  const daily = Array.from({ length: days }, (_, index) => {
    const date = new Date(lastDate); date.setUTCDate(date.getUTCDate() - days + index + 1);
    const key = date.toISOString().slice(0, 10);
    const values = dailyMap.get(key.replaceAll('-', '')) || [0, 0, 0];
    return { date: key, activeUsers: values[0], sessions: values[1], views: values[2] };
  });
  return {
    configured: true, days, timeZone, updatedAt: now.toISOString(),
    summary: { activeUsers: totals[0], newUsers: totals[1], sessions: totals[2], views: totals[3], engagementRate: totals[4] },
    realtime: realtime ? { activeUsers: rows(realtime)[0]?.metrics[0] || 0, minutes: 30 } : null,
    daily,
    sources: rows(results[2]).map(row => ({ name: row.dimensions[0], sessions: row.metrics[0] })),
    countries: rows(results[3]).map(row => ({ name: row.dimensions[0], users: row.metrics[0] })),
    cities: rows(results[4]).map(row => ({ name: row.dimensions[0], country: row.dimensions[1], users: row.metrics[0] })),
    devices: rows(results[5]).map(row => ({ name: row.dimensions[0], sessions: row.metrics[0] })),
    pages: rows(results[6]).map(row => ({ path: row.dimensions[0].split(/[?#]/)[0], views: row.metrics[0] })),
    thresholded: results.some(result => result?.metadata?.subjectToThresholding),
  };
}
export async function readTrafficReports(config, days, fetcher = fetch) {
  const key = `${config.propertyId}:${credentialsKey(config)}:${days}`;
  const cached = reports.get(key);
  if (cached && cached.expires > Date.now()) return cached.data;
  if (pending.has(key)) return pending.get(key);
  const work = (async () => {
    const token = await accessToken(config, fetcher);
    const requests = trafficReportRequests(days);
    const result = await Promise.all([
      googleRequest(config, 'batchRunReports', { requests: requests.slice(0, 5) }, token, fetcher),
      googleRequest(config, 'batchRunReports', { requests: requests.slice(5) }, token, fetcher),
      googleRequest(config, 'runRealtimeReport', { metrics: metrics(['activeUsers']), minuteRanges: [{ startMinutesAgo: 29, endMinutesAgo: 0 }] }, token, fetcher).catch(() => null),
    ]);
    const combined = [...(result[0].reports || []), ...(result[1].reports || [])];
    if (combined.length !== 7) throw new TrafficError('INCOMPLETE_REPORT', 'Google returned an incomplete report. Please try again.');
    const data = normalizeTrafficResults(combined, result[2], days);
    boundedSet(reports, key, { data, expires: Date.now() + TTL });
    return data;
  })();
  pending.set(key, work);
  try { return await work; } finally { pending.delete(key); }
}
