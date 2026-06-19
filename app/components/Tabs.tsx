"use client";

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

export default function Tabs({ tabs, title }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-900">
      <div className="max-w-[1400px] mx-auto">
        {title && (
          <div className="mb-[60px] text-center">
            <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-4 uppercase tracking-[-0.5px]">{title}</h2>
          </div>
        )}

        <nav className="flex gap-4 border-b border-border-primary mb-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`py-4 px-6 bg-transparent border-none text-text-muted cursor-pointer text-sm font-semibold relative transition-colors duration-200 font-poppins whitespace-nowrap hover:text-text-secondary after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:bg-accent-crimson after:transition-[width] after:duration-200 ${
                activeTab === tab.id ? "text-accent-crimson after:w-full" : "after:w-0"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={tab.id}
              className={`transition-all duration-300 ease-out ${
                activeTab === tab.id ? "opacity-100 visible relative translate-y-0" : "opacity-0 invisible absolute translate-y-2.5"
              }`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
