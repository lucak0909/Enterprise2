# Writing guide

This folder is where the 16 sections live. The web team reads these files to build the
site — you don't need to touch any app code to write your section.

## Where your section goes

```
content/
  founder/
    home.md              <- Path Lead only (Ciarán)
    topic-1/content.md
    topic-2/content.md
    topic-3/content.md
    topic-4/content.md
  startup/                <- Path Lead: Óran
    home.md
    topic-1/content.md ... topic-4/content.md
  mnc/                    <- Path Lead: Peter K.
    home.md
    topic-1/content.md ... topic-4/content.md
  not-for-profit/         <- Path Lead: Hugh F.
    home.md
    topic-1/content.md ... topic-4/content.md
```

Each `topic-N/` also has an `assets/` folder — put any images, diagrams, or other files
your section needs in there, and reference them with a relative path
(e.g. `![diagram](./assets/my-diagram.png)`).

Once topics are picked (open decision for Monday), rename `topic-1` etc. to a short
kebab-case slug (e.g. `topic-1` → `funding-basics`) and update this README's table below
with the real names and owners.

## How to write your section

1. Find your folder above.
2. Open `content.md` (or `home.md` if you're a Path Lead) — it's pre-filled from the
   template in `content/_template/` with the required structure and frontmatter.
3. Fill in the frontmatter at the top: `title`, `author`, `status`, `ai_use`.
4. Write your section. Topics need all five parts: **Introduction, Key Concepts, Case
   Study, Exercise, Additional Resources** (plus the optional Interactive Element note).
   Path home pages need **Pre-reading Questions, Anecdotes, Reflection Questions**.
5. Set `status: review` when it's ready for your Path Lead / Editor-in-Chief to check,
   and `status: final` once signed off.
6. Declare AI use honestly in the `ai_use` field — required by the brief, and overusing
   AI is penalised.
7. If you quote a seminar leader, get their written consent first and note that you have
   it in the Anecdotes section.

## Git workflow

- Create a branch per section, e.g. `content/founder-topic-2`.
- Open a PR into `main` when you set `status: review`. Use the PR template checklist.
- Your Path Lead reviews for content; Patrick (Editor-in-Chief) signs off on flow and
  overlap across the 16 sections before merge.
- Don't edit someone else's folder without asking them first.

## Topic ownership (fill in once picked)

| Path | Path Lead | Topic 1 | Topic 2 | Topic 3 | Topic 4 |
| --- | --- | --- | --- | --- | --- |
| Founder | Ciarán | | | | |
| Startup | Óran | | | | |
| MNC | Peter K. | | | | |
| Not-for-Profit | Hugh F. | | | | Economics and Sustainable Software |
