# Enterprise2

Interactive website helping future software engineers choose and prepare for one of four
paths after ISE: **Founder**, **Startup**, **MNC**, or **Not-for-Profit/Charity/Research**.

Built for the Enterprise II module project. Deadline: **Dec 13, 2026**.

## Repo structure

```
content/      <- All written sections live here. Writers: start with content/README.md.
src/          <- App source (web team).
test/         <- Tests (web team).
```

Content and app code are kept separate on purpose: writers edit Markdown in `content/`
and never need to touch the app, and the web team builds the site around whatever's in
`content/` without waiting on prose to be finalized.

- **Writing a section?** See [`content/README.md`](content/README.md).
- **Working on the site itself?** See below.

## Development

```
npm install
npm run lint        # eslint
npm run typecheck    # tsc --noEmit
npm test             # vitest
npm run test:coverage
```

CI runs the same checks (plus PR diff-coverage) on every push to `main` and every PR —
see `.github/workflows/ci.yml`.

## Team

See the project planning doc for the full team structure and rubric ownership. Web Lead:
Luca (repo setup, stack choice, code review/merge, hosting).
