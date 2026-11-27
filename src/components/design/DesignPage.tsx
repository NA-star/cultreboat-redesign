"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./design.css";

type Category = "All" | "Web Design" | "Branding" | "UI/UX" | "Creative";

interface ProjectItem {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  imagePath: string;
  width: number;
  height: number;
}

const categories: Category[] = [
  "All",
  "Web Design",
  "Branding",
  "UI/UX",
  "Creative",
];

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "NextGen Platform",
    category: "Web Design",
    imagePath: "/images/project-web.png",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    title: "Nova Brand Identity",
    category: "Branding",
    imagePath: "/images/project-brand.png",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    title: "Zen App UI",
    category: "UI/UX",
    imagePath: "/images/project-zen.png",
    width: 800,
    height: 600,
  },
  {
    id: 4,
    title: "Aura Fluid Motion",
    category: "Creative",
    imagePath: "/images/project-aura.png",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    title: "Monolith Architecture",
    category: "Web Design",
    imagePath: "/images/project-monolith.png",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    title: "Eclipse Neon System",
    category: "UI/UX",
    imagePath: "/images/project-eclipse.png",
    width: 800,
    height: 600,
  },
];

export default function DesignPage() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <main className="design-page" id="top">
      <section className="design-hero-section">
        <div className="design-hero-grid-bg" aria-hidden="true" />
        <div className="design-hero-glow-primary" aria-hidden="true" />
        <div className="design-hero-glow-secondary" aria-hidden="true" />

        <div className="container design-hero-flex">
          <div className="design-header-copy">
            <div className="design-hero-badge">
              <span className="design-badge-dot" />
              Selected Case Studies &amp; Visual Systems
            </div>

            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              Our Work
            </div>

            <h1>
              Design
              <br />
              <span className="gradient-text">Portfolio</span>
            </h1>

            <p>
              A curated collection of digital products, brand identities, and
              interactive systems built where precision engineering meets visual
              craft.
            </p>

            <div className="design-hero-actions">
              <a href="#work" className="design-btn-primary">
                Browse Projects <span>↓</span>
              </a>
              <Link href="/contact" className="design-btn-secondary">
                Start a Project <span>→</span>
              </Link>
            </div>
          </div>

          <div className="design-hero-stage" aria-hidden="true">
            <div className="design-3d-ribbon">
              <div className="ribbon-core-aura" />
              <div className="ribbon-loop-1" />
              <div className="ribbon-loop-2" />
              <div className="ribbon-glass-arc" />
            </div>

            <div className="design-floating-chip design-chip-top">
              <span className="chip-kicker">CURATED ARCHIVE</span>
              <strong>06 Featured Works</strong>
            </div>

            <div className="design-floating-chip design-chip-bottom">
              <span className="chip-kicker">DISCIPLINES</span>
              <strong>Brand • UI/UX • Web • Motion</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase" id="work">
        <div className="container">
          <div
            className="filter-bar"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`filter-pill ${activeTab === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <Link
                href="/contact"
                className="project-card"
                key={project.id}
              >
                <div className="project-thumb">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    width={project.width}
                    height={project.height}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "18px",
                    }}
                  />
                </div>

                <div className="project-meta">
                  <div>
                    <h3>{project.title}</h3>
                    <span>{project.category}</span>
                  </div>
                  <span className="project-arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}