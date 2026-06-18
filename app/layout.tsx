import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barkaat Software Solutions | Engineering High-Scale Digital Ecosystems",
  description:
    "Premium engineering hub delivering cloud-native platforms, high-performance SaaS, and experience-driven systems. Senior-led digital product studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-obsidian-900 text-neutral-light">
        {children}
      </body>
    </html>
  );
}