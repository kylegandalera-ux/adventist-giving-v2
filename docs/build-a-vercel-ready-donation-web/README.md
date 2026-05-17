# Adventist Giving Luzon

A Vercel-ready demo donation web application for Seventh-day Adventist churches and ministries in Luzon. It presents a trustworthy giving experience for local churches, missions, Hope Channel Philippines, and Adventist World Radio 89.1 FM.

This is a demo application only. It does not process real payments, store donor records, or expose real church financial details.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Responsive design
- Sample data files
- Vercel-ready deployment

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Installable App Access

This project includes Progressive Web App support for easier overseas access:

- `app/manifest.ts` defines the installable app name, icons, colors, and shortcuts.
- `public/sw.js` registers a small service worker for repeat visits and an offline fallback.
- `public/offline.html` is shown when a cached navigation is unavailable offline.
- `public/icons/` contains app icons for Android, desktop, and iOS home screen installs.

After deploying to Vercel, open the live URL on a phone:

- iPhone: Share button, then Add to Home Screen.
- Android Chrome: Install app or Add to Home screen.
- Desktop Chrome/Edge: install from the address bar.

## Native Mobile App Packaging

This project also includes Capacitor configuration for future Android and iOS store builds.

Useful commands:

```bash
npm install
npm run mobile:add:android
npm run mobile:add:ios
npm run mobile:sync
npm run mobile:android
npm run mobile:ios
```

See `MOBILE_APP_SETUP.md` for the full step-by-step process.

## Main Pages

- Home
- Donation form
- Churches directory
- Ministries
- Hope Channel Philippines
- Adventist World Radio 89.1 FM
- About
- Contact
- Donor confirmation
- Admin dashboard demo

## Deployment to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Keep the default Next.js framework settings.
4. Deploy.

No environment variables are required for this demo.

## Payment and Data Notes

Payment methods are represented as placeholders for future integration:

- GCash
- Maya
- Bank Transfer
- Debit/Credit Card
- Over-the-Counter Deposit

The current form validates sample input and shows a demo confirmation message. It does not submit to a backend.

## Maintenance Fee Model

The donation form includes a disclosed 2% platform maintenance fee for demo planning:

- Donor enters the donation amount.
- The form calculates the 2% maintenance fee.
- The form shows the total demo charge.
- The maintenance fee destination account is centralized in `lib/fees.ts`.

Before using this in production, confirm official church authorization, payment gateway rules, donor disclosure wording, receipt treatment, tax/accounting treatment, and data privacy compliance. In live payments, this should be handled through approved gateway split payments, transfers, or settlement rules rather than manual handling.

## Digital Invoice Demo

After a valid demo donation submission, the app generates a digital donation acknowledgment with:

- Invoice number
- Donor details
- Donation type and recipient
- Payment method
- Donation amount
- 2% maintenance fee
- Total demo charge
- Maintenance fee destination account
- Print / Save PDF action

This is intentionally labeled as a demo acknowledgment, not an official receipt. In production, invoices or receipts should only be issued after confirmed payment settlement and according to official church/ministry accounting policy.

## Color System

The interface uses a Luzon Adventist palette inspired by the NPUC/NLPUM web presence:

- Deep Adventist Navy: `#0A1F44`
- Adventist Blue: `#003F7D`
- Mission Gold: `#D6A935`
- Warm Cream: `#F7F1E3`
- Soft Gray: `#F4F6F8`

Hope Channel Philippines and Adventist World Radio 89.1 FM use dedicated media-ministry palettes so their pages feel distinct while remaining part of the same giving platform.

## Future Improvements

- Supabase database
- Supabase Auth for admin login
- PayMongo payment gateway
- GCash/Maya integration
- Email receipts
- Donor accounts
- Church admin accounts
- Donation reports
- Official receipt tracking
- Data privacy compliance features
