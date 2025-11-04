import assert from "node:assert";
import test from "node:test";

import { ESLint } from "eslint";

import config from "@cargosense/eslint-config";

const eslint = new ESLint({
  baseConfig: config,
  overrideConfigFile: true,
});

test("default export", () => {
  assert.ok(Array.isArray(config));
});

test("loads config and validates correct syntax", async () => {
  const input = "(() => 1)();\n";
  const [{ errorCount }] = await eslint.lintText(input, {
    filePath: "index.test.js",
  });

  assert.strictEqual(errorCount, 0);
});

test("loads config and invalidates incorrect syntax", async () => {
  const input = "(() => { [].map().flat(); }) ()\n";
  const [{ errorCount, messages }] = await eslint.lintText(input, {
    filePath: "index.test.js",
  });

  const expected = [
    {
      column: 8,
      endColumn: 9,
      endLine: 1,
      fix: { range: [8, 8], text: "\n" },
      line: 1,
      message: "Statement inside of curly braces should be on next line.",
      messageId: "blockSameLine",
      nodeType: "Punctuator",
      ruleId: "@stylistic/brace-style",
      severity: 2,
    },
    {
      column: 10,
      endColumn: 26,
      endLine: 1,
      line: 1,
      message: "This line has 2 statements. Maximum allowed is 1.",
      messageId: "exceed",
      nodeType: "ExpressionStatement",
      ruleId: "@stylistic/max-statements-per-line",
      severity: 2,
    },
    {
      column: 13,
      endColumn: 25,
      endLine: 1,
      fix: { range: [12, 24], text: "flatMap()" },
      line: 1,
      message: "Use flatMap instead of .map().flat()",
      messageId: "preferFlatMap",
      nodeType: null,
      ruleId: "arrayFunc/prefer-flat-map",
      severity: 2,
    },
    {
      column: 27,
      endColumn: 28,
      endLine: 1,
      fix: { range: [26, 26], text: "\n" },
      line: 1,
      // eslint-disable-next-line @stylistic/max-len
      message: "Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.",
      messageId: "singleLineClose",
      nodeType: "Punctuator",
      ruleId: "@stylistic/brace-style",
      severity: 2,
    },
    {
      column: 29,
      endColumn: 30,
      endLine: 1,
      fix: { range: [28, 29], text: "" },
      line: 1,
      message: "Unexpected whitespace between function name and paren.",
      messageId: "unexpectedWhitespace",
      nodeType: "CallExpression",
      ruleId: "@stylistic/function-call-spacing",
      severity: 2,
    },
    {
      column: 32,
      endColumn: 1,
      endLine: 2,
      fix: { range: [31, 31], text: ";" },
      line: 1,
      message: "Missing semicolon.",
      messageId: "missingSemi",
      nodeType: "ExpressionStatement",
      ruleId: "@stylistic/semi",
      severity: 2,
    },
  ];

  assert.strictEqual(errorCount, 6);
  assert.deepStrictEqual(messages, expected);
});
