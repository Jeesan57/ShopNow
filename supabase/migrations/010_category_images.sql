begin;

alter table public.categories add column if not exists image text not null default '';
comment on column public.categories.image is 'Public cover image URL, uploaded by administrators to product-images/categories.';

notify pgrst, 'reload schema';
commit;
