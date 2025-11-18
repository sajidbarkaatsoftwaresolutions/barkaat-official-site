import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barkaat Software Solutions | Cloud, SaaS & Product Engineering",
  description:
    "Barkaat Software Solutions is a senior-led digital product studio delivering cloud-native platforms, SaaS apps, and high-quality engineering partnerships.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}