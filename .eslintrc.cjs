module.exports = {
  env: { browser: true, es2020: true },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["react-refresh", "@typescript-eslint", "import", "prettier"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  ignorePatterns: [
    "dist",
    ".eslintrc",
    "**/*.js",
    "**/*.json",
    "node_modules",
    "public",
    "build",
  ],
  rules: {
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/destructing-assigment": "off",
    "react/jsx-props-no-spreading": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "error",

    

    "import/order": [
      "error",
      {
        alphabetize: {
            caseInsensitive: true,
            order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        "newlines-between": "always",
      },
    ],



    "@typescript-eslint/no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
  },
  //   ,
  //   parser: @typescript-eslint/parser,
  //   root: true
};
