import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Barkaat Software Solutions",
  description:
    "Predefined solution patterns for SaaS, analytics dashboards, multi-tenant platforms, and integrations.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">SOLUTIONS</div>
          <h2 className="hero-title">
            Opinionated patterns for modern platforms.
          </h2>
          <p className="hero-subtitle">
            Re-usable blueprints for SaaS products, analytics dashboards,
            multi-tenant systems, and integrations that save you months of
            trial-and-error.
          </p>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">📦</div>
              <div className="section-name">B2B SaaS Foundations</div>
            </div>
            <div className="section-pill">Multi-tenant</div>
          </div>
          <div className="section-body">
            Authentication, billing, permissions, and tenant-aware data
            models set up in a way that scales without rewrites.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">📊</div>
              <div className="section-name">Analytics Dashboards</div>
            </div>
            <div className="section-pill">Data-first</div>
          </div>
          <div className="section-body">
            Real-time dashboards, reporting views, and exports that turn
            raw data into meaningful insights for your team and customers.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🔌</div>
              <div className="section-name">Integrations</div>
            </div>
            <div className="section-pill">APIs · Webhooks</div>
          </div>
          <div className="section-body">
            Robust integration patterns for third-party APIs, webhooks,
            and internal systems with proper monitoring and retries.
          </div>
        </article>
      </section>
    </>
  );
}