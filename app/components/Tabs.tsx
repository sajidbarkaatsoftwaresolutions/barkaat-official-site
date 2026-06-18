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
    <section className="tabs-section">
      <div className="tabs-container">
        {title && (
          <div className="tabs-header">
            <h2 className="tabs-title">{title}</h2>
          </div>
        )}

        <nav className="tabs-nav" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="tabs-content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={tab.id}
              className={`tab-pane ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
