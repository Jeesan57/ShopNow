import { createClient } from '@supabase/supabase-js';
let client;
export function getSupabase() {
  if (!client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error('Supabase configuration is missing. Check your environment variables.');
    client = createClient(url, key);
  }
  return client;
}
