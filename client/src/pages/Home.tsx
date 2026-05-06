// ============================================================
// SLOW STROKES — Home Page
// Butch lesbian artist's lino print shop
// Hero with studio image, featured prints, about teaser
// ============================================================

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-hero-bg-amKm3yNmqb2MgW4W3MpJqj.webp";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Lino printing studio"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay — text is dark-on-dark so we need strong overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.005_285)] via-[oklch(0.12_0.005_285/70%)] to-[oklch(0.12_0.005_285/30%)]" />
        </div>

        {/* Hero content */}
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            <p className="label-mono mb-4">
              Hand-Carved Lino Prints by a Butch Lesbian Artist
            </p>
            <h1
              className="text-5xl md:text-7xl font-black text-[oklch(0.93_0.010_75)] leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Slow Strokes.
              <br />
              <em className="text-[oklch(0.68_0.12_65)] not-italic">
                Carved by Hand.
              </em>
            </h1>
            <p className="text-[oklch(0.65_0.010_75)] text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Each print is individually hand-carved from lino and pulled by
              hand. No two are identical. Every print carries the mark of the
              maker — a queer artist creating work that celebrates the beauty
              of slow, intentional craft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop">
                <button className="btn-ochre flex items-center gap-2">
                  Browse Prints
                  <ArrowRight size={14} />
                </button>
              </Link>
              <Link href="/studio">
                <button className="btn-ghost-ochre">Watch Me Print</button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
        >
          <span className="label-mono text-[0.55rem] text-[oklch(0.45_0.010_75)] rotate-90 origin-center mb-4">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[oklch(0.68_0.12_65)] to-transparent" />
        </motion.div>
      </section>

      {/* ── Featured Prints ───────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="label-mono mb-3">Latest Work</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Featured Prints
              </h2>
            </div>
            <Link href="/shop">
              <span className="hidden md:flex items-center gap-2 label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)] hover:text-[oklch(0.80_0.12_65)] transition-colors">
                View All
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link href="/shop">
              <button className="btn-ghost-ochre">View All Prints</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process / About teaser ────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.005_285)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="label-mono mb-3">The Craft</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Slow, Intentional Work
              </h2>
              <p className="text-[oklch(0.60_0.010_75)] leading-relaxed mb-4">
                Every print starts with a drawing or observation. I transfer it
                to a lino block and carve it by hand, taking time with each line.
                The block is then inked and pressed onto heavyweight paper — a
                process that can't be rushed.
              </p>
              <p className="text-[oklch(0.60_0.010_75)] leading-relaxed mb-8">
                Each edition is strictly limited. Once sold out, the block is
                retired. What you receive is a genuine original, signed and
                numbered by me.
              </p>
              <Link href="/about">
                <button className="btn-ghost-ochre flex items-center gap-2">
                  Learn More
                  <ArrowRight size={13} />
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "100%", label: "Hand-carved & printed" },
                { value: "Limited", label: "Editions only" },
                { value: "Queer", label: "Artist-owned" },
                { value: "Worldwide", label: "Shipping available" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[oklch(0.18_0.005_285)] border border-white/8 p-6"
                >
                  <p
                    className="text-2xl font-bold text-[oklch(0.68_0.12_65)] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {value}
                  </p>
                  <p className="label-mono text-[0.6rem] text-[oklch(0.55_0.010_75)]">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sapphic Collection teaser ────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.005_285)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="label-mono mb-4">Celebrating Queer Love</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)] mb-4 max-w-2xl mx-auto"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sapphic Collection Coming Soon
            </h2>
            <p className="text-[oklch(0.60_0.010_75)] mb-8 max-w-md mx-auto">
              Prints celebrating butch pride, femme power, and sapphic love. Hand-carved, hand-printed, queer-owned.
            </p>
            <Link href="/sapphic">
              <button className="btn-ghost-ochre flex items-center gap-2 mx-auto">
                Explore Sapphic Prints
                <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Collector Stories teaser ────────────────────── */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="label-mono mb-4">Community</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)] mb-4 max-w-2xl mx-auto"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How do you live with your print?
            </h2>
            <p className="text-[oklch(0.60_0.010_75)] mb-8 max-w-md mx-auto">
              Share your story. Where it hangs, what it means to you, how it makes you feel.
            </p>
            <Link href="/stories">
              <button className="btn-ghost-ochre flex items-center gap-2 mx-auto">
                Read Collector Stories
                <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-mono mb-4">Limited Editions</p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[oklch(0.93_0.010_75)] mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Own a piece of slow, queer craft
            </h2>
            <p className="text-[oklch(0.55_0.010_75)] mb-10 max-w-md mx-auto">
              When an edition sells out, it's gone for good. Browse the current
              collection while prints are available.
            </p>
            <Link href="/shop">
              <button className="btn-ochre">Shop All Prints</button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
