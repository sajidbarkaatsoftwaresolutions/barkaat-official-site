// "use client";

// import { ArrowRight } from "lucide-react";
// import { useState, ReactNode } from "react";

// export interface Tab {
//   id: string;
//   label: string;
//   content: ReactNode;
// }

// interface TabsProps {
//   tabs: Tab[];
//   title?: string;
// }

// const scaleDomainsTabs: Tab[] = [
//   {
//     id: "saas",
//     label: "SaaS Platforms",
//     content: (
//       <div className="space-y-4">
//         <h3 className="text-2xl font-bold text-text-primary">
//           Enterprise SaaS Solutions
//         </h3>
//         <p className="text-text-secondary leading-relaxed">
//           Multi-tenant architectures built on AWS, with advanced security,
//           compliance, and scalability. From identity management to billing
//           engines, we architect systems that grow with your business.
//         </p>
//         <div className="pt-4">
//           <button className="py-3 px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
//             Explore SaaS Architecture <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "marketplace",
//     label: "Marketplaces",
//     content: (
//       <div className="space-y-4">
//         <h3 className="text-2xl font-bold text-text-primary">
//           High-Scale Marketplace Engineering
//         </h3>
//         <p className="text-text-secondary leading-relaxed">
//           Complex transactional systems with real-time matching, payment
//           processing, and reputation systems. We&rsquo;ve built marketplaces
//           that handle millions of daily transactions with zero downtime.
//         </p>
//         <div className="pt-4">
//           <button className="py-3 px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
//             View Marketplace Patterns <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "analytics",
//     label: "Analytics & Data",
//     content: (
//       <div className="space-y-4">
//         <h3 className="text-2xl font-bold text-text-primary">
//           Real-Time Analytics Platforms
//         </h3>
//         <p className="text-text-secondary leading-relaxed">
//           Data pipeline architectures using streaming technologies, OLAP
//           databases, and machine learning integration. We design systems that
//           turn raw data into actionable intelligence in real time.
//         </p>
//         <div className="pt-4">
//           <button className="py-3 px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
//             Discover Data Stack <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     ),
//   },
// ];

// export default function Tabs() {
//   const [activeTab, setActiveTab] = useState(scaleDomainsTabs[0]?.id || "");

//   const activeContent = scaleDomainsTabs.find((tab) => tab.id === activeTab);

//   return (
//     <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-900">
//       <div className="max-w-[1400px] mx-auto">
//         <div className="mb-[60px] text-center">
//           <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-4 uppercase tracking-[-0.5px]">
//             Scale Domains
//           </h2>
//         </div>

//         <nav className="flex gap-4 border-b border-border-primary mb-10 overflow-hidden md:overflow-x-visible overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
//           {scaleDomainsTabs.map((tab) => (
//             <button
//               key={tab.id}
//               role="tab"
//               aria-selected={activeTab === tab.id}
//               aria-controls={`panel-${tab.id}`}
//               className={`py-4 px-6 bg-transparent border-none text-text-muted cursor-pointer text-sm font-semibold relative transition-colors duration-200 font-poppins whitespace-nowrap hover:text-text-secondary after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:bg-accent-crimson after:transition-[width] after:duration-200 ${
//                 activeTab === tab.id
//                   ? "text-accent-crimson after:w-full"
//                   : "after:w-0"
//               }`}
//               onClick={() => setActiveTab(tab.id)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </nav>

//         {/* Bug 2 fixed: only render the active tab's content instead of
//             all panels with absolute positioning inside a grid */}
//         {activeContent && (
//           <div
//             id={`panel-${activeContent.id}`}
//             role="tabpanel"
//             aria-labelledby={activeContent.id}
//             className="transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-2"
//           >
//             {activeContent.content}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { ArrowRight } from "lucide-react";
import { useState, ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  title?: string;
}

const scaleDomainsTabs: Tab[] = [
  {
    id: "saas",
    label: "SaaS Platforms",
    content: (
      <div className="space-y-3 md:space-y-4">
        <h3 className="text-lg md:text-2xl font-bold text-text-primary leading-snug">
          Enterprise SaaS Solutions
        </h3>
        <p className="text-sm md:text-base text-text-secondary leading-relaxed">
          Multi-tenant architectures built on AWS, with advanced security,
          compliance, and scalability. From identity management to billing
          engines, we architect systems that grow with your business.
        </p>
        <div className="pt-2 md:pt-4">
          <button className="py-2.5 px-5 md:py-3 md:px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-xs md:text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
            Explore SaaS Architecture{" "}
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    ),
  },
  {
    id: "marketplace",
    label: "Marketplaces",
    content: (
      <div className="space-y-3 md:space-y-4">
        <h3 className="text-lg md:text-2xl font-bold text-text-primary leading-snug">
          High-Scale Marketplace Engineering
        </h3>
        <p className="text-sm md:text-base text-text-secondary leading-relaxed">
          Complex transactional systems with real-time matching, payment
          processing, and reputation systems. We&rsquo;ve built marketplaces
          that handle millions of daily transactions with zero downtime.
        </p>
        <div className="pt-2 md:pt-4">
          <button className="py-2.5 px-5 md:py-3 md:px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-xs md:text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
            View Marketplace Patterns{" "}
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    label: "Analytics & Data",
    content: (
      <div className="space-y-3 md:space-y-4">
        <h3 className="text-lg md:text-2xl font-bold text-text-primary leading-snug">
          Real-Time Analytics Platforms
        </h3>
        <p className="text-sm md:text-base text-text-secondary leading-relaxed">
          Data pipeline architectures using streaming technologies, OLAP
          databases, and machine learning integration. We design systems that
          turn raw data into actionable intelligence in real time.
        </p>
        <div className="pt-2 md:pt-4">
          <button className="py-2.5 px-5 md:py-3 md:px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-xs md:text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
            Discover Data Stack{" "}
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    ),
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(scaleDomainsTabs[0]?.id || "");

  const activeContent = scaleDomainsTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8 md:mb-[60px] text-center">
          <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-4 uppercase tracking-[-0.5px]">
            Scale Domains
          </h2>
        </div>

        <nav className="flex gap-1 md:gap-4 border-b border-border-primary mb-6 md:mb-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {scaleDomainsTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`py-3 md:py-4 px-3 md:px-6 bg-transparent border-none text-text-muted cursor-pointer text-xs md:text-sm font-semibold relative transition-colors duration-200 font-poppins whitespace-nowrap hover:text-text-secondary after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:bg-accent-crimson after:transition-[width] after:duration-200 ${
                activeTab === tab.id
                  ? "text-accent-crimson after:w-full"
                  : "after:w-0"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {activeContent && (
          <div
            id={`panel-${activeContent.id}`}
            role="tabpanel"
            aria-labelledby={activeContent.id}
            className="transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-2"
          >
            {activeContent.content}
          </div>
        )}
      </div>
    </section>
  );
}
