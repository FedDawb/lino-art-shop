// ============================================================
// LINO ART SHOP — Stripe Integration
//
// This store uses Stripe Payment Links — the simplest way to
// accept payments without a backend server.
//
// HOW TO ACTIVATE:
// 1. Create a Stripe account at https://stripe.com
// 2. For each product, create a Payment Link in your Stripe Dashboard
//    (Products → Payment Links → Create)
// 3. Copy the Payment Link URL for each product and paste it into
//    the STRIPE_PAYMENT_LINKS map below, keyed by product ID.
// 4. For a full cart checkout, create a single "Custom amount" Payment
//    Link or use Stripe Checkout Sessions (requires a backend).
//
// ALTERNATIVE — Stripe Checkout Sessions (full backend):
// Upgrade this project to web-db-user, add STRIPE_SECRET_KEY to
// Settings → Secrets, then create a /api/checkout endpoint that
// calls stripe.checkout.sessions.create() with line_items from the cart.
// ============================================================

// Map product IDs to their Stripe Payment Link URLs
// Replace the placeholder values with your real Stripe Payment Links
export const STRIPE_PAYMENT_LINKS: Record<string, string> = {
  "fox-in-repose": "", // e.g. "https://buy.stripe.com/xxxxx"
  "botanical-study": "",
  "standing-heron": "",
  "winter-moon": "",
  "great-wave": "",
};

// Your Stripe publishable key (safe to expose in frontend)
// Set this to your real key from https://dashboard.stripe.com/apikeys
export const STRIPE_PUBLISHABLE_KEY =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? "";

/**
 * Redirect to a Stripe Payment Link for a single product.
 * Returns false if no payment link is configured.
 */
export function redirectToPaymentLink(productId: string): boolean {
  const url = STRIPE_PAYMENT_LINKS[productId];
  if (!url) return false;
  window.location.href = url;
  return true;
}

/**
 * Build a Stripe Checkout URL with pre-filled line items
 * using Stripe Payment Links with quantity parameters.
 * This is a simplified approach — for full cart checkout,
 * a backend Checkout Session is recommended.
 */
export function hasStripeConfigured(): boolean {
  return (
    !!STRIPE_PUBLISHABLE_KEY ||
    Object.values(STRIPE_PAYMENT_LINKS).some((v) => !!v)
  );
}
