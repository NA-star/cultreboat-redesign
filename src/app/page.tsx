import Link from "next/link";
import Image from "next/image";
import "./home.css";

interface StatItem {
  icon: string;
  value: string;
  label: string;
  color: string;
}

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  accent: string;
}

const stats: StatItem[] = [
  { icon: "★", value: "50+", label: "Projects Completed", color: "#38bdf8" },
  { icon: "👥", value: "30+", label: "Happy Clients", color: "#a855f7" },
  { icon: "🏆", value: "5+", label: "Years of Experience", color: "#f59e0b" },
  { icon: "🌐", value: "Worldwide", label: "Creative Impact", color: "#60a5fa" },
];

const services: ServiceItem[] = [
  {
    icon: "✒️",
    title: "UI/UX Design",
    desc: "Intuitive & Impactful",
    accent: "rgba(99, 102, 241, 0.2)",
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "Fast & Scalable",
    accent: "rgba(56, 189, 248, 0.2)",
  },
  {
    icon: "✦",
    title: "Brand Design",
    desc: "Timeless Identity",
    accent: "rgba(168, 85, 247, 0.2)",
  },
  {
    icon: "🧭",
    title: "Digital Strategy",
    desc: "Grow with Purpose",
    accent: "rgba(59, 130, 246, 0.2)",
  },
];

export default function HomePage() {
  return (
    <main className="home-page" id="top">
      {/* 1. HERO SECTION */}
      <section className="home-hero">
        <div className="hero-bg-glow" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <div className="hero-pill">
              <span className="status-dot" />
              Creative Studio • Since 2019
            </div>

            <h1>
              Crafting
              <br />
              Digital Experiences
              <br />
              That <span className="gradient-text">Inspire</span>
            </h1>

            <p>
              At Cultreboat, we blend creativity with technology to build
              stunning designs, meaningful brands, and immersive digital
              experiences.
            </p>

            <div className="hero-actions">
              <Link href="/design" className="btn-primary-solid">
                Explore Work <span>→</span>
              </Link>

              <a
                href="https://www.instagram.com/cultreboat/reels/"
                target="_blank"
                rel="noreferrer"
                className="btn-play-reel"
              >
                <span className="play-circle">▶</span>
                Play Reel
              </a>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="home-hero-visual">
            <div className="orbit-ring" aria-hidden="true" />
            <div className="statue-frame">
              <Image
                src="/images/hero-sculpture.jfif"
                alt="Cultreboat Creative Sculpture"
                width={520}
                height={600}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="home-stats">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div className="stat-item" key={item.label}>
              <span className="stat-icon" style={{ color: item.color }}>
                {item.icon}
              </span>
              <div>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT CULTREBOAT */}
      <section className="home-about">
        <div className="container about-grid">
          <div className="about-visual-card">
            <div className="about-main-image">
              <Image
                src="/images/about-studio.jfif"
                alt="Cultreboat Modern Studio"
                width={640}
                height={480}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="about-floating-badge">
              <h4>
                Design.
                <br />
                Create.
                <br />
                Innovate.
              </h4>
              <Link href="/design" className="mini-arrow-btn">
                ↗
              </Link>
            </div>
          </div>

          <div className="about-copy">
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              About Cultreboat
            </div>

            <h2>
              A Creative Studio
              <br />
              for the Modern World
            </h2>

            <p>
              We are a passionate team of designers, developers and creatives,
              dedicated to bringing bold ideas to life through design,
              innovation and technology.
            </p>

            <Link href="/design" className="btn-primary-solid">
              Learn More <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO BEST */}
      <section className="home-services">
        <div className="container">
          <div className="services-header">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Our Services
              </div>
              <h2>What We Do Best</h2>
            </div>

            <div className="services-header-right">
              <p>
                From branding to web experiences, we provide end-to-end
                creative solutions.
              </p>
              <Link href="/design" className="btn-outline-pill">
                View All
              </Link>
            </div>
          </div>

          <div className="services-cards-grid">
            {services.map((service) => (
              <Link
                href="/design"
                className="service-glass-card"
                key={service.title}
              >
                <div
                  className="service-icon-box"
                  style={{ background: service.accent }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}