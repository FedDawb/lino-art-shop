// ============================================================
// LINO ART SHOP — About Page
// ============================================================

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-hero-bg-amKm3yNmqb2MgW4W3MpJqj.webp";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden mb-16">
        <img
          src={HERO_IMAGE}
          alt="Studio"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.005_285/90%)] to-[oklch(0.12_0.005_285/50%)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="label-mono mb-3">The Studio</p>
              <h1
                className="text-4xl md:text-5xl font-bold text-[oklch(0.93_0.010_75)]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About Lino Art
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <p className="label-mono mb-3 text-[oklch(0.68_0.12_65)]">The Work</p>
            <p className="text-[oklch(0.70_0.010_75)] leading-relaxed text-base">
              Every print in this shop is hand-carved and hand-printed in a small studio in the UK. The process begins with a drawing — sometimes a sketch from life, sometimes a composition developed over weeks — which is then transferred to a lino block and carved using a set of gouges.
            </p>
          </div>

          <div className="ink-divider" />

          <div>
            <p className="label-mono mb-3 text-[oklch(0.68_0.12_65)]">The Process</p>
            <p className="text-[oklch(0.70_0.010_75)] leading-relaxed text-base mb-4">
              Once carved, the block is inked with a brayer and pressed onto heavyweight Somerset Velvet paper — a paper made specifically for printmaking, with a surface that holds ink beautifully without bleeding. Each print is pulled individually, which means no two are exactly alike.
            </p>
            <p className="text-[oklch(0.70_0.010_75)] leading-relaxed text-base">
              Every edition is strictly limited. When the edition is sold out, the block is retired and no further prints are made from it. Each print is signed in pencil and numbered by the artist.
            </p>
          </div>

          <div className="ink-divider" />

          <div>
            <p className="label-mono mb-3 text-[oklch(0.68_0.12_65)]">The Materials</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Paper", body: "300gsm Somerset Velvet — a heavyweight, acid-free paper made in the UK specifically for printmaking." },
                { title: "Ink", body: "Oil-based relief inks in carbon black. Rich, dense, and archival — prints will not fade for decades." },
                { title: "Block", body: "Traditional grey lino mounted on MDF for stability. Carved by hand using a set of V and U gouges." },
                { title: "Process", body: "Each print is pulled by hand using a baren or printing press. No digital reproduction is involved." },
              ].map(({ title, body }) => (
                <div key={title} className="bg-[oklch(0.16_0.005_285)] border border-white/8 p-5">
                  <p
                    className="text-sm font-bold text-[oklch(0.85_0.010_75)] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {title}
                  </p>
                  <p className="text-[0.8rem] text-[oklch(0.55_0.010_75)] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ink-divider" />

          <div>
            <p className="label-mono mb-3 text-[oklch(0.68_0.12_65)]">Caring for Your Print</p>
            <p className="text-[oklch(0.70_0.010_75)] leading-relaxed text-base">
              Lino prints are robust but should be kept away from direct sunlight and high humidity. Frame behind UV-protective glass for best longevity. Handle by the edges and avoid touching the printed surface.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/shop">
              <button className="btn-ochre flex items-center gap-2">
                Browse the Collection
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
