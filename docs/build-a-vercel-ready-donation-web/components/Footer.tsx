import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-navy-950">
              <HeartHandshake size={20} aria-hidden="true" />
            </span>
            <span className="font-black">Adventist Giving Luzon</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
            A Vercel-ready demo for mission-minded giving across Seventh-day Adventist churches and ministries in Luzon.
            This demo does not process payments or store real donor information.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-gold-400">Giving</h2>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/donate" className="hover:text-white">Donation Form</Link>
            <Link href="/churches" className="hover:text-white">Local Churches</Link>
            <Link href="/ministries" className="hover:text-white">Ministries</Link>
            <Link href="/admin" className="hover:text-white">Admin Demo</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-gold-400">Media Ministries</h2>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/hope-channel-philippines" className="hover:text-white">Hope Channel Philippines</Link>
            <Link href="/awr-891-fm" className="hover:text-white">Adventist World Radio 89.1 FM</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55">
        Sample data only. For official use, connect verified church accounts, payments, receipts, and privacy controls.
      </div>
    </footer>
  );
}
