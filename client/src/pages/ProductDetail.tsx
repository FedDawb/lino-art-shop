// ============================================================
// LINO ART SHOP — Product Detail Page
// ============================================================

import { useParams, Link } from "wouter";
import { ArrowLeft, ShoppingBag, Package, Truck, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { getProductById, formatPrice, products } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id);
  const { addItem, items } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center">
        <p className="text-[oklch(0.55_0.010_75)] mb-4">Print not found.</p>
        <Link href="/shop">
          <button className="btn-ghost-ochre">Back to Shop</button>
        </Link>
      </div>
    );
  }

  const cartItem = items.find((i) => i.product.id === product.id);
  const inCart = !!cartItem;

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`, {
      description: formatPrice(product.price),
      style: {
        background: "oklch(0.16 0.005 285)",
        border: "1px solid oklch(1 0 0 / 10%)",
        color: "oklch(0.93 0.010 75)",
      },
    });
  };

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);
  const otherRelated = products
    .filter((p) => p.id !== product.id && p.category !== product.category)
    .slice(0, 3 - related.length);
  const suggestions = [...related, ...otherRelated].slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Back link */}
        <Link href="/shop">
          <span className="inline-flex items-center gap-2 label-mono text-[0.65rem] text-[oklch(0.50_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors mb-8">
            <ArrowLeft size={12} />
            Back to Shop
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square bg-[oklch(0.16_0.005_285)] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Edition badge */}
            <div className="absolute top-4 left-4">
              <span className="label-mono text-[0.6rem] bg-[oklch(0.12_0.005_285/90%)] backdrop-blur-sm px-3 py-1.5 text-[oklch(0.68_0.12_65)]">
                {product.edition}
              </span>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)] mb-2">
              {product.category}
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h1>
            <p className="text-[oklch(0.55_0.010_75)] italic mb-6">
              {product.tagline}
            </p>

            <div className="text-3xl font-bold text-[oklch(0.68_0.12_65)] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {formatPrice(product.price)}
            </div>

            <p className="text-[oklch(0.65_0.010_75)] leading-relaxed mb-8 text-sm">
              {product.description}
            </p>

            {/* Specs table */}
            <div className="bg-[oklch(0.16_0.005_285)] border border-white/8 mb-8">
              {[
                { label: "Edition", value: product.edition },
                { label: "Size", value: product.size },
                { label: "Paper", value: product.paper },
                { label: "Ink", value: product.ink },
                { label: "Availability", value: product.inStock ? `${product.stockCount} remaining` : "Sold out" },
              ].map(({ label, value }, i, arr) => (
                <div
                  key={label}
                  className={`flex items-start gap-4 px-5 py-3 ${i < arr.length - 1 ? "border-b border-white/8" : ""}`}
                >
                  <span className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)] w-24 shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-[0.8rem] text-[oklch(0.80_0.010_75)]">{value}</span>
                </div>
              ))}
            </div>

            {/* Add to cart */}
            {product.inStock ? (
              <button
                onClick={handleAddToCart}
                className="btn-ochre w-full flex items-center justify-center gap-2 mb-4"
              >
                <ShoppingBag size={14} />
                {inCart ? "Add Another to Cart" : "Add to Cart"}
              </button>
            ) : (
              <button disabled className="btn-ochre w-full opacity-40 cursor-not-allowed mb-4">
                Sold Out
              </button>
            )}

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Package, label: "Carefully packaged" },
                { icon: Truck, label: "Worldwide shipping" },
                { icon: Shield, label: "Secure checkout" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center p-3 bg-[oklch(0.16_0.005_285)] border border-white/8">
                  <Icon size={16} strokeWidth={1.5} className="text-[oklch(0.68_0.12_65)]" />
                  <span className="label-mono text-[0.55rem] text-[oklch(0.50_0.010_75)]">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related prints */}
        {suggestions.length > 0 && (
          <section className="mt-20">
            <div className="ink-divider mb-12" />
            <p className="label-mono mb-3">You may also like</p>
            <h2
              className="text-2xl font-bold text-[oklch(0.93_0.010_75)] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              More Prints
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
