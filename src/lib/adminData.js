// Supabase returns at most 1,000 rows per request; analytics need the full history.
export async function readAllOrders(db) {
  const all = [];
  for (let offset = 0; ; offset += 1000) {
    const result = await db.from('orders').select('*,order_items(*)').order('created_at', { ascending: false }).order('id', { ascending: false }).range(offset, offset + 999);
    if (result.error) return result;
    all.push(...result.data);
    if (result.data.length < 1000) return { data: all, error: null };
  }
}
