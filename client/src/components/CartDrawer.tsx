// ============================================================
// LINO ART SHOP — Cart Drawer
// Slides in from right; dark surface, ochre accents
// ============================================================

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/products";
import { Link } from "wouter";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[oklch(0.14_0.005_285)] border-l border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <h2
                  className="text-xl font-bold text-[oklch(0.93_0.010_75)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Your Cart
                </h2>
                {items.length > 0 && (
                  <p className="label-mono text-[0.65rem] mt-0.5">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </p>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-[oklch(0.60_0.010_75)] hover:text-[oklch(0.93_0.010_75)] transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={40} strokeWidth={1} className="text-[oklch(0.35_0.005_285)]" />
                  <p className="text-[oklch(0.55_0.010_75)] text-sm">Your cart is empty.</p>
                  <button
                    onClick={closeCart}
                    className="btn-ghost-ochre text-xs"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map(({ product, quantity }) => (
                    <li
                      key={product.id}
                      className="flex gap-4 pb-5 border-b border-white/8"
                    >
                      {/* Thumbnail */}
                      <div className="w-20 h-20 shrink-0 overflow-hidden bg-[oklch(0.20_0.005_285)]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-bold text-[oklch(0.90_0.010_75)] leading-tight"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {product.name}
                        </p>
                        <p className="label-mono text-[0.6rem] mt-0.5 text-[oklch(0.55_0.010_75)]">
                          {product.edition} · {product.size}
                        </p>
                        <p className="text-[oklch(0.68_0.12_65)] text-sm font-semibold mt-1">
                          {formatPrice(product.price)}
                        </p>

                        {/* Quantity + remove */}
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center border border-white/15 text-[oklch(0.65_0.010_75)] hover:text-[oklch(0.93_0.010_75)] hover:border-white/30 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-mono text-sm text-[oklch(0.80_0.010_75)] w-4 text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            disabled={quantity >= product.stockCount}
                            className="w-6 h-6 flex items-center justify-center border border-white/15 text-[oklch(0.65_0.010_75)] hover:text-[oklch(0.93_0.010_75)] hover:border-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => removeItem(product.id)}
                            className="ml-auto text-[oklch(0.45_0.010_75)] hover:text-destructive transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="label-mono text-[0.65rem] text-[oklch(0.60_0.010_75)]">
                    Subtotal
                  </span>
                  <span
                    className="text-lg font-bold text-[oklch(0.93_0.010_75)]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-[0.7rem] text-[oklch(0.50_0.010_75)]">
                  Shipping calculated at checkout
                </p>
                <Link href="/checkout" onClick={closeCart}>
                  <button className="btn-ochre w-full text-center">
                    Proceed to Checkout
                  </button>
                </Link>
                <button
                  onClick={closeCart}
                  className="w-full text-center label-mono text-[0.65rem] text-[oklch(0.50_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors py-1"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
