import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Startup Obituary — AI Era Edition",
  description:
    "Obituaries for obscure post-ChatGPT AI startups that shut down. Lessons from the companies most founders never heard of.",
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
