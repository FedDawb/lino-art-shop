// ============================================================
// SLOW STROKES — Header / Navigation
// Butch lesbian artist's lino print shop
// Dark charcoal bg, Playfair Display wordmark, ochre cart badge
// ============================================================

import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/studio", label: "Studio Videos" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.12_0.005_285/95%)] backdrop-blur-md border-b border-white/8"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-xl font-bold tracking-tight text-[oklch(0.93_0.010_75)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Slow Strokes
            </span>
            <span className="label-mono text-[0.6rem] tracking-[0.2em]">
              Hand-Printed Lino
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`label-mono text-[0.7rem] tracking-widest transition-colors hover:text-[oklch(0.68_0.12_65)] ${
                  location.startsWith(href)
                    ? "text-[oklch(0.68_0.12_65)]"
                    : "text-[oklch(0.65_0.010_75)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Cart button */}
            <button
              onClick={openCart}
              className="relative p-2 text-[oklch(0.80_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] text-[0.6rem] font-bold flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-[oklch(0.80_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[oklch(0.14_0.005_285)] border-b border-white/10 md:hidden"
          >
            <nav className="container py-6 flex flex-col gap-5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="label-mono text-sm tracking-widest text-[oklch(0.80_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
