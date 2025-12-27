"use client";
import { useState } from "react";
import { sendEmail } from "@/lib/services/email-sender";
import { colors, themes } from "@/config/theme";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const themeConfig = themes.dark;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendEmail(formData)
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <div style={{ backgroundColor: themeConfig.cardBackground }} className="p-8 rounded-2xl shadow-md">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium" style={{ color: themeConfig.textMuted }}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            style={{ borderColor: themeConfig.border }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium" style={{ color: themeConfig.textMuted }}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            style={{ borderColor: themeConfig.border }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium" style={{ color: themeConfig.textMuted }}>Message</label>
          <textarea
            name="message"
            placeholder="Your message..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            style={{ borderColor: themeConfig.border }}
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: colors.primary }}
          className="w-full py-3 px-6 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}