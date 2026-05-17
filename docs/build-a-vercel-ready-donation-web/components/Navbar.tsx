"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartHandshake, Menu } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

const links = [
  { href: "/churches", label: "Churches" },
  { href: "/ministries", label: "Ministries" },
  { href: "/hope-channel-philippines", label: "Hope Channel" },
  { href: "/awr-891-fm", label: "AWR 89.1 FM" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-linen/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-400 shadow-soft">
            <HeartHandshake size={22} aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black text-navy-950">Adventist Giving</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-navy-800/70">Luzon Demo</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-navy-900/75 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded-full hover:text-navy-950">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="/donate" className="hidden sm:inline-flex">Give Now</ButtonLink>
          <button
            onClick={() => setOpen((current) => !current)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu size={20} aria-hidden="true" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-navigation" className="border-t border-navy-900/10 bg-linen px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 text-sm font-bold text-navy-900/80">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl bg-white px-4 py-3 shadow-sm hover:text-navy-950"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="focus-ring rounded-2xl bg-gold-500 px-4 py-3 text-center font-black text-navy-950 shadow-glow"
            >
              Give Now
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
