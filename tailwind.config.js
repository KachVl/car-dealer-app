/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'wideScreen': '1600px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        decorationColor1: "var(--decoration-color-1)",
      },
      borderColor: {
        'custom-1': '#dbd8e3', 
      },
    },
  },
  plugins: [],
};
