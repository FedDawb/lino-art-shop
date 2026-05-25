// ============================================================
// SLOW STROKES — Studio Videos Page
// Silhouette footage of the artist printing
// ============================================================

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

interface StudioVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail?: string;
  videoUrl?: string;
}

// Placeholder videos — replace videoUrl with your actual video URLs
const videos: StudioVideo[] = [
  {
    id: "carving-1",
    title: "Carving the Block",
    description:
      "Watch as I carve a lino block by hand. Each line is deliberate — no rushing. Just the sound of the gouge and the block.",
    duration: "3:45",
    thumbnail: "https://via.placeholder.com/400x300?text=Carving+the+Block",
  },
  {
    id: "inking",
    title: "Inking & Printing",
    description:
      "The moment the block meets paper. Rolling ink onto the carved surface, then pressing it down — the print emerges.",
    duration: "2:30",
    thumbnail: "https://via.placeholder.com/400x300?text=Inking+%26+Printing",
  },
  {
    id: "edition",
    title: "Building an Edition",
    description:
      "Pulling print after print from the same block. Each one is slightly different — the mark of hand work.",
    duration: "4:15",
    thumbnail: "https://via.placeholder.com/400x300?text=Building+an+Edition",
  },
  {
    id: "detail",
    title: "Detail Work",
    description:
      "Close-up of the carving process. The precision required to get clean lines and bold contrast.",
    duration: "2:50",
    thumbnail: "https://via.placeholder.com/400x300?text=Detail+Work",
  },
];

export default function Studio() {
  const [selectedVideo, setSelectedVideo] = useState<StudioVideo | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="label-mono mb-3">Behind the Scenes</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[oklch(0.93_0.010_75)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Studio Videos
          </h1>
          <p className="text-[oklch(0.60_0.010_75)] leading-relaxed">
            Watch the process unfold. These are silhouette films — you'll see the
            work, the tools, the hands, but not the face. Just the craft, the
            rhythm, the slow intention of hand-carving and printing.
          </p>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-br from-[oklch(0.16_0.005_285)] to-[oklch(0.12_0.005_285)] border border-[oklch(0.68_0.12_65/20%)] p-16 text-center"
        >
          <p className="label-mono mb-4 text-[oklch(0.68_0.12_65)]">Coming Soon</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[oklch(0.93_0.010_75)] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Studio Videos Coming Soon
          </h2>
          <p className="text-[oklch(0.60_0.010_75)] max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Silhouette films of the carving and printing process are being filmed and edited. Follow my TikTok and Instagram for updates on when these will be released.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://tiktok.com/@slowstrokesbutch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] hover:bg-[oklch(0.75_0.12_65)] transition-colors font-semibold"
            >
              Follow on TikTok
            </a>
            <a
              href="https://instagram.com/slowstrokeart"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[oklch(0.68_0.12_65)] text-[oklch(0.68_0.12_65)] hover:bg-[oklch(0.68_0.12_65)] hover:text-[oklch(0.12_0.005_285)] transition-colors font-semibold"
            >
              Follow on Instagram
            </a>
          </div>
        </motion.div>

        {/* Info section */}
        <div className="bg-[oklch(0.16_0.005_285)] border border-white/8 p-8 md:p-10">
          <p className="label-mono mb-4 text-[oklch(0.68_0.12_65)]">About These Videos</p>
          <div className="space-y-4 text-[oklch(0.60_0.010_75)] leading-relaxed">
            <p>
              These films are intentionally shot as silhouettes. You'll see my
              hands, my tools, my apron, my flat cap — the silhouette of a butch
              artist at work. But not my face. The focus is on the work itself,
              the rhythm of carving, the precision of printing.
            </p>
            <p>
              I wanted to create something that celebrates the craft without
              centering the person. The work is the subject. The process is the
              story.
            </p>
            <p>
              These are unedited, real-time videos. No speed-ups, no cuts. Just
              slow, intentional work. Slow Strokes.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}
