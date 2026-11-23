import type { Metadata } from "next";
import Link from "next/link";
import { PATH_LABELS, getPathSlugs } from "@/lib/content";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enterprise2",
  description: "Choosing and preparing for a path after ISE",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathSlugs = getPathSlugs();

  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Enterprise2</Link>
            {pathSlugs.map((slug) => (
              <Link key={slug} href={`/${slug}`}>
                {PATH_LABELS[slug] ?? slug}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
