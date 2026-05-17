# Mobile App Setup

This project is prepared for Android and iOS packaging with Capacitor.

The current configuration keeps the Vercel web app as the source of truth and opens it inside a native Capacitor shell:

```txt
Next.js on Vercel
        ↓
Capacitor Android / iOS app
        ↓
Google Play Store / Apple App Store
```

## 1. Confirm the Live App URL

Open `capacitor.config.ts` and confirm this value points to your deployed Vercel site:

```ts
const appUrl = process.env.CAPACITOR_SERVER_URL ?? "https://adventist-giving-v2.vercel.app";
```

If your real production URL is different, either update that fallback URL or use an environment variable:

```bash
CAPACITOR_SERVER_URL=https://your-real-domain.com npm run mobile:sync
```

## 2. Install Dependencies

From the project root:

```bash
npm install
```

Capacitor packages are kept in `devDependencies` because the Vercel web build does not need native Android/iOS code at runtime.

## 3. Add Android

```bash
npm run mobile:add:android
npm run mobile:sync
npm run mobile:android
```

This opens Android Studio. From there:

1. Let Gradle finish syncing.
2. Connect an Android device or start an emulator.
3. Press Run.

## 4. Add iOS

You need macOS with Xcode installed.

```bash
npm run mobile:add:ios
npm run mobile:sync
npm run mobile:ios
```

This opens Xcode. From there:

1. Select your Apple development team.
2. Set signing and bundle identifier if needed.
3. Run on an iPhone simulator or real device.

## 5. Update Native Apps After Web Changes

When the Vercel site changes, the native app will load the latest live site automatically because `server.url` points to production.

When app icons, native config, permissions, package names, or Capacitor plugins change, run:

```bash
npm run mobile:sync
```

## 6. Store Preparation Checklist

Before submitting to Google Play or the Apple App Store, prepare:

- Official organization authorization
- Privacy policy URL
- Terms of service URL
- Support/contact email
- App icon and screenshots
- Clear donation/payment disclosures
- Data privacy and deletion process
- Official receipt and donation reporting process
- Real payment provider compliance

## 7. Important Store Review Note

This app is currently a demo and does not process real payments. Before app store release, replace demo wording with official production wording and connect approved payment, receipt, privacy, and admin systems.
