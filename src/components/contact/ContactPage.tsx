"use client";

import React, { useState } from "react";
import "./contact.css";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function FacebookIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22.675 0h-21.35C.59 0 0 .592 0 1.326v21.348C0 23.408.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.326C24 .592 23.405 0 22.675 0" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="contact-page" id="top">
      {/* Full-page Architectural Visual Backdrop */}
      <div className="contact-bg-grid" aria-hidden="true" />
      <div
        className="contact-ambient-glow contact-glow-right"
        aria-hidden="true"
      />
      <div
        className="contact-ambient-glow contact-glow-left"
        aria-hidden="true"
      />
      <div className="contact-floating-ring" aria-hidden="true" />

      <div className="container contact-grid">
        <div className="contact-info">
          <div className="contact-status-pill">
            <span className="contact-status-dot" />
            <span>Accepting New Projects • Response within 24 hrs</span>
          </div>

          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            Get in Touch
          </div>

          <h1>
            Let&apos;s Create
            <br />
            Something Great
            <br />
            <span className="gradient-text">Together</span>
          </h1>

          <p className="contact-subtitle">
            Have a project in mind, need a custom digital build, or just want to
            connect with our team? Share your details and let&apos;s map out
            what&apos;s next.
          </p>

          <ul className="contact-details-list">
            <li>
              <span className="detail-icon">✉️</span>
              <div>
                <small className="detail-label">Email</small>
                <span>hello@cultreboat.com</span>
              </div>
            </li>
            <li>
              <span className="detail-icon">📞</span>
              <div>
                <small className="detail-label">Direct Line</small>
                <span>+91 98765 43210</span>
              </div>
            </li>
            <li>
              <span className="detail-icon">📍</span>
              <div>
                <small className="detail-label">Studio Location</small>
                <span>Green Park, Delhi</span>
              </div>
            </li>
          </ul>

          <div className="contact-social-block">
            <span className="contact-social-title">Connect With Us</span>
            <div className="cb-socials contact-social-row">
              <a
                href="https://www.facebook.com/CultreBoat/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/cultreboat/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/cultre-boat/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-header">
            <span className="form-kicker">PROJECT INQUIRY</span>
            <h2>Start a Conversation</h2>
            <p>
              Tell us about your goals, timeline, and scope — we&apos;ll get
              back promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row-two">
              <div className="form-group">
                <label htmlFor="contact-name" className="field-label">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone" className="field-label">
                  Phone Number *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="field-label">
                Your Email *
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Your Email *"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="field-label">
                Your Message *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Your Message *"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-gradient-submit">
              {submitted ? "Message Sent ✓" : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}