import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Startup Obituary — AI Era Edition",
  description:
    "A curated graveyard of AI-era startup failures. Novelistic narratives of the rise and fall of companies that bet big on artificial intelligence.",
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
