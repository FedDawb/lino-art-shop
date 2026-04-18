// ============================================================
// LINO ART SHOP — Product Card
// Used in shop grid and homepage featured section
// ============================================================

import { Link } from "wouter";
import { ShoppingBag } from "lucide-react";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/product/${product.id}`}>
        <div className="product-card group bg-[oklch(0.16_0.005_285)] overflow-hidden">
          {/* Image */}
          <div className="relative overflow-hidden aspect-square bg-[oklch(0.12_0.005_285)]">
            <img
              src={product.image}
              alt={product.name}
              className="product-image w-full h-full object-cover"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Quick add button */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] py-3 label-mono text-[0.65rem] tracking-widest font-semibold hover:bg-[oklch(0.75_0.12_65)] transition-colors"
              >
                <ShoppingBag size={13} />
                Add to Cart
              </button>
            </div>

            {/* Edition badge */}
            <div className="absolute top-3 left-3">
              <span className="label-mono text-[0.55rem] bg-[oklch(0.12_0.005_285/85%)] backdrop-blur-sm px-2 py-1 text-[oklch(0.68_0.12_65)]">
                {product.edition}
              </span>
            </div>

            {/* Low stock warning */}
            {product.stockCount <= 5 && (
              <div className="absolute top-3 right-3">
                <span className="label-mono text-[0.55rem] bg-destructive/90 px-2 py-1 text-white">
                  Only {product.stockCount} left
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-4">
            <p className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)] mb-1">
              {product.category}
            </p>
            <h3
              className="text-base font-bold text-[oklch(0.90_0.010_75)] leading-tight mb-1 group-hover:text-[oklch(0.68_0.12_65)] transition-colors"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h3>
            <p className="text-[0.75rem] text-[oklch(0.55_0.010_75)] mb-3 line-clamp-1">
              {product.tagline}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[oklch(0.68_0.12_65)] font-semibold text-sm">
                {formatPrice(product.price)}
              </span>
              <span className="label-mono text-[0.6rem] text-[oklch(0.45_0.010_75)]">
                {product.size}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
