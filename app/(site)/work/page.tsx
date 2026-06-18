import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Work | Barkaat Software Solutions",
  description:
    "Selected projects and case studies from healthcare, fintech, automotive, and internal platforms.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
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

      <section className="sections-padding py-24">
        <div className="sections-container">
          <div className="text-center mb-12">
            <h2 className="text-section-xl font-bold text-neutral-light mb-4">
              Ready to see what we can build for you?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Let&rsquo;s discuss your vision and how we can bring it to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neural-crimson text-white rounded-lg hover:bg-neural-crimson-light transition-colors"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border-primary bg-obsidian-800 mt-24">
        <div className="sections-container py-12 text-center">
          <div className="border-t border-border-primary pt-8 text-center text-text-muted text-sm">
            <p>© 2026 Barkaat Software Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}