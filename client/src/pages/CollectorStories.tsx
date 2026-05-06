// ============================================================
// SLOW STROKES — Collector Stories Page
// Community gallery of how collectors display and cherish prints
// ============================================================

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Mail } from "lucide-react";

interface CollectorStory {
  id: string;
  name: string;
  pronouns?: string;
  location?: string;
  story: string;
  printTitle: string;
  image?: string;
  featured?: boolean;
}

// Placeholder stories — users can submit their own
const stories: CollectorStory[] = [
  {
    id: "story-1",
    name: "Alex",
    pronouns: "she/her",
    location: "London",
    story:
      "I hung the Fox in Repose above my desk. Every time I look at it, I'm reminded to slow down, to pay attention. There's something about the boldness of the carving that feels like permission to take up space.",
    printTitle: "Fox in Repose",
    featured: true,
  },
  {
    id: "story-2",
    name: "Jordan",
    pronouns: "they/them",
    location: "Manchester",
    story:
      "The Botanical Study is in my bedroom. It's become a quiet ritual—I look at it every morning and feel grounded. The detail work is incredible. I can see the artist's hands in every line.",
    printTitle: "Botanical Study No. 1",
    featured: true,
  },
  {
    id: "story-3",
    name: "Sam",
    pronouns: "she/her",
    location: "Bristol",
    story:
      "I'm a collector of queer art, and Slow Strokes feels like home. The prints celebrate craft and identity in a way that feels rare. I have three now and I'm planning to get more.",
    printTitle: "Standing Heron",
    featured: false,
  },
];

export default function CollectorStories() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    location: "",
    story: "",
    printTitle: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend or email service
    alert(
      "Thank you for sharing your story! We'll feature it soon. For now, please email us at hello@slowstrokes.studio with a photo of your print."
    );
    setFormData({ name: "", pronouns: "", location: "", story: "", printTitle: "" });
    setShowForm(false);
  };

  const featuredStories = stories.filter((s) => s.featured);
  const allStories = stories;

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
          <p className="label-mono mb-3">Community</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[oklch(0.93_0.010_75)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Collector Stories
          </h1>
          <p className="text-[oklch(0.60_0.010_75)] leading-relaxed">
            How do you live with your print? Share your story — where it hangs, what it means to you, how it makes you feel. We're building a community of collectors who celebrate slow, queer craft.
          </p>
        </motion.div>

        {/* CTA to submit */}
        <div className="mb-16">
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-ochre flex items-center gap-2"
          >
            <Heart size={16} />
            Share Your Story
          </button>
        </div>

        {/* Submission form (hidden by default) */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[oklch(0.16_0.005_285)] border border-white/8 p-8 md:p-10 mb-16"
          >
            <h2
              className="text-2xl font-bold text-[oklch(0.93_0.010_75)] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tell Us Your Story
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)] mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[oklch(0.12_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-2 text-sm focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)] mb-2 block">
                    Pronouns (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.pronouns}
                    onChange={(e) =>
                      setFormData({ ...formData, pronouns: e.target.value })
                    }
                    className="w-full bg-[oklch(0.12_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-2 text-sm focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
                    placeholder="e.g. she/her, they/them"
                  />
                </div>
              </div>

              <div>
                <label className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)] mb-2 block">
                  Location (optional)
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full bg-[oklch(0.12_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-2 text-sm focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
                  placeholder="City or region"
                />
              </div>

              <div>
                <label className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)] mb-2 block">
                  Which print do you have?
                </label>
                <input
                  type="text"
                  required
                  value={formData.printTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, printTitle: e.target.value })
                  }
                  className="w-full bg-[oklch(0.12_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-2 text-sm focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
                  placeholder="e.g. Fox in Repose"
                />
              </div>

              <div>
                <label className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)] mb-2 block">
                  Your Story
                </label>
                <textarea
                  required
                  value={formData.story}
                  onChange={(e) =>
                    setFormData({ ...formData, story: e.target.value })
                  }
                  className="w-full bg-[oklch(0.12_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-2 text-sm focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors min-h-32"
                  placeholder="Where does your print hang? What does it mean to you? How does it make you feel?"
                />
              </div>

              <div className="flex gap-3">
                <button type="submit" className="btn-ochre">
                  Submit Story
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-ghost-ochre"
                >
                  Cancel
                </button>
              </div>

              <p className="text-[0.75rem] text-[oklch(0.50_0.010_75)]">
                Please also email a photo of your print in your space to{" "}
                <span className="text-[oklch(0.68_0.12_65)]">hello@slowstrokes.studio</span>
              </p>
            </form>
          </motion.div>
        )}

        {/* Featured stories */}
        {featuredStories.length > 0 && (
          <div className="mb-20">
            <p className="label-mono mb-6 text-[oklch(0.68_0.12_65)]">Featured</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredStories.map((story, i) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[oklch(0.16_0.005_285)] border border-[oklch(0.68_0.12_65/30%)] p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p
                        className="text-lg font-bold text-[oklch(0.93_0.010_75)]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {story.name}
                      </p>
                      <p className="label-mono text-[0.6rem] text-[oklch(0.55_0.010_75)]">
                        {story.pronouns && `${story.pronouns} • `}
                        {story.location}
                      </p>
                    </div>
                    <Heart
                      size={20}
                      className="text-[oklch(0.68_0.12_65)]"
                      fill="currentColor"
                    />
                  </div>
                  <p className="text-[oklch(0.65_0.010_75)] leading-relaxed mb-4">
                    {story.story}
                  </p>
                  <p className="label-mono text-[0.65rem] text-[oklch(0.68_0.12_65)]">
                    {story.printTitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All stories */}
        <div>
          <p className="label-mono mb-6 text-[oklch(0.68_0.12_65)]">All Stories</p>
          <div className="space-y-4">
            {allStories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-[oklch(0.14_0.005_285)] border border-white/8 p-6 hover:border-white/15 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-[oklch(0.90_0.010_75)]">
                      {story.name}
                    </p>
                    <p className="label-mono text-[0.6rem] text-[oklch(0.55_0.010_75)]">
                      {story.pronouns && `${story.pronouns} • `}
                      {story.location}
                    </p>
                  </div>
                  <span className="label-mono text-[0.6rem] text-[oklch(0.50_0.010_75)]">
                    {story.printTitle}
                  </span>
                </div>
                <p className="text-[0.85rem] text-[oklch(0.60_0.010_75)] leading-relaxed">
                  {story.story}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-[oklch(0.16_0.005_285)] border border-white/8 p-8 md:p-10 text-center">
          <p className="label-mono mb-3 text-[oklch(0.68_0.12_65)]">Stay Connected</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-[oklch(0.93_0.010_75)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get notified when new prints drop
          </h2>
          <p className="text-[oklch(0.60_0.010_75)] mb-6 max-w-md mx-auto">
            Join the community. Get early access to new editions, studio updates, and collector stories.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[oklch(0.12_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-2 text-sm focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
            />
            <button className="btn-ochre flex items-center gap-2 whitespace-nowrap">
              <Mail size={14} />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
