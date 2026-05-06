// ============================================================
// SLOW STROKES — Contact Page
// Returns, inquiries, and customer support
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend or email service
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

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
              Questions?
              <br />
              <em className="text-[oklch(0.68_0.12_65)] not-italic">
                We're here to help.
              </em>
            </h1>
            <p className="text-[oklch(0.65_0.010_75)] text-base md:text-lg leading-relaxed">
              Have questions about your order, need help with a return, or just want to chat? Fill out the form below and we'll get back to you soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[oklch(0.12_0.005_285)]">
        <div className="container max-w-2xl">
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
