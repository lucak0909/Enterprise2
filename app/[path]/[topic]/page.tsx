import Link from "next/link";
import { notFound } from "next/navigation";
import { PATH_LABELS, getPathSlugs, getTopic, getTopicSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getPathSlugs().flatMap((path) =>
    getTopicSlugs(path).map((topic) => ({ path, topic })),
  );
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ path: string; topic: string }>;
}) {
  const { path: pathSlug, topic: topicSlug } = await params;

  if (
    !getPathSlugs().includes(pathSlug) ||
    !getTopicSlugs(pathSlug).includes(topicSlug)
  ) {
    notFound();
  }

  const topic = await getTopic(pathSlug, topicSlug);

  return (
    <>
      <p>
        <Link href={`/${pathSlug}`}>
          &larr; {PATH_LABELS[pathSlug] ?? pathSlug}
        </Link>
      </p>
      <h1>
        {topic.frontmatter.title || topicSlug}
        <span className="status-badge">{topic.frontmatter.status ?? "draft"}</span>
      </h1>
      {/* Content comes from our own markdown files, not user input. */}
      <div dangerouslySetInnerHTML={{ __html: topic.contentHtml }} />
    </>
  );
}
