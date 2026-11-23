# Enterprise2

Interactive website helping future software engineers choose and prepare for one of four
paths after ISE: **Founder**, **Startup**, **MNC**, or **Not-for-Profit/Charity/Research**.

Built for the Enterprise II module project. Deadline: **Dec 13, 2026**.

## Repo structure

```
content/      <- All written sections live here. Writers: start with content/README.md.
app/          <- Next.js App Router pages (web team).
lib/          <- Content-loading logic: reads frontmatter + markdown from content/.
test/         <- Tests (web team).
```

Content and app code are kept separate on purpose: writers edit Markdown in `content/`
and never need to touch the app. The app reads straight from `content/` at build time
(via `lib/content.ts`) and turns each path's `home.md` and each topic's `content.md` into
a page automatically — no manual wiring needed when someone adds or edits a section.

- **Writing a section?** See [`content/README.md`](content/README.md).
- **Working on the site itself?** See below.

## Development

```
npm install
npm run dev          # run the site locally at http://localhost:3000
npm run build         # production build (also run in CI)
npm run lint          # eslint
npm run typecheck     # tsc --noEmit
npm test              # vitest
npm run test:coverage
```

Routes: `/` (all paths), `/<path>` (a path's home page + topic list), `/<path>/<topic>`
(one topic). Path and topic slugs come directly from the `content/` folder names.

CI runs the same checks (plus a production build and PR diff-coverage) on every push to
`main` and every PR — see `.github/workflows/ci.yml`.

## Team

See the project planning doc for the full team structure and rubric ownership. Web Lead:
Luca (repo setup, stack choice, code review/merge, hosting).
