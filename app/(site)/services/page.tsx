import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Barkaat Software Solutions",
  description:
    "End-to-end product engineering services: discovery, UX/UI, full-stack development, and cloud infrastructure on AWS.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">SERVICES</div>
          <h2 className="hero-title">End-to-end product engineering.</h2>
          <p className="hero-subtitle">
            From idea to production, we design, build, and operate modern
            digital products using AWS, Node/TypeScript, and modern
            front-end frameworks like React and Vue.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">Product discovery</span>
            <span className="hero-tag">UX/UI design</span>
            <span className="hero-tag">Full-stack delivery</span>
            <span className="hero-tag">Cloud infrastructure</span>
          </div>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🧭</div>
              <div className="section-name">Discovery &amp; Strategy</div>
            </div>
            <div className="section-pill">Shape the right thing</div>
          </div>
          <div className="section-body">
            Problem framing, technical spikes, and delivery roadmaps that
            de-risk your early decisions and align stakeholders.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🎨</div>
              <div className="section-name">UX / UI Design</div>
            </div>
            <div className="section-pill">From flows to pixels</div>
          </div>
          <div className="section-body">
            Product flows, wireframes, and high-fidelity interfaces that
            feel modern, fast, and on-brand.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">⚙️</div>
              <div className="section-name">Full-Stack Engineering</div>
            </div>
            <div className="section-pill">React · Vue · Node</div>
          </div>
          <div className="section-body">
            API-first backends, scalable frontends, and integrations built
            with TypeScript, Node, and modern tooling.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">☁️</div>
              <div className="section-name">Cloud &amp; DevOps</div>
            </div>
            <div className="section-pill">AWS-native</div>
          </div>
          <div className="section-body">
            Infrastructure-as-code, CI/CD pipelines, observability, and
            cost-aware architectures tuned for long-term ownership.
          </div>
        </article>
      </section>
    </>
  );
}