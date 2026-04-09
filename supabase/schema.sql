-- Run this entire file in the Supabase SQL Editor (supabase.com → your project → SQL Editor)

-- Enable UUID generation
create extension if not exists "pgcrypto";

-- Leads table: one row per signup
create table if not exists leads (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  email           text not null unique,
  phone           text,
  quantity_interest integer not null default 1,
  style_interest  text,
  city            text not null,
  zip             text not null,
  referral_code   text not null unique,
  referred_by     text,
  tier            text not null default 'public',
  is_buyer        boolean not null default false,
  created_at      timestamptz not null default now()
);

create index if not exists leads_referral_code_idx on leads(referral_code);
create index if not exists leads_email_idx on leads(email);

-- Referrals table: tracks who referred whom
create table if not exists referrals (
  id           uuid primary key default gen_random_uuid(),
  referrer_id  uuid not null references leads(id) on delete cascade,
  referred_id  uuid not null references leads(id) on delete cascade,
  created_at   timestamptz not null default now(),
  unique(referrer_id, referred_id)
);

-- Tier config: controls capacity and discount per tier
create table if not exists tier_config (
  tier             text primary key,
  capacity         integer not null,
  discount_percent integer not null,
  filled           integer not null default 0
);

insert into tier_config (tier, capacity, discount_percent, filled) values
  ('founding_member', 50,  20, 0),
  ('early_backer',    100, 15, 0),
  ('presale',         100, 10, 0)
on conflict (tier) do nothing;
