import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barkaat Software Solutions | Overview",
  description:
    "Overview of Barkaat Software Solutions: services, solutions, process, clients, work, insights, careers, and contact.",
};

export default function OverviewPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-card" aria-labelledby="hero-title">
        <div className="hero-main">
          <div className="hero-kicker">BARKAAT SOFTWARE SOLUTIONS</div>
          <h2 id="hero-title" className="hero-title">
            Engineering modern products, from API to pixel.
          </h2>
          <p className="hero-subtitle">
            A senior-led studio focused on cloud-native platforms,
            high-performance web and mobile apps, and experience-driven
            interfaces—designed for teams that care about craft.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">AWS &amp; cloud-native</span>
            <span className="hero-tag">SaaS &amp; fintech</span>
            <span className="hero-tag">React / Vue / Node</span>
            <span className="hero-tag">Product partnerships</span>
          </div>
        </div>
        <div className="hero-side">
          <div className="metric-card">
            <div className="metric-label">
              <span className="metric-chip" />
              Active initiatives
            </div>
            <div className="metric-value">5</div>
            <div>Discovery, design, and build tracks in flight.</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">
              <span
                className="metric-chip"
                style={{
                  background: "#38bdf8",
                  boxShadow: "0 0 0 4px rgba(56,189,248,0.16)",
                }}
              />
              Avg. engagement
            </div>
            <div className="metric-value">6–12 mo</div>
            <div>Embedded with founders &amp; product leaders.</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">
              <span
                className="metric-chip"
                style={{
                  background: "#a855f7",
                  boxShadow: "0 0 0 4px rgba(168,85,247,0.18)",
                }}
              />
              Delivery focus
            </div>
            <div className="metric-value">Ship weekly</div>
            <div>Small batches, high confidence releases.</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">
              <span
                className="metric-chip"
                style={{
                  background: "#f97316",
                  boxShadow: "0 0 0 4px rgba(249,115,22,0.22)",
                }}
              />
              Time zones
            </div>
            <div className="metric-value">Global</div>
            <div>North America, EU, GCC &amp; APAC experience.</div>
          </div>
        </div>
      </section>

      {/* GRID OF SECTION CARDS */}
      <section className="sections-grid" aria-label="Key sections">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">💼</div>
              <div className="section-name">Services</div>
            </div>
            <div className="section-pill">Architecture · Delivery</div>
          </div>
          <div className="section-body">
            End-to-end product engineering: discovery, product strategy,
            UX/UI, full-stack implementation, cloud infrastructure, and
            ongoing platform ownership.
          </div>
          <div className="section-footer">
            Explore services <span>↗</span>
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🧩</div>
              <div className="section-name">Solutions</div>
            </div>
            <div className="section-pill">SaaS · Platforms</div>
          </div>
          <div className="section-body">
            Opinionated solution patterns for B2B SaaS, marketplaces,
            analytics dashboards, and multi-tenant platforms—built on AWS,
            Node, and modern frontends.
          </div>
          <div className="section-footer">
            Explore solutions <span>↗</span>
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">⚙️</div>
              <div className="section-name">Process</div>
            </div>
            <div className="section-pill">Calm · Transparent</div>
          </div>
          <div className="section-body">
            Lightweight but rigorous: weekly demos, async updates, clear
            roadmaps, and strong technical documentation so your team is
            never in the dark.
          </div>
          <div className="section-footer">
            See process <span>↗</span>
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🤝</div>
              <div className="section-name">Clients</div>
            </div>
            <div className="section-pill">Founders · Product</div>
          </div>
          <div className="section-body">
            We partner with startups, product teams, and digital agencies
            who need senior engineering without the overhead of a large
            consultancy.
          </div>
          <div className="section-footer">
            Meet our clients <span>↗</span>
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">📂</div>
              <div className="section-name">Work</div>
            </div>
            <div className="section-pill">Case studies</div>
          </div>
          <div className="section-body">
            Selected engagements spanning healthcare, fintech, automotive,
            and internal tooling—showing how we move from idea to
            production-grade systems.
          </div>
          <div className="section-footer">
            View our work <span>↗</span>
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🧠</div>
              <div className="section-name">Insights</div>
            </div>
            <div className="section-pill">Articles · Guides</div>
          </div>
          <div className="section-body">
            Practical write-ups on architecture, developer experience, and
            product delivery from engineers who ship real systems.
          </div>
          <div className="section-footer">
            Read insights <span>↗</span>
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🚀</div>
              <div className="section-name">Careers</div>
            </div>
            <div className="section-pill">Senior-first</div>
          </div>
          <div className="section-body">
            A small, distributed team built around senior talent, flexible
            engagements, and meaningful, technically interesting work.
          </div>
          <div className="section-footer">
            Explore careers <span>↗</span>
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">✉️</div>
              <div className="section-name">Contact</div>
            </div>
            <div className="section-pill">Start a conversation</div>
          </div>
          <div className="section-body">
            Ready to explore an engagement or want a second opinion on your
            architecture? Share a brief and we'll respond with concrete
            next steps.
          </div>
          <div className="section-footer">
            Contact us <span>↗</span>
          </div>
        </article>
      </section>
    </>
  );
}