// ============================================================
// SLOW STROKES — Other Art Page
// Paintings, line drawings, and ACEOs
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { Link } from "wouter";

interface OtherArtwork {
  id: string;
  title: string;
  category: "Painting" | "Line Drawing" | "ACEO";
  description: string;
  price: number;
  size: string;
  medium: string;
  image: string;
  inStock: boolean;
}

// Placeholder artworks — add your own paintings, line drawings, and ACEOs here
const artworks: OtherArtwork[] = [
  {
    id: "painting-1",
    title: "Coming Soon",
    category: "Painting",
    description: "Your paintings will appear here. Upload images and add details to showcase your work.",
    price: 0,
    size: "TBD",
    medium: "TBD",
    image: "https://via.placeholder.com/400x500?text=Painting+Coming+Soon",
    inStock: false,
  },
  {
    id: "line-drawing-1",
    title: "Coming Soon",
    category: "Line Drawing",
    description: "Your line drawings will appear here. Upload images and add details to showcase your work.",
    price: 0,
    size: "TBD",
    medium: "TBD",
    image: "https://via.placeholder.com/400x500?text=Line+Drawing+Coming+Soon",
    inStock: false,
  },
  {
    id: "aceo-1",
    title: "Coming Soon",
    category: "ACEO",
    description: "Your ACEOs will appear here. Upload images and add details to showcase your work.",
    price: 0,
    size: "2.5 x 3.5 inches",
    medium: "TBD",
    image: "https://via.placeholder.com/300x400?text=ACEO+Coming+Soon",
    inStock: false,
  },
];

const categories = ["All", "Painting", "Line Drawing", "ACEO"];

export default function OtherArt() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <p className="label-mono mb-3 flex items-center gap-2">
            <Palette size={14} className="text-[oklch(0.68_0.12_65)]" />
            Beyond Lino
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-[oklch(0.93_0.010_75)] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Other Art
          </h1>
          <p className="text-[oklch(0.60_0.010_75)] text-lg leading-relaxed">
            While lino printing is my primary medium, I also work in paintings, line drawings, and ACEOs. Each piece carries the same intentionality and craft as my prints. Hand-made, one-of-a-kind or limited edition works that celebrate the beauty of slow, deliberate creation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)]"
                  : "bg-[oklch(0.16_0.005_285)] text-[oklch(0.68_0.12_65)] border border-[oklch(0.68_0.12_65)] hover:bg-[oklch(0.68_0.12_65)] hover:text-[oklch(0.12_0.005_285)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Artworks Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredArtworks.map((artwork, i) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-[oklch(0.16_0.005_285)] border border-white/10 mb-4">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] px-3 py-1 text-xs font-semibold">
                  {artwork.category}
                </div>
              </div>

              <div className="space-y-3">
                <h3
                  className="text-lg font-bold text-[oklch(0.93_0.010_75)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {artwork.title}
                </h3>
                <p className="text-sm text-[oklch(0.60_0.010_75)] leading-relaxed">
                  {artwork.description}
                </p>

                <div className="space-y-2 text-xs text-[oklch(0.55_0.010_75)]">
                  <p>
                    <span className="font-semibold">Size:</span> {artwork.size}
                  </p>
                  <p>
                    <span className="font-semibold">Medium:</span> {artwork.medium}
                  </p>
                </div>

                {artwork.inStock ? (
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-lg font-bold text-[oklch(0.68_0.12_65)]">
                      £{(artwork.price / 100).toFixed(2)}
                    </span>
                    <button className="px-4 py-2 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] text-sm font-semibold hover:bg-[oklch(0.75_0.12_65)] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-[oklch(0.55_0.010_75)] italic">
                      Coming soon
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[oklch(0.16_0.005_285)] to-[oklch(0.12_0.005_285)] border border-[oklch(0.68_0.12_65/20%)] p-12 text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            More Art Coming Soon
          </h2>
          <p className="text-[oklch(0.60_0.010_75)] max-w-2xl mx-auto mb-8 text-lg">
            Follow my socials for updates on new paintings, line drawings, and ACEOs. Each piece is made with the same care and intention as my lino prints.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://instagram.com/slowstrokeart"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] font-semibold hover:bg-[oklch(0.75_0.12_65)] transition-colors"
            >
              Follow on Instagram
            </a>
            <a
              href="https://tiktok.com/@slowstrokesbutch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[oklch(0.68_0.12_65)] text-[oklch(0.68_0.12_65)] hover:bg-[oklch(0.68_0.12_65)] hover:text-[oklch(0.12_0.005_285)] transition-colors font-semibold"
            >
              Follow on TikTok
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
