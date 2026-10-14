begin;
-- Customers are derived from orders. Hide customer-list entries without destroying order history.
-- A future order defaults to visible, allowing a returning customer to appear again.
alter table public.orders add column if not exists customer_hidden boolean not null default false;
notify pgrst, 'reload schema';
commit;
