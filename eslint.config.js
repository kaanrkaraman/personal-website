import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist", ".yarn", ".pnp.*"] },

	{
		files: ["**/*.{js,ts,jsx,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "module",
			globals: globals.browser,
		},
		plugins: {
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"react/react-in-jsx-scope": "off",
		},
	},

	{
		files: ["**/*.{ts,tsx}"],
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: process.cwd(),
			},
		},
		rules: {
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		},
	},
);
