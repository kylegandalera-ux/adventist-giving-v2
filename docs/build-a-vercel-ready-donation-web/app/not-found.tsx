import Link from "next/link";
import { Compass } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/donate", label: "Give Now" },
  { href: "/churches", label: "Churches" },
  { href: "/ministries", label: "Ministries" },
  { href: "/admin", label: "Admin Demo" }
];

export default function NotFound() {
  return (
    <section className="bg-linen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-soft sm:p-12">
        <Compass className="mx-auto text-gold-500" size={54} aria-hidden="true" />
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-gold-500">Page not found</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-navy-950">Let&apos;s get you back to the giving platform.</h1>
        <p className="mt-5 text-lg leading-8 text-navy-900/70">
          The page address may have changed. Use one of the main Adventist Giving Luzon sections below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-full border border-navy-900/12 bg-white px-5 py-3 text-sm font-bold text-navy-900 hover:border-gold-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
