import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Clients | Barkaat Software Solutions",
  description:
    "We partner with founders, product leaders, and digital teams across industries to ship modern software.",
};

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">CLIENTS</div>
          <h2 className="hero-title">
            Partners, not just &ldquo;projects&rdquo;.
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

      <section className="sections-padding py-24">
        <div className="sections-container">
          <div className="text-center mb-12">
            <h2 className="text-section-xl font-bold text-neutral-light mb-4">
              Let&rsquo;s build something together.
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Whether you&rsquo;re a founder, product team, or agency, we&rsquo;re here to ship.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neural-crimson text-white rounded-lg hover:bg-neural-crimson-light transition-colors"
            >
              Start a Conversation <ArrowRight size={20} />
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