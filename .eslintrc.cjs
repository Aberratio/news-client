module.exports = {
  env: { browser: true, es2020: true },
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,

  // ignorePatterns: [
  //   "dist",
  //   ".eslintrc",
  //   "**/*.js",
  //   "**/*.json",
  //   "node_modules",
  //   "public",
  //   "build",
  // ],
  rules: {
    // "prettier/prettier": "error",
    // "sort-keys": [
    //   "error",
    //   "asc",
    //   { caseSensitive: true, natural: false, minKeys: 2 },
    // ],
    // "sort-imports": [
    //   "error",
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ["single", "all", "multiple", "none"],
    //     allowSeparatedGroups: true,
    //   },
    // ],
    // "sort-vars": ["error"],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/require-default-props": "off",
  },
};

