"use client";

import { useState } from "react";
import {
  ArrowRight,
  Compass,
  Layers,
  Workflow,
  Settings,
  CheckCircle,
  LayoutTemplate,
  Server,
  Cloud,
} from "lucide-react";

const allServices = [
  {
    icon: Compass,
    title: "Discovery & Strategy",
    pill: "Shape the right thing",
    desc: "We clarify problems, validate assumptions, and define delivery roadmaps that reduce risk and align business and engineering early.",
  },
  {
    icon: Layers,
    title: "Architecture & Consulting",
    pill: "Scalable by design",
    desc: "System architecture, technology selection, and security planning to ensure your platform scales reliably and safely.",
  },
  {
    icon: Server,
    title: "Full-Stack Engineering",
    pill: "React · Vue · Node",
    desc: "API-first backends and scalable frontends built with TypeScript, modern frameworks, and proven engineering practices.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    pill: "AWS-native",
    desc: "Infrastructure-as-code, CI/CD pipelines, observability, and cost-aware architectures optimized for long-term ownership.",
  },
  {
    icon: Workflow,
    title: "API & Systems Integration",
    pill: "Connected systems",
    desc: "Robust APIs and seamless integrations connecting products, partners, and data across modern platforms.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    pill: "Operational stability",
    desc: "Ongoing monitoring, upgrades, and continuous improvements to keep your systems secure, stable, and evolving.",
  },
  {
    icon: CheckCircle,
    title: "QA & Testing",
    pill: "Tested at scale",
    desc: "Automated and manual testing strategies ensuring performance, reliability, and consistent product quality.",
  },
  {
    icon: LayoutTemplate,
    title: "UX / UI & Visual Design",
    pill: "From flows to pixels",
    desc: "User journeys, wireframes, and high-fidelity interfaces that feel fast, intuitive, and beautifully crafted.",
  },
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? allServices : allServices.slice(0, 4);

  return (
    <section
      className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-900"
      id="services"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-12 uppercase tracking-[-0.5px]">
          Our Services
        </h2>
        <p className="text-base md:text-lg text-text-secondary mb-8 leading-relaxed max-w-[800px]">
          End-to-end engineering excellence across the entire product lifecycle.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {displayedServices.map((service, idx) => {
            return (
              <div
                key={idx}
                className="bg-obsidian-800 border border-border-primary rounded-xl md:rounded-2xl p-3 md:p-8 transition-all duration-200 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)] animate-fade-in flex flex-col"
              >
                <h3 className="text-[11px] md:text-lg font-bold text-text-primary mb-1 md:mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[10px] md:text-sm text-accent-crimson font-semibold mb-2 md:mb-3 leading-snug">
                  {service.pill}
                </p>
                <p className="text-text-muted text-[10px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-8 text-center">
            <button
              className="py-3 px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]"
              onClick={() => setShowAll(true)}
            >
              Load More Services <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
