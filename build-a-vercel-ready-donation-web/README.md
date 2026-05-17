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
