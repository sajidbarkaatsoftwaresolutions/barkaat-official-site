import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Shield, Zap, Users } from "lucide-react";
import NeuralMesh from "@/app/components/NeuralMesh";

export const metadata: Metadata = {
  title: "About Us | Barkaat Software Solutions",
  description:
    "Learn about our mission, our values, and the senior-first team behind our high-scale software solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mt-16 lg:mt-[72px] py-12 md:py-[60px] pb-24 md:pb-[120px] px-5 md:px-10 bg-transparent relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="flex flex-col gap-6 md:gap-8 items-center">
            <h1 className="font-montserrat text-3xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary uppercase mt-10 md:mt-20">
              WHO WE <span className="text-accent-crimson">ARE</span>
            </h1>
            <p className="text-sm md:text-lg leading-relaxed md:leading-[1.8] text-text-secondary max-w-[800px]">
              Barkaat Software Solutions is a premium engineering studio focused
              on architecting and building high-scale digital ecosystems. We
              exist to bridge the gap between complex business requirements and
              elegant, scalable technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-800 border-y border-border-primary">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[40px] font-extrabold text-text-primary uppercase tracking-[-0.5px]">
              Our Mission
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              To empower forward-thinking businesses with uncompromising,
              high-performance software. We believe that true innovation lies
              not just in the ideas themselves, but in the meticulous execution
              and architecture that brings them to life.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[40px] font-extrabold text-text-primary uppercase tracking-[-0.5px]">
              Our Vision
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              To be the globally recognized standard for engineering
              excellence—where the world&apos;s most ambitious companies come to
              build their most critical infrastructure, applications, and
              digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary uppercase tracking-[-0.5px]">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            {[
              {
                title: "Engineering Excellence",
                desc: "We don't cut corners. We build systems designed to scale, endure, and perform flawlessly under pressure.",
                icon: Zap,
              },
              {
                title: "Radical Transparency",
                desc: "No black boxes. We communicate openly about technical debt, architectural trade-offs, and project timelines.",
                icon: Target,
              },
              {
                title: "Uncompromising Security",
                desc: "Security isn't an afterthought—it's foundational. We build resilient systems protected against modern threats.",
                icon: Shield,
              },
              {
                title: "Senior Craftsmanship",
                desc: "Every line of code is written or reviewed by experienced architects who treat software engineering as an art.",
                icon: Users,
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-obsidian-800 border border-border-primary rounded-xl md:rounded-2xl p-3 md:p-8 transition-all duration-200 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] animate-fade-in flex flex-col"
                >
                  <h3 className="text-[11px] md:text-lg font-bold text-text-primary mb-1 md:mb-3 leading-snug">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-[10px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-800 border-t border-border-primary">
        <div className="max-w-[1400px] px-5 md:px-10 text-center max-w-2xl mx-auto">
          <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-8 uppercase tracking-[-0.5px]">
            Partner With Us
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-8 leading-relaxed max-w-[800px] mx-auto">
            Ready to bring your vision to life? Let&apos;s discuss how our
            engineering team can accelerate your product roadmap.
          </p>
          <Link href="/contact">
            <button className="py-2.5 px-5 md:py-3 md:px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-xs md:text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
