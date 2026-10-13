# ShopNow launch setup

The storefront and `/admin` use Supabase Auth, Postgres, and Storage. No demo products are loaded. Currency is Bangladeshi taka (BDT, ৳) and checkout supports cash on delivery; card payments are not integrated.

1. Copy `.env.example` to your hosting environment and set the publishable key. Never use the database password or a service-role key in a `NEXT_PUBLIC_` variable.
2. Run `supabase/migrations/001_shop.sql`, then `supabase/migrations/002_bangladesh_checkout.sql`, once each in the Supabase SQL editor, or run `node scripts/setup-database.mjs` and provide the database password through stdin. The script tracks completed migrations. For verified SSL, download the database root certificate from Supabase Database Settings and run `SUPABASE_DB_CA=/path/to/certificate ADMIN_EMAIL=auvorabd.official@gmail.com node scripts/setup-database.mjs`.
3. In Supabase Authentication, create an administrator user with an email and password. Disable public signup if it is not needed.
4. Authorize the user in the Supabase SQL editor:

```sql
insert into public.admin_users(user_id)
select id from auth.users where email = 'auvorabd.official@gmail.com'
on conflict do nothing;
```

5. Sign in at `/admin`, add categories and products, upload images, enter stock and sizes, then publish each product. Homepage, shop, search and product details use this catalog.
6. Submit a test order and contact message, verify they appear in the admin panel, and verify a non-admin account cannot read orders or change products. Check an out-of-stock order fails without reducing other stock.
7. Deploy this Next.js app to your chosen Node.js/Next.js host with the two public environment variables. Run `npm run build`, then `npm start`. Configure your domain and Supabase Auth Site URL before inviting administrators.

Delivered revenue counts only delivered orders. Customers are derived from checkout orders. Stock is reserved when an order is created. Cancellation does not automatically restock: confirm returned goods and update inventory manually. Stock is tracked per product, not per size. Checkout charges flat delivery fees of ৳70 inside Dhaka city and ৳130 outside, calculated in Postgres and saved with the order. No additional COD charge is passed to the customer. These are store fees based on Pathao’s 500 g–1 kg Dhaka-pickup rates, checked October 13, 2026: https://help.pathao.com/what-is-the-delivery-charge-inside-or-outside-the-city/. Actual courier charges vary by route and parcel weight, and the merchant pays applicable COD fees. Rates can be updated in the delivery_zones table.

Public users can only read published products/categories and submit orders/messages using validated functions. Admin table membership is managed through database access, not self-service. Do not remove row-level security. Before a public launch, configure upstream request rate limiting or a CAPTCHA-backed server endpoint for the public submission flows, and replace the existing site's placeholder contact/about information and promotional claims with your actual business details.

Rotate the database password shared in chat before launch. It is not stored in this repository.
