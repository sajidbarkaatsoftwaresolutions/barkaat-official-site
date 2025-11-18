import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Barkaat Software Solutions",
  description:
    "Selected projects and case studies from healthcare, fintech, automotive, and internal platforms.",
};

export default function WorkPage() {
  return (
    <>
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">WORK</div>
          <h2 className="hero-title">Selected engagements &amp; case studies.</h2>
          <p className="hero-subtitle">
            A sample of the systems we&rsquo;ve designed and shipped—platforms
            that handle real data, real users, and real business rules.
          </p>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🏥</div>
              <div className="section-name">Digital health platform</div>
            </div>
            <div className="section-pill">Real-time workflows</div>
          </div>
          <div className="section-body">
            Patient-facing portal, provider tools, and integrations with
            clinical systems built with a HIPAA-conscious architecture.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">💳</div>
              <div className="section-name">Fintech SaaS</div>
            </div>
            <div className="section-pill">Risk &amp; compliance</div>
          </div>
          <div className="section-body">
            Transaction workflows, analytics, and reporting dashboards with
            strict security and auditability requirements.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🚗</div>
              <div className="section-name">Automotive operations</div>
            </div>
            <div className="section-pill">Process automation</div>
          </div>
          <div className="section-body">
            Internal tools, integrations, and automation for inventory,
            logistics, and back-office processes.
          </div>
        </article>
      </section>
    </>
  );
}