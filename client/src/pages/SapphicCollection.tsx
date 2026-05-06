// ============================================================
// SLOW STROKES — Sapphic Collection Page
// Celebrating butch, femme, and sapphic prints
// ============================================================

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";

interface SapphicPrint {
  id: string;
  name: string;
  theme: "butch" | "femme" | "sapphic";
  tagline: string;
  description: string;
  price: number;
  image: string;
}

// Placeholder sapphic prints — add real ones when ready
const sapphicPrints: SapphicPrint[] = [
  {
    id: "sapphic-1",
    name: "Butch Hands",
    theme: "butch",
    tagline: "Strength and tenderness",
    description:
      "A study in the power and gentleness of butch hands. Carved and printed as a celebration of masculine energy in all its forms.",
    price: 3500,
    image: "https://via.placeholder.com/400x500?text=Butch+Hands",
  },
  {
    id: "sapphic-2",
    name: "Femme Bloom",
    theme: "femme",
    tagline: "Softness is power",
    description:
      "An intimate portrait of femme beauty and strength. Celebrating the power of softness, curves, and the unapologetic femininity of sapphic women.",
    price: 4000,
    image: "https://via.placeholder.com/400x500?text=Femme+Bloom",
  },
  {
    id: "sapphic-3",
    name: "Two Moons",
    theme: "sapphic",
    tagline: "Queer love under the stars",
    description:
      "Two moons rising together. A celebration of sapphic love, connection, and the beauty of women loving women.",
    price: 4500,
    image: "https://via.placeholder.com/400x500?text=Two+Moons",
  },
];

const themes = [
  {
    title: "Butch",
    description:
      "Celebrating masculine energy, strength, and the butch aesthetic. These prints honor the power and tenderness of butch identity.",
    color: "from-[oklch(0.68_0.12_65)] to-[oklch(0.50_0.12_65)]",
  },
  {
    title: "Femme",
    description:
      "Honoring femme beauty, softness, and power. These prints celebrate the strength of feminine expression in sapphic spaces.",
    color: "from-[oklch(0.70_0.12_65)] to-[oklch(0.55_0.12_65)]",
  },
  {
    title: "Sapphic",
    description:
      "Celebrating women-loving-women in all its forms. These prints explore queer love, connection, and the beauty of sapphic community.",
    color: "from-[oklch(0.65_0.12_65)] to-[oklch(0.50_0.12_65)]",
  },
];

export default function SapphicCollection() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden bg-gradient-to-br from-[oklch(0.16_0.005_285)] to-[oklch(0.12_0.005_285)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[oklch(0.68_0.12_65)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-[oklch(0.68_0.12_65/50%)] rounded-full blur-3xl" />
        </div>

        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            <p className="label-mono mb-4 flex items-center gap-2">
              <Heart size={14} className="text-[oklch(0.68_0.12_65)]" />
              Sapphic Collection
            </p>
            <h1
              className="text-5xl md:text-6xl font-black text-[oklch(0.93_0.010_75)] leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Queer Love,
              <br />
              <em className="text-[oklch(0.68_0.12_65)] not-italic">
                Carved by Hand.
              </em>
            </h1>
            <p className="text-[oklch(0.65_0.010_75)] text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Prints celebrating butch pride, femme power, and sapphic love. Each print is a love letter to queer identity and the beauty of women loving women.
            </p>
            <Link href="/shop?category=Sapphic">
              <button className="btn-ochre flex items-center gap-2">
                Browse Sapphic Prints
                <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container">
          <div className="mb-12">
            <p className="label-mono mb-3">Themes</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Celebrating Sapphic Identity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {themes.map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[oklch(0.16_0.005_285)] border border-white/8 p-8 hover:border-[oklch(0.68_0.12_65/50%)] transition-colors"
              >
                <div className={`h-1 w-12 bg-gradient-to-r ${theme.color} mb-6`} />
                <h3
                  className="text-xl font-bold text-[oklch(0.93_0.010_75)] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {theme.title}
                </h3>
                <p className="text-[oklch(0.60_0.010_75)] leading-relaxed text-sm">
                  {theme.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prints Grid */}
      <section className="py-20 bg-[oklch(0.14_0.005_285)]">
        <div className="container">
          <div className="mb-12">
            <p className="label-mono mb-3">Coming Soon</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sapphic Prints
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sapphicPrints.map((print, i) => (
              <motion.div
                key={print.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[oklch(0.16_0.005_285)] border border-white/8 overflow-hidden hover:border-white/15 transition-colors"
              >
                {/* Image placeholder */}
                <div className="aspect-square bg-gradient-to-br from-[oklch(0.20_0.005_285)] to-[oklch(0.14_0.005_285)] flex items-center justify-center">
                  <div className="text-center">
                    <Heart
                      size={48}
                      className="text-[oklch(0.68_0.12_65/40%)] mx-auto mb-2"
                    />
                    <p className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)]">
                      Coming soon
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="label-mono text-[0.55rem] text-[oklch(0.68_0.12_65)] uppercase tracking-wider">
                      {print.theme}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-[oklch(0.93_0.010_75)] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {print.name}
                  </h3>
                  <p className="text-[0.8rem] text-[oklch(0.68_0.12_65)] mb-4">
                    {print.tagline}
                  </p>
                  <p className="text-[0.75rem] text-[oklch(0.55_0.010_75)] leading-relaxed mb-4">
                    {print.description}
                  </p>
                  <p className="text-[oklch(0.68_0.12_65)] font-bold">
                    £{(print.price / 100).toFixed(2)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-mono mb-4">Get Notified</p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[oklch(0.93_0.010_75)] mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              New sapphic prints coming soon
            </h2>
            <p className="text-[oklch(0.55_0.010_75)] mb-10 max-w-md mx-auto">
              Subscribe to be notified when new sapphic prints drop. Limited editions, hand-carved, hand-printed.
            </p>
            <div className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[oklch(0.16_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-2 text-sm focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
              />
              <button className="btn-ochre">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
