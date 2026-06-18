"use client";

import { ReactNode } from "react";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-obsidian-900">
      {children}
    </div>
  );
}
