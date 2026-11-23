import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      // Page/layout components are composition, not logic: they're exercised
      // by `next build`'s static generation (see the CI `build` job), not by
      // unit tests. Only lib/** holds real logic worth a coverage gate.
      exclude: [
        "app/**",
        "*.config.js",
        "*.config.ts",
        "next-env.d.ts",
        "node_modules/**",
        "test/**",
        ".next/**",
      ],
    },
  },
});
