// ============================================================
// SLOW STROKES — Footer
// Butch lesbian artist's lino print shop
// ============================================================

import { Link } from "wouter";
import { Instagram, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.10_0.005_285)] border-t border-white/8 mt-24">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p
              className="text-xl font-bold text-[oklch(0.93_0.010_75)] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Slow Strokes
            </p>
            <p className="label-mono text-[0.6rem] tracking-[0.2em] mb-4">
              Hand-Printed Lino
            </p>
            <p className="text-[0.8rem] text-[oklch(0.55_0.010_75)] leading-relaxed max-w-xs">
              Butch lesbian artist creating hand-carved, hand-printed lino art. Every print is an original — pulled by hand in a small studio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-mono text-[0.65rem] mb-5 text-[oklch(0.68_0.12_65)]">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/other-art", label: "Other Art" },
                { href: "/rough-cuts", label: "Rough Cuts" },
                { href: "/sapphic", label: "Sapphic Collection" },
                { href: "/studio", label: "Studio Videos" },
                { href: "/stories", label: "Collector Stories" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.8rem] text-[oklch(0.55_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="label-mono text-[0.65rem] mb-5 text-[oklch(0.68_0.12_65)]">
              Information
            </p>
            <ul className="space-y-3">
              {[
                { href: "/contact", label: "Contact" },
                { href: "/shipping-policy", label: "Shipping Policy" },
                { href: "/returns", label: "Returns & Refunds" },
                { href: "/care", label: "Print Care Guide" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.8rem] text-[oklch(0.55_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ink-divider mt-12 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://tiktok.com/@slowstrokesbutch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.55_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors"
              aria-label="Follow on TikTok"
            >
              <Music size={18} />
            </a>
            <a
              href="https://instagram.com/slowstrokeart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.55_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <p className="label-mono text-[0.6rem] text-[oklch(0.40_0.010_75)]">
              © {new Date().getFullYear()} Slow Strokes. All rights reserved.
            </p>
            <p className="label-mono text-[0.6rem] text-[oklch(0.40_0.010_75)]">
              Handmade in the UK · Shipped worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
