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
      <section className="mt-16 lg:mt-[72px] py-16 md:py-24 px-5 md:px-10 bg-transparent flex justify-center text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="text-xs md:text-sm font-semibold tracking-[2px] uppercase text-accent-crimson">CLIENTS</div>
          <h2 className="font-montserrat text-3xl md:text-5xl lg:text-[56px] font-extrabold text-text-primary leading-tight tracking-tight">
            Partners, not just &ldquo;projects&rdquo;.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mt-2">
            We work best with teams who value craft, want honest feedback,
            and see technology as a core part of their business.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-5 md:px-10 py-12">
        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">🏗️</div>
              <div className="font-bold text-text-primary text-lg">VC-backed startups</div>
            </div>
            <div className="text-xs font-semibold px-2.5 py-1 bg-accent-crimson/10 text-accent-crimson rounded-full shrink-0">0 → 1</div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Helping founders go from pitch deck to working product that can
            be sold, demoed, and scaled.
          </div>
        </article>

        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">🏢</div>
              <div className="font-bold text-text-primary text-lg">Product teams</div>
            </div>
            <div className="text-xs font-semibold px-2.5 py-1 bg-accent-crimson/10 text-accent-crimson rounded-full shrink-0">Scale &amp; refactor</div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Supporting in-house teams with architecture, refactors, and new
            features on critical systems.
          </div>
        </article>

        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">🎯</div>
              <div className="font-bold text-text-primary text-lg">Digital agencies</div>
            </div>
            <div className="text-xs font-semibold px-2.5 py-1 bg-accent-crimson/10 text-accent-crimson rounded-full shrink-0">Senior bench</div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Providing senior engineering capacity for complex builds where
            quality and timelines really matter.
          </div>
        </article>
      </section>

      <section className="py-16 md:py-24 px-5 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
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
        <div className="max-w-[1400px] mx-auto py-12 text-center">
          <div className="border-t border-border-primary pt-8 text-center text-text-muted text-sm">
            <p>© 2026 Barkaat Software Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}