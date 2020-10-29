module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "typescript-sort-keys",
    "sort-class-members",
    "lit-a11y",
    "import",
    "jsdoc",
    "html",
  ],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsdoc/recommended",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"],
      },
    },
  },
  rules: {
    "sort-class-members/sort-class-members": [
      "warn",
      {
        accessorPairPositioning: "getThenSet",
        stopAfterFirstProblem: true,
        order: [
          "[static-properties]",
          "[static-methods]",
          "[properties]",
          "[conventional-private-properties]",
          "constructor",
          "[methods]",
          "[conventional-private-methods]",
        ],
      },
    ],
    "lines-between-class-members": "warn",
    "import/no-unresolved": "off",
    "import/named": "off",
    "sort-imports": "warn",
    "sort-keys": "warn",
    "sort-vars": "warn",
  },
};
