// ============================================================
// SLOW STROKES — Newsletter Signup Component
// Reusable email capture for site-wide integration
// ============================================================

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { motion } from "framer-motion";

interface NewsletterSignupProps {
  variant?: "inline" | "card";
  title?: string;
  description?: string;
}

export default function NewsletterSignup({
  variant = "inline",
  title = "Get notified when new prints drop",
  description = "Join the community. Early access to new editions, studio updates, and collector stories.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend or email service
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  if (variant === "card") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[oklch(0.16_0.005_285)] border border-white/8 p-8 md:p-10 text-center"
      >
        <p className="label-mono mb-3 text-[oklch(0.68_0.12_65)]">Stay Connected</p>
        <h3
          className="text-2xl md:text-3xl font-bold text-[oklch(0.93_0.010_75)] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
        <p className="text-[oklch(0.60_0.010_75)] mb-6 max-w-md mx-auto">
          {description}
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={submitted}
            className="flex-1 bg-[oklch(0.12_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-2 text-sm focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={submitted}
            className="btn-ochre flex items-center gap-2 whitespace-nowrap disabled:opacity-50"
          >
            {submitted ? (
              <>
                <Check size={14} />
                Subscribed
              </>
            ) : (
              <>
                <Mail size={14} />
                Subscribe
              </>
            )}
          </button>
        </form>
      </motion.div>
    );
  }

  // Inline variant
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={submitted}
        className="flex-1 bg-[oklch(0.16_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-2 text-sm focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={submitted}
        className="btn-ochre flex items-center gap-2 whitespace-nowrap disabled:opacity-50"
      >
        {submitted ? (
          <>
            <Check size={14} />
            Subscribed
          </>
        ) : (
          <>
            <Mail size={14} />
            Subscribe
          </>
        )}
      </button>
    </form>
  );
}
