-- First create this user in Supabase Authentication, then run this query.
insert into public.admin_users(user_id)
select id from auth.users where lower(email) = 'auvorabd.official@gmail.com'
on conflict do nothing;

-- Verify that the user exists and is authorized.
select u.email from auth.users u join public.admin_users a on a.user_id = u.id
where lower(u.email) = 'auvorabd.official@gmail.com';
