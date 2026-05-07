// ============================================================
// SLOW STROKES — Contact Page
// Returns, inquiries, customer support, social links, and mailing list
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, CheckCircle, Instagram, Music2, Heart } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [mailingListEmail, setMailingListEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mailingListSubmitted, setMailingListSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleMailingListSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mailing list signup:", mailingListEmail);
    setMailingListSubmitted(true);
    setTimeout(() => {
      setMailingListEmail("");
      setMailingListSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com", // Replace with your Instagram URL
      color: "hover:text-pink-400",
    },
    {
      name: "TikTok",
      icon: Music2,
      url: "https://tiktok.com", // Replace with your TikTok URL
      color: "hover:text-white",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:contact@slowstrokes.com", // Replace with your email
      color: "hover:text-[oklch(0.68_0.12_65)]",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center py-20 bg-gradient-to-br from-[oklch(0.16_0.005_285)] to-[oklch(0.12_0.005_285)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[oklch(0.68_0.12_65)] rounded-full blur-3xl" />
        </div>

        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            <p className="label-mono mb-4 flex items-center gap-2">
              <Mail size={14} className="text-[oklch(0.68_0.12_65)]" />
              Get in Touch
            </p>
            <h1
              className="text-5xl md:text-6xl font-black text-[oklch(0.93_0.010_75)] leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let's Connect
            </h1>
            <p className="text-[oklch(0.65_0.010_75)] text-base md:text-lg leading-relaxed">
              Have questions about your order, want to collaborate, or just want to say hi? Reach out through any channel below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="label-mono mb-3">Follow & Connect</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find us on social
            </h2>
            <p className="text-[oklch(0.60_0.010_75)]">
              Behind-the-scenes studio content, new prints, and community moments
            </p>
          </motion.div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-16">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`p-4 bg-[oklch(0.16_0.005_285)] border border-white/10 rounded-full text-[oklch(0.68_0.12_65)] transition-all duration-300 ${social.color} hover:border-[oklch(0.68_0.12_65)] hover:scale-110`}
                  title={social.name}
                >
                  <Icon size={28} />
                </motion.a>
              );
            })}
          </div>

          {/* Direct Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[oklch(0.16_0.005_285)] border border-[oklch(0.68_0.12_65/30%)] p-8 text-center"
          >
            <Mail size={32} className="text-[oklch(0.68_0.12_65)] mx-auto mb-4" />
            <h3
              className="text-xl font-bold text-[oklch(0.93_0.010_75)] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Email us directly
            </h3>
            <p className="text-[oklch(0.60_0.010_75)] mb-4">
              For any questions, custom orders, or collaboration inquiries
            </p>
            <a
              href="mailto:contact@slowstrokes.com"
              className="inline-block px-6 py-3 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] font-semibold hover:bg-[oklch(0.75_0.12_65)] transition-colors"
            >
              contact@slowstrokes.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="py-20 bg-[oklch(0.14_0.005_285)]">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-[oklch(0.16_0.005_285)] to-[oklch(0.12_0.005_285)] border border-[oklch(0.68_0.12_65/30%)] p-10 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Heart size={28} className="text-[oklch(0.68_0.12_65)] flex-shrink-0 mt-1" />
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-[oklch(0.93_0.010_75)] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Join our mailing list
                  </h2>
                  <p className="text-[oklch(0.60_0.010_75)]">
                    Be the first to know about limited edition prints, special offers, and new projects
                  </p>
                </div>
              </div>

              {mailingListSubmitted ? (
                <div className="bg-[oklch(0.16_0.005_285)] border border-[oklch(0.68_0.12_65)] p-6 text-center">
                  <CheckCircle
                    size={40}
                    className="text-[oklch(0.68_0.12_65)] mx-auto mb-3"
                  />
                  <p className="text-[oklch(0.93_0.010_75)] font-semibold mb-1">
                    Thanks for signing up!
                  </p>
                  <p className="text-[oklch(0.60_0.010_75)] text-sm">
                    Check your email for confirmation
                  </p>
                </div>
              ) : (
                <form onSubmit={handleMailingListSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={mailingListEmail}
                    onChange={(e) => setMailingListEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="flex-1 bg-[oklch(0.16_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-3 focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[oklch(0.68_0.12_65)] text-[oklch(0.12_0.005_285)] font-semibold hover:bg-[oklch(0.75_0.12_65)] transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-[0.7rem] text-[oklch(0.40_0.010_75)] mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="label-mono mb-3">Direct Message</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send us a message
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="bg-[oklch(0.16_0.005_285)] border border-[oklch(0.68_0.12_65)] p-10 text-center">
                <CheckCircle
                  size={48}
                  className="text-[oklch(0.68_0.12_65)] mx-auto mb-4"
                />
                <h2
                  className="text-2xl font-bold text-[oklch(0.93_0.010_75)] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Received
                </h2>
                <p className="text-[oklch(0.60_0.010_75)]">
                  Thanks for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="label-mono text-[0.65rem] mb-2 block text-[oklch(0.68_0.12_65)]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[oklch(0.16_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-3 focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label-mono text-[0.65rem] mb-2 block text-[oklch(0.68_0.12_65)]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[oklch(0.16_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-3 focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="label-mono text-[0.65rem] mb-2 block text-[oklch(0.68_0.12_65)]">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[oklch(0.16_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-3 focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject...</option>
                    <option value="order">Order Question</option>
                    <option value="return">Return / Exchange</option>
                    <option value="damage">Damaged Print</option>
                    <option value="shipping">Shipping Issue</option>
                    <option value="custom">Custom Order Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="label-mono text-[0.65rem] mb-2 block text-[oklch(0.68_0.12_65)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    className="w-full bg-[oklch(0.16_0.005_285)] border border-white/10 text-[oklch(0.85_0.010_75)] px-4 py-3 focus:border-[oklch(0.68_0.12_65)] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-ochre w-full flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 bg-[oklch(0.14_0.005_285)]">
        <div className="container">
          <div className="mb-12">
            <p className="label-mono mb-3">Support</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How we can help
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Returns & Exchanges",
                description:
                  "If your print arrives damaged or you'd like to exchange it, we'll make it right. Contact us within 14 days of delivery.",
              },
              {
                title: "Shipping Questions",
                description:
                  "Curious about delivery times or tracking your order? We're happy to help you stay updated.",
              },
              {
                title: "Custom Orders",
                description:
                  "Interested in a custom print? Get in touch and let's talk about your vision.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[oklch(0.16_0.005_285)] border border-white/8 p-6 hover:border-[oklch(0.68_0.12_65/50%)] transition-colors"
              >
                <h3
                  className="text-lg font-bold text-[oklch(0.93_0.010_75)] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[oklch(0.60_0.010_75)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-mono mb-4">Expect a response</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.93_0.010_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Within 48 hours
            </h2>
            <p className="text-[oklch(0.60_0.010_75)] max-w-md mx-auto">
              We read every message and aim to respond within two business days. Thanks for your patience.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
