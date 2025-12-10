"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/services", label: "Services", icon: "💼" },
  { href: "/solutions", label: "Solutions", icon: "🧩" },
  { href: "/process", label: "Process", icon: "⚙️" },
  { href: "/clients", label: "Clients", icon: "🤝" },
  { href: "/work", label: "Work", icon: "📂" },
  { href: "/insights", label: "Insights", icon: "🧠" },
  { href: "/careers", label: "Careers", icon: "🚀" },
  { href: "/contact", label: "Contact", icon: "✉️" },
];

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMobileSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarClasses =
    "sidebar" +
    (isCollapsed ? " collapsed" : "") +
    (!isMobileSidebarOpen ? " hidden-mobile" : "");

  const handleNavClick = () => {
    if (window.innerWidth <= 900) {
      setIsMobileSidebarOpen(false);
    }
  };

  return (
    <div className="app-shell">
      {/* Mobile backdrop */}
      {isMobileSidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={sidebarClasses} aria-label="Primary navigation">
        <div className="sidebar-header">
          <div className="brand-mark">
            <div className="brand-mark-inner">B</div>
          </div>
          <div className="sidebar-header-text">
            <div className="sidebar-header-title">Barkaat Software Solutions</div>
            <div className="sidebar-header-subtitle">
              Digital product studio
            </div>
          </div>
        </div>

        <div className="primary-action">
          <button className="primary-action-btn" type="button">
            <div className="primary-action-icon">+</div>
            <span>New project brief</span>
          </button>
          <button
            className="sidebar-toggle"
            type="button"
            aria-label="Collapse sidebar"
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            <span>&lsaquo;</span>
          </button>
        </div>

        <div className="nav-section-label">Navigation</div>
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li className="nav-item" key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={handleNavClick}
                >
                  <span className="nav-link-icon">{item.icon}</span>
                  <span className="nav-link-label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="sidebar-bottom">
          <div className="sidebar-meta">Barkaat Software Solutions</div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex flex-1 flex-col min-w-0">
        <header className="main-header">
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-[15px] font-semibold">Project Console</h1>
            <span className="text-[11px] text-[var(--text-soft)]">
              Plan, design, and ship your next release with Barkaat Software Solutions.
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="pill-badge">
              <span className="pill-dot" />
              <span>Available for new engagements</span>
            </div>
            <button
              type="button"
              aria-label="Toggle sidebar"
              className="mobile-sidebar-toggle"
              onClick={() =>
                setIsMobileSidebarOpen((prev) => !prev)
              }
            >
              ☰
            </button>
          </div>
        </header>

        <section className="main-body">
          <div className="content-wrapper">{children}</div>
        </section>
      </main>
    </div>
  );
}