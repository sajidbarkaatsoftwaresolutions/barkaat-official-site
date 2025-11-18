import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Barkaat Software Solutions",
  description:
    "Articles, notes, and engineering guides on architecture, developer experience, and product delivery.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">INSIGHTS</div>
          <h2 className="hero-title">
            Practical notes from real projects.
          </h2>
          <p className="hero-subtitle">
            No fluff. Just patterns, trade-offs, and lessons learned from
            shipping products across different industries.
          </p>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🏗️</div>
              <div className="section-name">Architecture</div>
            </div>
            <div className="section-pill">Systems that age well</div>
          </div>
          <div className="section-body">
            When to go modular vs. monolith, how to evolve schemas, and
            how to keep complexity under control over time.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">💻</div>
              <div className="section-name">Developer experience</div>
            </div>
            <div className="section-pill">Happy teams ship more</div>
          </div>
          <div className="section-body">
            Tooling, conventions, and workflows that keep your team fast
            without sacrificing quality.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🚢</div>
              <div className="section-name">Product delivery</div>
            </div>
            <div className="section-pill">Ship with confidence</div>
          </div>
          <div className="section-body">
            How to break work into meaningful releases and align product,
            design, and engineering.
          </div>
        </article>
      </section>
    </>
  );
}