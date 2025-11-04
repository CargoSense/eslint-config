import { resolve } from "node:path";

import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";

import arrayFunc from "eslint-plugin-array-func";
import js from "@eslint/js";
import sortClassMembers from "eslint-plugin-sort-class-members";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  includeIgnoreFile(resolve(".gitignore")),

  {
    extends: [
      "js/recommended",
      "stylistic/recommended",
      "arrayFunc/all",
      "sortClassMembers/flat/recommended",
    ],

    plugins: {
      arrayFunc,
      js,
      sortClassMembers,
      stylistic,
    },

    rules: {
      /**
       * Enforce consistent line breaks between array elements.
       *
       * @see {@link https://eslint.style/rules/default/array-element-newline}
       */
      "@stylistic/array-element-newline": ["error", "consistent"],

      /**
       * Enforce consistent brace style for blocks.
       *
       * @see {@link https://eslint.style/rules/default/brace-style}
       */
      "@stylistic/brace-style": ["error", "1tbs"],

      /**
       * Enforce consistent usage of line breaks between arguments of a function
       * call.
       *
       * @see {@link https://eslint.style/rules/js/function-call-argument-newline}
       */
      "@stylistic/function-call-argument-newline": ["error", "consistent"],

      /**
       * Disallow spaces between the function name and the opening parenthesis
       * that calls it.
       *
       * @see {@link https://eslint.style/rules/default/function-call-spacing}
       */
      "@stylistic/function-call-spacing": "error",

      /**
       * Enforce a consistent location for an arrow function containing an
       * implicit return.
       *
       * @see {@link https://eslint.style/rules/default/implicit-arrow-linebreak}
       */
      "@stylistic/implicit-arrow-linebreak": "error",

      /**
       * Enforce a maximum line length to increase code readability and
       * maintainability.
       *
       * @see {@link https://eslint.style/rules/default/max-len}
       */
      "@stylistic/max-len": ["warn", {
        code: 120,
        comments: 80,
        ignoreUrls: true,
      }],

      /**
       * Warns against using the arrow function syntax in places where it could
       * be confused with a comparison operator.
       *
       * @see {@link https://eslint.style/rules/default/no-confusing-arrow}
       */
      "@stylistic/no-confusing-arrow": "warn",

      /**
       * Disallow unnecessary semicolons.
       *
       * @see {@link https://eslint.style/rules/default/no-extra-semi}
       */
      "@stylistic/no-extra-semi": "error",

      /**
       * Enforce the consistent use of quotes.
       *
       * @see {@link https://eslint.style/rules/default/quotes}
       */
      "@stylistic/quotes": ["error", "double", {
        allowTemplateLiterals: "avoidEscape",
        avoidEscape: true,
      }],

      /**
       * Enforce consistent use of semicolons.
       *
       * @see {@link https://eslint.style/rules/default/semi}
       */
      "@stylistic/semi": ["error", "always"],

      /**
       * Control spacing around colons of `case` and `default` clauses in switch
       * statements.
       *
       * @see {@link https://eslint.style/rules/default/switch-colon-spacing}
       */
      "@stylistic/switch-colon-spacing": "error",

      /**
       * Enforce sorted import declarations within modules.
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-imports}
       */
      "sort-imports": ["error", {
        allowSeparatedGroups: true,
        ignoreCase: true,
      }],

      /**
       * Require object keys to be sorted.
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys}
       */
      "sort-keys": ["error", "asc", {
        allowLineSeparatedGroups: true,
        caseSensitive: false,
        natural: true,
      }],
    },
  },
]);
