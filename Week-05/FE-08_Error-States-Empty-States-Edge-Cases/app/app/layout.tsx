import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FE-08 · Error States & Edge Cases",
  description: "Streaming AI chat interface built for FlyRank Frontend AI Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}