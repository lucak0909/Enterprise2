import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PATH_LABELS,
  getPathHome,
  getPathSlugs,
  getTopic,
  getTopicSlugs,
} from "@/lib/content";

export function generateStaticParams() {
  return getPathSlugs().map((path) => ({ path }));
}

export default async function PathPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path: pathSlug } = await params;

  if (!getPathSlugs().includes(pathSlug)) {
    notFound();
  }

  const home = await getPathHome(pathSlug);
  const topicSlugs = getTopicSlugs(pathSlug);
  const topics = await Promise.all(
    topicSlugs.map(async (slug) => ({
      slug,
      frontmatter: (await getTopic(pathSlug, slug)).frontmatter,
    })),
  );

  return (
    <>
      <p>
        <Link href="/">&larr; All paths</Link>
      </p>
      <h1>{home.frontmatter.title || PATH_LABELS[pathSlug] || pathSlug}</h1>
      {/* Content comes from our own markdown files, not user input. */}
      <div dangerouslySetInnerHTML={{ __html: home.contentHtml }} />

      <h2>Topics</h2>
      <ul className="topic-list">
        {topics.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/${pathSlug}/${slug}`}>
              {frontmatter.title || slug}
            </Link>
            <span className="status-badge">{frontmatter.status ?? "draft"}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
