/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Note that these breakpoints are primarily optimized for the input toolbar
    screens: {
      "2xs": "170px", // Smallest width for Primary Sidebar in VS Code
      xs: "250px", // Avg default sidebar width in VS Code
      sm: "330px",
      md: "460px",
      lg: "590px",
      xl: "720px",
      "2xl": "860px",
      "3xl": "1000px",
      "4xl": "1180px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      colors: {
        lightgray: "#999998",
        "vsc-background": "var(--vsc-background)", //  "rgb(var(--vsc-background) / <alpha-value>)",
        "vsc-input-background": "var(--vscode-input-background, rgb(45 45 45))",
        "vsc-background": "var(--vscode-sideBar-background, rgb(30 30 30))",
        "vsc-foreground": "var(--vscode-editor-foreground, #fff)",
        "vsc-editor-background":
          "var(--vscode-editor-background, var(--vscode-sideBar-background, rgb(30 30 30)))",
        "vsc-input-border": "var(--vscode-input-border, #999998)",
        "vsc-foreground-muted": "var(--vscode-foreground-muted, #999)",

        // I've moved a few over to the non-vsc-specific approach
        // TODO move the rest
        "find-match-selected":
          "var(--vscode-editor-findMatchHighlightBackground, rgba(255, 223, 0))",
        "list-active": "var(--vscode-list-activeSelectionBackground, #1bbe84)",
        "list-active-foreground":
          "var(--vscode-quickInputList-focusForeground, var(--vscode-editor-foreground))",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
