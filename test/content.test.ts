import { describe, expect, it } from "vitest";
import { getPathHome, getPathSlugs, getTopic, getTopicSlugs } from "../lib/content.js";

describe("content loader", () => {
  it("finds all four paths", () => {
    expect(getPathSlugs()).toEqual(["founder", "mnc", "not-for-profit", "startup"]);
  });

  it("finds four topics per path", () => {
    for (const pathSlug of getPathSlugs()) {
      expect(getTopicSlugs(pathSlug)).toHaveLength(4);
    }
  });

  it("loads a path home page with frontmatter and rendered html", async () => {
    const home = await getPathHome("founder");
    expect(home.frontmatter.path).toBe("founder");
    expect(home.contentHtml).toContain("<h2");
  });

  it("loads a topic with frontmatter and rendered html", async () => {
    const [firstTopic] = getTopicSlugs("founder");
    const topic = await getTopic("founder", firstTopic as string);
    expect(topic.frontmatter.path).toBe("founder");
    expect(topic.contentHtml.length).toBeGreaterThan(0);
  });
});
