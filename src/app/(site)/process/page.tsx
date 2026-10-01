import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import {
  Search,
  Map,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Process | Barkaat Software Solutions",
  description:
    "A calm, transparent delivery process with weekly demos, async updates, and clear roadmaps.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <section className="mt-16 lg:mt-[72px] py-16 md:py-24 px-5 md:px-10 bg-transparent flex justify-center text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="text-xs md:text-sm font-semibold tracking-[2px] uppercase text-accent-crimson">OUR PROCESS</div>
          <h2 className="font-montserrat text-3xl md:text-5xl lg:text-[56px] font-extrabold text-text-primary leading-tight tracking-tight">
            Our Software Development Process
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mt-2">
            We follow a structured and transparent approach to transform ideas
            into robust digital products. Our process ensures quality,
            efficiency, and alignment with your business goals:
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-5 md:px-10 py-12">
        {/* === NEW CONTENT === */}
        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <Search size={18} className="text-accent-crimson" />
              </div>
              <div className="font-bold text-text-primary text-lg">
                Discovery & Requirement Analysis
              </div>
            </div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Understanding your business, users, and goals. Gathering
            requirements, defining project scope, and identifying key features.
          </div>
        </article>

        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <Map size={18} className="text-accent-crimson" />
              </div>
              <div className="font-bold text-text-primary text-lg">Planning & Strategy</div>
            </div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Crafting a roadmap and technical architecture. Selecting the right
            technology stack (Node.js, .NET, Spring Boot, React, Vue, etc.).
            Estimating timelines and resources.
          </div>
        </article>

        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <PenTool size={18} className="text-accent-crimson" />
              </div>
              <div className="font-bold text-text-primary text-lg">Design & Prototyping</div>
            </div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Creating wireframes, mockups, and user experience flows. Iterating
            designs based on feedback before development.
          </div>
        </article>

        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <Code2 size={18} className="text-accent-crimson" />
              </div>
              <div className="font-bold text-text-primary text-lg">Development & Implementation</div>
            </div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Writing clean, scalable, and maintainable code. Building backend
            services, APIs, and front-end interfaces. Following agile practices
            with regular sprints.
          </div>
        </article>

        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-accent-crimson" />
              </div>
              <div className="font-bold text-text-primary text-lg">Testing & Quality Assurance</div>
            </div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Conducting rigorous functional, performance, and security testing.
            Ensuring the software works seamlessly across devices and platforms.
          </div>
        </article>

        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <Rocket size={18} className="text-accent-crimson" />
              </div>
              <div className="font-bold text-text-primary text-lg">Deployment & Launch</div>
            </div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Deploying the product to production environments. Monitoring initial
            performance and ensuring smooth launch.
          </div>
        </article>

        <article className="bg-obsidian-800 border border-border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-accent-crimson/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <RefreshCw size={18} className="text-accent-crimson" />
              </div>
              <div className="font-bold text-text-primary text-lg">
                Maintenance & Continuous Improvement
              </div>
            </div>
          </div>
          <div className="text-text-muted text-sm leading-relaxed">
            Providing support, updates, and performance optimizations. Iterating
            features based on user feedback and evolving requirements.
          </div>
        </article>
      </section>

      <section className="py-16 md:py-24 px-5 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-section-xl font-bold text-neutral-light mb-4">
              Ready to start building?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Let&rsquo;s discuss how our proven process can deliver your product on time and to spec.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neural-crimson text-white rounded-lg hover:bg-neural-crimson-light transition-colors"
            >
              Start a Project <ArrowRight size={20} />
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
