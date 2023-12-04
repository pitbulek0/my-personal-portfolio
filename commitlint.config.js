module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [commit => commit.includes("[skip ci]")],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        // Add packages/components here:
        "main-navigation",
      ],
    ],
  },
};
