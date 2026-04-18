// ============================================================
// LINO ART SHOP — Shop Page
// Product grid with category filter
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="label-mono mb-3">The Collection</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[oklch(0.93_0.010_75)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            All Prints
          </h1>
          <p className="text-[oklch(0.55_0.010_75)] mt-3 max-w-md">
            Hand-carved, hand-printed, limited editions. Each print is signed
            and numbered by the artist.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`label-mono text-[0.65rem] px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] border-[oklch(0.68_0.12_65)]"
                  : "bg-transparent text-[oklch(0.60_0.010_75)] border-white/15 hover:border-[oklch(0.68_0.12_65/50%)] hover:text-[oklch(0.80_0.010_75)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="label-mono text-[0.6rem] text-[oklch(0.45_0.010_75)] mb-6">
          {filtered.length} {filtered.length === 1 ? "print" : "prints"} available
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[oklch(0.50_0.010_75)]">No prints in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
