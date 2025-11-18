import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients | Barkaat Software Solutions",
  description:
    "We partner with founders, product leaders, and digital teams across industries to ship modern software.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">CLIENTS</div>
          <h2 className="hero-title">
            Partners, not just "projects".
          </h2>
          <p className="hero-subtitle">
            We work best with teams who value craft, want honest feedback,
            and see technology as a core part of their business.
          </p>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🏗️</div>
              <div className="section-name">VC-backed startups</div>
            </div>
            <div className="section-pill">0 → 1</div>
          </div>
          <div className="section-body">
            Helping founders go from pitch deck to working product that can
            be sold, demoed, and scaled.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🏢</div>
              <div className="section-name">Product teams</div>
            </div>
            <div className="section-pill">Scale &amp; refactor</div>
          </div>
          <div className="section-body">
            Supporting in-house teams with architecture, refactors, and new
            features on critical systems.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🎯</div>
              <div className="section-name">Digital agencies</div>
            </div>
            <div className="section-pill">Senior bench</div>
          </div>
          <div className="section-body">
            Providing senior engineering capacity for complex builds where
            quality and timelines really matter.
          </div>
        </article>
      </section>
    </>
  );
}