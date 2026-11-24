
import type { Metadata } from "next";
import "./global.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ṣiṣẹ́ gidi | Know Your Work. Know Your Rights.",
  description:
    "Ṣiṣẹ́ gidi is a free, open-access learning platform helping formal, informal, self-employed and platform workers understand their rights, protections and opportunities through simple guides, animated lessons and interactive learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>

        <Nav />

        <main id="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

