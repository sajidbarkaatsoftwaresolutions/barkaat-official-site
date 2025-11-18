import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Barkaat Software Solutions",
  description:
    "Join a senior-first, remote-friendly engineering studio focused on meaningful work and modern tech.",
};

export default function CareersPage() {
  return (
    <>
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">CAREERS</div>
          <h2 className="hero-title">
            Small, senior, and craft-focused.
          </h2>
          <p className="hero-subtitle">
            We look for engineers and designers who care deeply about
            quality, communication, and outcomes—not just ticking boxes.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">Remote-first</span>
            <span className="hero-tag">Senior team</span>
            <span className="hero-tag">Modern stack</span>
          </div>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">👩‍💻</div>
              <div className="section-name">Engineering</div>
            </div>
            <div className="section-pill">TypeScript · Cloud</div>
          </div>
          <div className="section-body">
            Work on complex systems with modern tools and direct access to
            decision-makers.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🎨</div>
              <div className="section-name">Product &amp; Design</div>
            </div>
            <div className="section-pill">Shape experiences</div>
          </div>
          <div className="section-body">
            Collaborate across disciplines to design interfaces that
            balance usability, performance, and brand.
          </div>
        </article>
      </section>
    </>
  );
}