/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        221: "221px",
        869: "869px",
      },
      minWidth: {
        221: "221px",
      },
      colors: {
        customPink: "#E76E85",
        gray: {
          200: "#f3f4f6",
        },
        customGray: "rgba(107, 114, 128, 1)",
      },
    },
  },
  plugins: [],
};
