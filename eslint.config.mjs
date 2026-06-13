import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import { FlatCompat } from "@eslint/eslintrc";
import reactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";

const compat = new FlatCompat();

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.storybook/**",
      "**/*.config.{js,ts,mjs,cjs}",
      "vite.config.*",
      "vitest.config.*",
      "!**/.storybook/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      "unused-imports": unusedImports,
      "no-relative-import-paths": noRelativeImportPaths,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  ...tseslint.configs.recommended,

  ...compat.config(pluginReact.configs.recommended),
  pluginReact.configs.flat.recommended,

  ...compat.config(reactHooks.configs["recommended-latest"]),

  ...compat.config(eslintConfigPrettier),

  {
    files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
    rules: {
      "max-len": "off",
    },
  },

  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      quotes: ["error", "double", { avoidEscape: true }],
      "react/display-name": "off",
      "no-duplicate-imports": "error",
      "@ts-ignore": "off",
      "@typescript-eslint/no-namespace": "off",
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "none",
          vars: "all",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "no-underscore-dangle": "off",
      "unused-imports/no-unused-imports": "error",
      "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
      "react/no-unstable-nested-components": "warn",
      "import/no-relative-parent-imports": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        {
          allowedDepth: 3,
          allowSameFolder: true,
        },
      ],
      "max-len": [
        "error",
        {
          ignoreComments: true,
          code: 125,
        },
      ],
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "no-param-reassign": "off",
      "no-undef": "off",
      "react/no-array-index-key": "off",
      "arrow-body-style": "off",
    },
  },
];