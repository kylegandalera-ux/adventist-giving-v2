import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PWARegister } from "@/components/PWARegister";
import { NativeAppBridge } from "@/components/NativeAppBridge";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "adventist-giving-v2.vercel.app"}`),
  title: {
    default: "Adventist Giving Luzon",
    template: "%s | Adventist Giving Luzon"
  },
  description: "An installable giving platform demo for Seventh-day Adventist churches and ministries across Luzon.",
  applicationName: "Adventist Giving Luzon",
  manifest: "/manifest.webmanifest",
  themeColor: "#0A1F44",
  appleWebApp: {
    capable: true,
    title: "Giving Luzon",
    statusBarStyle: "black-translucent"
  },
  formatDetection: {
    telephone: false
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "Adventist Giving Luzon",
    description: "Installable giving access for Adventist churches and ministries across Luzon.",
    type: "website",
    images: ["/icons/icon-512.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <PWARegister />
        <NativeAppBridge />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
