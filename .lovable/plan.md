
# Nusantara Trip — Full-Stack Tour & Travel Booking Platform

## Overview
A complete travel booking platform in Bahasa Indonesia with a vibrant tropical aesthetic (warm oranges, teals, greens), built with React + Vite on the frontend and Supabase for database, auth, and edge functions.

---

## Design System
- **Color palette**: Warm orange (#FF6B35), tropical teal (#0D9488), lush green (#16A34A), soft cream background
- **Typography**: Bold display font for headlines, clean sans-serif for body
- **Style**: Vibrant tropical, mobile-first, smooth Framer Motion animations
- **All UI text**: Bahasa Indonesia

---

## Phase 1 — Landing Page

### Navbar
Logo "Nusantara Trip" with a tropical icon, navigation links (Paket, Galeri, Blog, FAQ), and a prominent "Pesan Sekarang" CTA button. Sticky on scroll with a backdrop blur effect.

### Hero Section
Full-screen image with an overlay gradient. Bold Bahasa Indonesia headline, subheadline, and a search bar containing: destination dropdown, date picker, people counter, and "Cari Paket" button.

### Promo Countdown Banner
Live countdown timer showing hours/minutes/seconds, promo text, and a one-click copyable voucher code (NUSA20). Eye-catching gradient background.

### Paket Wisata Section
Grid of 5 package cards with photo, destination badge, package name, price per person, duration, and star rating. Includes a filter bar (by destination, price range slider, duration) and sort options (popular, cheapest, newest).

### Galeri Section
Masonry grid layout with destination tabs (Bromo, Ijen, Jogja, Labuan Bajo, Bali). Click-to-expand lightbox with smooth transitions.

### Testimoni Section
Auto-sliding carousel with customer photo, name, star rating, and review card. Smooth auto-play with manual controls.

### Blog Section
3 article preview cards with thumbnail, title, excerpt, date, and "Baca Selengkapnya" link.

### FAQ Section
Accordion-style expand/collapse for common booking questions.

### Footer
Logo, nav links grouped by category, social media icons (Instagram, Facebook, TikTok, YouTube), contact info (email, phone, address).

### WhatsApp Floating Button
Fixed bottom-right button, opens `wa.me` link in new tab.

---

## Phase 2 — Package Detail Page (`/paket/:id`)
- Photo carousel hero
- Package name, price, duration, rating
- Day-by-day itinerary accordion
- Include/Exclude facilities list with icons
- People counter → live dynamic price calculation
- Availability calendar with color-coded dates (green = available, red = full)
- "Pesan Sekarang" CTA → routes to booking form
- Package-specific testimonials

---

## Phase 3 — Booking Flow (`/booking/:packageId`)

**Step 1 — Customer Form**: Name, WhatsApp number, email, selected date, number of people (React Hook Form + Zod validation)

**Step 2 — Voucher & Summary**: Voucher code input with auto-apply and live discount calculation, full order summary

**Step 3 — Payment**: Midtrans Sandbox integration via Supabase Edge Function (creates transaction, returns Snap token)

**Step 4 — Success Page**: Booking ID confirmation, summary, and automatic confirmation email sent via Resend (Supabase Edge Function)

---

## Phase 4 — Admin Dashboard (`/admin`, JWT-protected)

**Login**: Secure admin login with Supabase Auth + role-based access control (admin role stored in `user_roles` table)

**Dashboard Home**: Stats cards (total bookings, revenue, new customers this month) + weekly booking bar chart + top packages table

**Paket Management**: Full CRUD — create/edit packages with name, description, price, multi-photo upload (Supabase Storage), day-by-day itinerary builder, availability dates with quota per date

**Booking Management**: Data table with all bookings, status badges (pending/confirmed/cancelled), filter by date/package/status, confirm/cancel actions

**Customer Management**: Customer database with booking history per customer, export to CSV

**Voucher Management**: Create/edit vouchers — percentage or fixed discount, expiry date, usage limit, usage count tracker

**Reports**: Revenue chart by period, best-selling packages chart, export to PDF/Excel

---

## Database Schema (Supabase)

- **packages** — id, name, slug, description, price, duration, destination, rating, cover_photo, photos[], quota_per_date
- **itinerary** — id, package_id, day_number, title, description, activities[]
- **availability** — id, package_id, date, quota, booked_count
- **bookings** — id, package_id, customer_name, wa_number, email, date, people_count, total_price, voucher_code, discount, status, booking_code, payment_status
- **vouchers** — id, code, type (percentage/fixed), value, expiry_date, max_uses, used_count
- **testimonials** — id, package_id, customer_name, photo, rating, comment
- **blog_posts** — id, title, slug, thumbnail, excerpt, content, published_at
- **user_roles** — id, user_id, role (admin enum)

---

## Seed Data
5 packages (Bromo, Ijen, Jogja, Labuan Bajo, Bali) with full itineraries, include/exclude lists, Unsplash photos, testimonials, and 60 days of availability (some dates marked full). 2 vouchers (NUSA20, HEMAT50). Admin account seeded.

---

## External Integrations
- **Midtrans Sandbox**: Supabase Edge Function creates payment session, frontend loads Snap.js popup
- **Resend**: Supabase Edge Function sends HTML confirmation email to customer after successful booking

