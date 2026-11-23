import Link from "next/link";
import { PATH_LABELS, getPathSlugs } from "@/lib/content";

export default function HomePage() {
  const pathSlugs = getPathSlugs();

  return (
    <>
      <h1>What comes after ISE?</h1>
      <p>
        Pick a path below to read what it&apos;s actually like, hear from people who&apos;ve
        done it, and work through what it would take to prepare.
      </p>
      <div className="path-grid">
        {pathSlugs.map((slug) => (
          <Link key={slug} href={`/${slug}`} className="path-card">
            <strong>{PATH_LABELS[slug] ?? slug}</strong>
          </Link>
        ))}
      </div>
    </>
  );
}
