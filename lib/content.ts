import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const CONTENT_DIR = path.join(process.cwd(), "content");

export const PATH_LABELS: Record<string, string> = {
  founder: "Becoming a Founder",
  startup: "Joining a Startup",
  mnc: "Joining an MNC",
  "not-for-profit": "Not-for-Profit, Charity or Research",
};

export interface Frontmatter {
  title: string;
  path: string;
  author: string;
  status: "draft" | "review" | "final";
  ai_use: string;
  topic_order?: number;
}

export interface ContentDoc {
  frontmatter: Frontmatter;
  contentHtml: string;
}

function isPathDir(name: string): boolean {
  return !name.startsWith("_") && fs.statSync(path.join(CONTENT_DIR, name)).isDirectory();
}

export function getPathSlugs(): string[] {
  return fs.readdirSync(CONTENT_DIR).filter(isPathDir).sort();
}

function readMarkdownFile(filePath: string): { frontmatter: Frontmatter; body: string } {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as Frontmatter, body: content };
}

async function toHtml(markdown: string): Promise<string> {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

export async function getPathHome(pathSlug: string): Promise<ContentDoc> {
  const filePath = path.join(CONTENT_DIR, pathSlug, "home.md");
  const { frontmatter, body } = readMarkdownFile(filePath);
  return { frontmatter, contentHtml: await toHtml(body) };
}

export function getTopicSlugs(pathSlug: string): string[] {
  const pathDir = path.join(CONTENT_DIR, pathSlug);
  return fs
    .readdirSync(pathDir)
    .filter((name) => fs.existsSync(path.join(pathDir, name, "content.md")))
    .sort();
}

export async function getTopic(pathSlug: string, topicSlug: string): Promise<ContentDoc> {
  const filePath = path.join(CONTENT_DIR, pathSlug, topicSlug, "content.md");
  const { frontmatter, body } = readMarkdownFile(filePath);
  return { frontmatter, contentHtml: await toHtml(body) };
}
