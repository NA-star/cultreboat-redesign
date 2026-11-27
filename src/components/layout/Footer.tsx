import Link from "next/link";

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
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
      width="16"
      height="16"
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
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="cb-footer">
      <div className="cb-footer-glow" aria-hidden="true" />
      <div className="container cb-footer-content">
        <div className="cb-footer-grid">
          {/* Brand Column */}
          <div className="cb-footer-brand">
            <Link href="/" className="cb-logo">
              <span className="cb-logo-icon" />
              <span>CULTREBOAT</span>
            </Link>
            <p className="cb-footer-desc">
              Creative studio crafting meaningful digital experiences, brand
              identities, and modern interfaces since 2019.
            </p>
            <div className="cb-socials">
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

          {/* Navigation Column */}
          <div className="cb-footer-col">
            <h4>Pages</h4>
            <div className="cb-footer-links">
              <Link href="/">Home</Link>
              <Link href="/design">Design Portfolio</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Capabilities Column */}
          <div className="cb-footer-col">
            <h4>Capabilities</h4>
            <div className="cb-footer-links">
              <Link href="/design">UI/UX &amp; Web Design</Link>
              <Link href="/design">Brand Identity</Link>
              <Link href="/design">Creative Direction</Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="cb-footer-col">
            <h4>Get in Touch</h4>
            <div className="cb-footer-links">
              <a href="mailto:hello@cultreboat.com">hello@cultreboat.com</a>
              <span>+91 98765 43210</span>
              <span>Green Park, Delhi</span>
            </div>
          </div>
        </div>

        <div className="cb-footer-bottom">
          <p>© 2026 Cultreboat. All rights reserved.</p>
          <a href="#top" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}