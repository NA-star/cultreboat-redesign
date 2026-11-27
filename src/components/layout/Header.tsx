"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Route change hone par mobile menu automatically band ho jaye
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Menu khula ho toh Escape key se band ho sake
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/design", label: "Design" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="cb-navbar">
      <div className="cb-nav-inner">
        <Link href="/" className="cb-logo">
          <span className="cb-logo-icon" />
          <span>CULTREBOAT</span>
        </Link>

        {/* Desktop & Tablet Navigation */}
        <nav className="cb-nav-links" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="cb-nav-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="cb-theme-btn"
            aria-label="Toggle dark or light theme"
            title={
              theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link href="/contact" className="cb-nav-cta">
            Let&apos;s Talk <span>→</span>
          </Link>

          <button
            type="button"
            className="cb-mobile-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="cb-mobile-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="cb-hamburger-line" />
            <span className="cb-hamburger-line" />
            <span className="cb-hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (<= 768px) */}
      {menuOpen && (
        <nav
          id="cb-mobile-drawer"
          className="cb-mobile-menu"
          aria-label="Mobile Navigation"
        >
          <div className="cb-mobile-menu-inner">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`cb-mobile-link ${pathname === item.href ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span>→</span>
              </Link>
            ))}

            <Link
              href="/contact"
              className="cb-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Talk <span>→</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}