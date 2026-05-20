// ============================================================
// SLOW STROKES — Rough Cuts Page
// Exclusive collection of beautiful imperfections
// Loved imperfections, unique records of honest craft
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Play } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/lib/products";
import { toast } from "sonner";

const roughCuts: Product[] = [
  {
    id: "rough-poppy-smudge",
    name: "The Poppy (Smudge)",
    tagline: "Loved imperfection",
    description:
      "The ink was too generous on this pull—a moment of abundance that created a beautiful shadow across the bloom. This is the mark of a hand that gave too much love.",
    price: 2500,
    edition: "One-of-a-kind",
    size: "A4 (21 × 29.7 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Oil-based relief ink, black",
    category: "Rough Cuts",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-print-botanicals-AdJyGkvi9xwH6Vnjbh6xVc.webp",
    inStock: true,
    stockCount: 1,
  },
  {
    id: "rough-crow-chatter",
    name: "The Crow (Ink Chatter)",
    tagline: "Loved imperfection",
    description:
      "The press stuttered mid-pull, creating an uneven ink distribution that gives the crow an almost trembling energy. Imperfection became intention.",
    price: 2500,
    edition: "One-of-a-kind",
    size: "A4 (21 × 29.7 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Oil-based relief ink, red",
    category: "Rough Cuts",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-print-heron-AdJyGkvi9xwH6Vnjbh6xVc.webp",
    inStock: true,
    stockCount: 1,
  },
  {
    id: "rough-field-gouge",
    name: "The Field (Gouge Mark)",
    tagline: "Loved imperfection",
    description:
      "My hand slipped during carving—a moment of vulnerability etched into the block. Rather than discard it, I embraced it. The mark became part of the story.",
    price: 2500,
    edition: "One-of-a-kind",
    size: "A4 (21 × 29.7 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Oil-based relief ink, black",
    category: "Rough Cuts",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-print-wave-AdJyGkvi9xwH6Vnjbh6xVc.webp",
    inStock: true,
    stockCount: 1,
  },
  {
    id: "rough-spring-burst",
    name: "Spring Burst",
    tagline: "The language of pressure and touch",
    description:
      "Hand-pressed into thick, textured paper, this print reveals the intimate geography of my hands. Where I pressed deepest—where my body leaned into the block with intention—the blooms emerge luminous and full. Where my touch faltered, the ink whispers softly, showing me exactly where to return, where to press harder next time. The chatter marks are not mistakes. They are a conversation between my hands and the paper, a record of vulnerability and learning. Each uneven line, each stuttering bloom, is a love letter to the work itself. This is what it means to carve by hand—to leave evidence of exactly how much you cared.",
    price: 3500,
    edition: "One-of-a-kind",
    size: "A3 (29.7 × 42 cm)",
    paper: "Thick, deep-textured handmade paper, cream",
    ink: "Oil-based relief ink, black",
    category: "Rough Cuts",
    image: "/manus-storage/20260520_114547_be7a5b03.jpg",
    inStock: true,
    stockCount: 1,
  },
];

export default function RoughCuts() {
  const { addItem } = useCart();
  const [selectedPrint, setSelectedPrint] = useState<Product | null>(null);

  const handleAddToCart = (print: Product) => {
    addItem(print);
    toast.success(`${print.name} added to cart`);
  };

  const handleViewDetails = (print: Product) => {
    setSelectedPrint(print);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20 bg-gradient-to-br from-[oklch(0.16_0.005_285)] to-[oklch(0.12_0.005_285)]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[oklch(0.68_0.12_65)] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[oklch(0.68_0.12_65)] rounded-full blur-3xl" />
        </div>

        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl"
          >
            <h1
              className="text-6xl md:text-7xl font-black text-[oklch(0.93_0.010_75)] leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Rough Cuts
            </h1>
            <p
              className="text-2xl md:text-3xl font-bold text-[oklch(0.68_0.12_65)] mb-8 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Loved Imperfections
            </p>
            <p className="text-[oklch(0.65_0.010_75)] text-base md:text-lg leading-relaxed max-w-2xl">
              Every soul needs a place to belong, to be cherished not just despite their imperfections, but because of them. In the studio, the 'Rough Cuts' are the prints that didn't quite make the main edition—the ones where the ink was too generous, where the hand slipped, where the paper reveals the honest, raw marks of the maker. These prints are not 'seconds.' They are unique records of a moment, each one carrying its own story, its own beautiful mistake. They are waiting for a home where they can be loved, cherished, and viewed in all their beauty. I lovingly offer them here to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rough Cuts Grid */}
      <section className="py-24 bg-[oklch(0.12_0.005_285)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {roughCuts.map((print, i) => (
              <motion.div
                key={print.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col"
              >
                {/* Image Container */}
                <div className="relative mb-6 bg-[oklch(0.95_0.005_75)] aspect-square flex items-center justify-center overflow-hidden group">
                  <img
                    src={print.image}
                    alt={print.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Print Info */}
                <div className="flex-1 flex flex-col">
                  <h3
                    className="text-xl font-bold text-[oklch(0.93_0.010_75)] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {print.name}
                  </h3>
                  <p className="text-[oklch(0.60_0.010_75)] text-sm mb-3">
                    {print.description}
                  </p>
                  <p className="text-[oklch(0.68_0.12_65)] text-xs mb-4 font-semibold">
                    {print.tagline}
                  </p>

                  {/* Price */}
                  <p className="text-2xl font-bold text-[oklch(0.93_0.010_75)] mb-6">
                    £{(print.price / 100).toFixed(2)}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 mt-auto">
                    <button
                      onClick={() => handleViewDetails(print)}
                      className="px-4 py-2 border border-[oklch(0.68_0.12_65)] text-[oklch(0.68_0.12_65)] hover:bg-[oklch(0.68_0.12_65)] hover:text-[oklch(0.12_0.005_285)] transition-colors font-semibold text-sm"
                    >
                      VIEW DETAILS
                    </button>
                    <button
                      onClick={() => handleAddToCart(print)}
                      className="px-4 py-2 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] hover:bg-[oklch(0.75_0.12_65)] transition-colors font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={16} />
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedPrint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPrint(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[oklch(0.16_0.005_285)] border border-[oklch(0.68_0.12_65/30%)] max-w-2xl w-full p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="bg-[oklch(0.95_0.005_75)] aspect-square flex items-center justify-center">
                <img
                  src={selectedPrint.image}
                  alt={selectedPrint.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2
                    className="text-3xl font-bold text-[oklch(0.93_0.010_75)] mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {selectedPrint.name}
                  </h2>
                  <p className="text-[oklch(0.68_0.12_65)] font-semibold mb-4">
                    {selectedPrint.tagline}
                  </p>
                  <p className="text-[oklch(0.65_0.010_75)] leading-relaxed mb-6">
                    {selectedPrint.description}
                  </p>
                  <p className="text-3xl font-bold text-[oklch(0.93_0.010_75)] mb-8">
                    £{(selectedPrint.price / 100).toFixed(2)}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      handleAddToCart(selectedPrint);
                      setSelectedPrint(null);
                    }}
                    className="w-full px-4 py-3 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] hover:bg-[oklch(0.75_0.12_65)] transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    ADD TO CART
                  </button>
                  <button
                    onClick={() => setSelectedPrint(null)}
                    className="w-full px-4 py-3 border border-white/20 text-[oklch(0.85_0.010_75)] hover:border-white/40 transition-colors font-semibold"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[oklch(0.14_0.005_285)] to-[oklch(0.12_0.005_285)]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-mono mb-6 text-[oklch(0.68_0.12_65)]">
              Behind the Scenes
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[oklch(0.93_0.010_75)] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Watch Me Find Them Homes
            </h2>
            <p className="text-[oklch(0.60_0.010_75)] max-w-2xl mx-auto mb-10">
              See the stories behind these beautiful imperfections. Follow along as I share the process, the moments, and the love that goes into every print.
            </p>
            <a
              href="https://tiktok.com" // Replace with your actual TikTok URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] hover:bg-[oklch(0.75_0.12_65)] transition-colors font-semibold text-lg"
            >
              <Play size={20} />
              WATCH ON TIKTOK
            </a>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[oklch(0.16_0.005_285)] border border-white/8 p-10"
          >
            <h3
              className="text-2xl font-bold text-[oklch(0.93_0.010_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About Rough Cuts
            </h3>
            <p className="text-[oklch(0.65_0.010_75)] leading-relaxed mb-4">
              These prints are one-of-a-kind. Each rough cut is a unique moment in the studio—a record of the hand, the press, and the honest marks of the maker. They are not flawed; they are complete. They carry the story of their creation, and they deserve to be cherished.
            </p>
            <p className="text-[oklch(0.65_0.010_75)] leading-relaxed">
              Every rough cut comes with a certificate of authenticity and the story of its imperfection. These are the prints that teach us that beauty is not about perfection—it's about truth, vulnerability, and the courage to let our work be seen.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
