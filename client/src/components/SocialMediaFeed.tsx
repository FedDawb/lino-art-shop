// ============================================================
// SLOW STROKES — Social Media Feed Component
// Embeds TikTok and Instagram feeds
// ============================================================

import { motion } from "framer-motion";
import { Instagram, Music } from "lucide-react";

interface SocialMediaFeedProps {
  variant?: "tiktok" | "instagram";
  username?: string;
}

export default function SocialMediaFeed({
  variant = "instagram",
  username = "slowstrokes.studio",
}: SocialMediaFeedProps) {
  if (variant === "tiktok") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[oklch(0.16_0.005_285)] border border-white/8 p-8 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Music size={20} className="text-[oklch(0.68_0.12_65)]" />
          <p className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)]">
            TIKTOK
          </p>
        </div>
        <h3
          className="text-xl font-bold text-[oklch(0.93_0.010_75)] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Follow on TikTok
        </h3>
        <p className="text-[oklch(0.60_0.010_75)] mb-6">
          Watch studio videos, process clips, and behind-the-scenes moments.
        </p>
        <a
          href={`https://tiktok.com/@${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ochre inline-flex items-center gap-2"
        >
          <Music size={14} />
          @{username}
        </a>

        {/* Placeholder for TikTok embed */}
        <div className="mt-8 bg-[oklch(0.12_0.005_285)] border border-white/8 aspect-video flex items-center justify-center">
          <p className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)]">
            TikTok feed embed coming soon
          </p>
        </div>
      </motion.div>
    );
  }

  // Instagram variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[oklch(0.16_0.005_285)] border border-white/8 p-8 text-center"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <Instagram size={20} className="text-[oklch(0.68_0.12_65)]" />
        <p className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)]">
          INSTAGRAM
        </p>
      </div>
      <h3
        className="text-xl font-bold text-[oklch(0.93_0.010_75)] mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Follow on Instagram
      </h3>
      <p className="text-[oklch(0.60_0.010_75)] mb-6">
        Latest prints, studio updates, and collector features.
      </p>
      <a
        href={`https://instagram.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ochre inline-flex items-center gap-2"
      >
        <Instagram size={14} />
        @{username}
      </a>

      {/* Placeholder for Instagram embed */}
      <div className="mt-8 bg-[oklch(0.12_0.005_285)] border border-white/8 aspect-square flex items-center justify-center">
        <p className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)]">
          Instagram feed embed coming soon
        </p>
      </div>
    </motion.div>
  );
}
