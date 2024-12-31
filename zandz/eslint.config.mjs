import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the FlatCompat utility
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Build the ESLint config following the flat config format
const eslintConfig = [
  compat.extends("next/core-web-vitals"),  // Include Next.js core web vitals
  {
    // Specify parser options directly in this configuration
    parserOptions: {
      ecmaVersion: "latest",  // ECMAScript version
      sourceType: "module",   // Using ES modules
    },
    rules: {
      // Add custom rules here (if any)
    },
  },
];

export default eslintConfig;
