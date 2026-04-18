// ============================================================
// LINO ART SHOP — Checkout Page
// Shipping calculator + Stripe Payment Links / Checkout Session
// ============================================================

import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CreditCard, Lock, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/products";
import {
  countries,
  getShippingZone,
  ShippingOption,
  formatPrice as formatShipping,
} from "@/lib/shipping";
import { STRIPE_PAYMENT_LINKS, hasStripeConfigured } from "@/lib/stripe";
import { toast } from "sonner";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [countryCode, setCountryCode] = useState("GB");
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const zone = getShippingZone(countryCode);
  const shippingOptions = zone.options;

  const handleCountryChange = (code: string) => {
    setCountryCode(code);
    setSelectedShipping(null);
  };

  const total = subtotal + (selectedShipping?.price ?? 0);
  const stripeReady = hasStripeConfigured();

  const handleCheckout = async () => {
    if (!selectedShipping) {
      toast.error("Please select a shipping option", {
        style: { background: "oklch(0.16 0.005 285)", border: "1px solid oklch(1 0 0 / 10%)", color: "oklch(0.93 0.010 75)" },
      });
      return;
    }
    if (!name.trim() || !email.trim()) {
      toast.error("Please enter your name and email", {
        style: { background: "oklch(0.16 0.005 285)", border: "1px solid oklch(1 0 0 / 10%)", color: "oklch(0.93 0.010 75)" },
      });
      return;
    }

    setIsLoading(true);

    // If only one item and a payment link exists, redirect directly
    if (items.length === 1) {
      const link = STRIPE_PAYMENT_LINKS[items[0].product.id];
      if (link) {
        window.location.href = link;
        return;
      }
    }

    // Simulate checkout for demo
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);

    toast.info("Stripe not yet configured", {
      description: "Add your Stripe Payment Links or Secret Key to activate live payments. See the setup guide below.",
      duration: 8000,
      style: { background: "oklch(0.16 0.005 285)", border: "1px solid oklch(0.68 0.12 65 / 40%)", color: "oklch(0.93 0.010 75)" },
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center">
        <p className="text-[oklch(0.55_0.010_75)] mb-4">Your cart is empty.</p>
        <Link href="/shop">
          <button className="btn-ochre">Browse Prints</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container max-w-5xl">
        <Link href="/shop">
          <span className="inline-flex items-center gap-2 label-mono text-[0.65rem] text-[oklch(0.50_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors mb-8">
            <ArrowLeft size={12} />
            Continue Shopping
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="label-mono mb-3">Secure Checkout</p>
          <h1
            className="text-3xl font-bold text-[oklch(0.93_0.010_75)] mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Order
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left column */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact info */}
            <div className="bg-[oklch(0.16_0.005_285)] border border-white/8">
              <div className="px-6 py-4 border-b border-white/8">
                <p className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)]">Contact Information</p>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div>
                  <label className="label-mono text-[0.6rem] text-[oklch(0.55_0.010_75)] block mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-[oklch(0.20_0.005_285)] border border-white/15 text-[oklch(0.80_0.010_75)] text-sm px-4 py-2.5 focus:outline-none focus:border-[oklch(0.68_0.12_65)] transition-colors placeholder:text-[oklch(0.35_0.010_75)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="label-mono text-[0.6rem] text-[oklch(0.55_0.010_75)] block mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-[oklch(0.20_0.005_285)] border border-white/15 text-[oklch(0.80_0.010_75)] text-sm px-4 py-2.5 focus:outline-none focus:border-[oklch(0.68_0.12_65)] transition-colors placeholder:text-[oklch(0.35_0.010_75)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              </div>
            </div>

            {/* Order items */}
            <div className="bg-[oklch(0.16_0.005_285)] border border-white/8">
              <div className="px-6 py-4 border-b border-white/8">
                <p className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)]">Order Items</p>
              </div>
              <ul className="divide-y divide-white/8">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex gap-4 px-6 py-4">
                    <div className="w-16 h-16 shrink-0 overflow-hidden bg-[oklch(0.12_0.005_285)]">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[oklch(0.90_0.010_75)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {product.name}
                      </p>
                      <p className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)] mt-0.5">
                        {product.size} · Qty {quantity}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-[oklch(0.68_0.12_65)] shrink-0">
                      {formatPrice(product.price * quantity)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping calculator */}
            <div className="bg-[oklch(0.16_0.005_285)] border border-white/8">
              <div className="px-6 py-4 border-b border-white/8">
                <p className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)]">Shipping Calculator</p>
              </div>
              <div className="px-6 py-5 space-y-5">
                <div>
                  <label className="label-mono text-[0.6rem] text-[oklch(0.55_0.010_75)] block mb-2">Destination Country</label>
                  <select
                    value={countryCode}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="w-full bg-[oklch(0.20_0.005_285)] border border-white/15 text-[oklch(0.80_0.010_75)] text-sm px-4 py-2.5 focus:outline-none focus:border-[oklch(0.68_0.12_65)] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <p className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)]">Zone: {zone.name}</p>

                <div className="space-y-3">
                  {shippingOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-start gap-4 p-4 border cursor-pointer transition-all ${
                        selectedShipping?.id === option.id
                          ? "border-[oklch(0.68_0.12_65)] bg-[oklch(0.68_0.12_65/8%)]"
                          : "border-white/10 hover:border-white/25"
                      }`}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        value={option.id}
                        checked={selectedShipping?.id === option.id}
                        onChange={() => setSelectedShipping(option)}
                        className="mt-0.5 accent-[oklch(0.68_0.12_65)]"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[oklch(0.85_0.010_75)]">{option.name}</p>
                        <p className="text-[0.75rem] text-[oklch(0.55_0.010_75)] mt-0.5">{option.description}</p>
                        <p className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)] mt-1">{option.estimatedDays}</p>
                      </div>
                      <span className="text-sm font-semibold text-[oklch(0.68_0.12_65)] shrink-0">
                        {formatShipping(option.price)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — order summary */}
          <div className="lg:col-span-2">
            <div className="bg-[oklch(0.16_0.005_285)] border border-white/8 sticky top-24">
              <div className="px-6 py-4 border-b border-white/8">
                <p className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)]">Order Summary</p>
              </div>
              <div className="px-6 py-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[oklch(0.60_0.010_75)]">Subtotal</span>
                  <span className="text-[oklch(0.80_0.010_75)]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[oklch(0.60_0.010_75)]">Shipping</span>
                  <span className="text-[oklch(0.80_0.010_75)]">
                    {selectedShipping ? formatShipping(selectedShipping.price) : "—"}
                  </span>
                </div>
                {selectedShipping && (
                  <div className="flex justify-between text-[0.75rem]">
                    <span className="text-[oklch(0.50_0.010_75)]">{selectedShipping.name}</span>
                    <span className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)]">{selectedShipping.estimatedDays}</span>
                  </div>
                )}
                <div className="ink-divider my-2" />
                <div className="flex justify-between">
                  <span className="label-mono text-[0.65rem] text-[oklch(0.60_0.010_75)]">Total</span>
                  <span className="text-xl font-bold text-[oklch(0.93_0.010_75)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {formatPrice(total)}
                  </span>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="btn-ochre w-full flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isLoading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Lock size={13} />
                        <CreditCard size={13} />
                        Pay with Stripe
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Lock size={11} className="text-[oklch(0.45_0.010_75)] shrink-0" />
                  <p className="label-mono text-[0.55rem] text-[oklch(0.45_0.010_75)]">
                    Payments processed securely by Stripe.
                  </p>
                </div>

                {/* Stripe setup guide */}
                <div className="mt-4 p-4 bg-[oklch(0.68_0.12_65/8%)] border border-[oklch(0.68_0.12_65/25%)] space-y-3">
                  <p className="label-mono text-[0.6rem] text-[oklch(0.68_0.12_65)]">Stripe Setup Guide</p>
                  <div className="space-y-2">
                    {[
                      "Create a Stripe account at stripe.com",
                      "Add products in your Stripe Dashboard",
                      "Create Payment Links for each print",
                      "Paste links into client/src/lib/stripe.ts",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={11} className="text-[oklch(0.68_0.12_65)] mt-0.5 shrink-0" />
                        <p className="text-[0.7rem] text-[oklch(0.60_0.010_75)]">{step}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://stripe.com/payments/payment-links"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 label-mono text-[0.6rem] text-[oklch(0.68_0.12_65)] hover:text-[oklch(0.80_0.12_65)] transition-colors"
                  >
                    Stripe Payment Links docs
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
