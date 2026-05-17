import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "custom";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-gold-500 text-navy-950 shadow-glow hover:bg-gold-400",
    secondary: "border border-navy-900/15 bg-white text-navy-900 hover:border-gold-500 hover:text-navy-950",
    light: "border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20",
    custom: ""
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
