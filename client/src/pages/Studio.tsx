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

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-[oklch(0.16_0.005_285)] border border-white/10 overflow-hidden hover:border-[oklch(0.68_0.12_65/50%)] transition-all duration-300">
                {/* Placeholder thumbnail */}
                <div className="w-full h-full bg-gradient-to-br from-[oklch(0.20_0.005_285)] to-[oklch(0.14_0.005_285)] flex items-center justify-center">
                  <div className="text-center">
                    <Play
                      size={48}
                      strokeWidth={1}
                      className="text-[oklch(0.68_0.12_65/60%)] group-hover:text-[oklch(0.68_0.12_65)] transition-colors mx-auto mb-2"
                    />
                    <p className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)]">
                      {video.duration}
                    </p>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[oklch(0.12_0.005_285/70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play
                    size={56}
                    strokeWidth={1}
                    className="text-[oklch(0.68_0.12_65)]"
                  />
                </div>
              </div>

              {/* Video info */}
              <div className="mt-4">
                <h3
                  className="text-lg font-bold text-[oklch(0.90_0.010_75)] mb-2 group-hover:text-[oklch(0.68_0.12_65)] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {video.title}
                </h3>
                <p className="text-[0.8rem] text-[oklch(0.55_0.010_75)] leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

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

        {/* Modal for video playback */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-[oklch(0.08_0.005_285/95%)] backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <div className="bg-[oklch(0.12_0.005_285)] border border-white/10 overflow-hidden">
                {/* Video placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[oklch(0.20_0.005_285)] to-[oklch(0.14_0.005_285)] flex items-center justify-center">
                  <div className="text-center">
                    <Play
                      size={64}
                      strokeWidth={1}
                      className="text-[oklch(0.68_0.12_65/60%)] mx-auto mb-4"
                    />
                    <p className="label-mono text-[0.7rem] text-[oklch(0.50_0.010_75)]">
                      Video player placeholder
                    </p>
                    <p className="label-mono text-[0.65rem] text-[oklch(0.40_0.010_75)] mt-2">
                      Add your video URL to enable playback
                    </p>
                  </div>
                </div>

                {/* Video details */}
                <div className="p-6">
                  <h2
                    className="text-2xl font-bold text-[oklch(0.93_0.010_75)] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {selectedVideo.title}
                  </h2>
                  <p className="text-[oklch(0.60_0.010_75)] leading-relaxed mb-4">
                    {selectedVideo.description}
                  </p>
                  <p className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)]">
                    Duration: {selectedVideo.duration}
                  </p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="mt-4 w-full label-mono text-[0.65rem] text-[oklch(0.50_0.010_75)] hover:text-[oklch(0.68_0.12_65)] transition-colors"
              >
                Press ESC or click to close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
