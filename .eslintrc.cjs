module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"],
    ],
  },
  settings: {
    semi: false,
    singleQuote: true,
    trailingComma: "all",
    arrowParens: "always",
    "svelte3/ignore-warnings": (warning) => {
      return (
        warning.code.startsWith("a11y-") ||
        warning.code === "missing-declaration" ||
        warning.code === "unused-export-let" ||
        warning.code === "unused-export-const" ||
        warning.code === "unused-export-let"
      );
    },
  },
};
