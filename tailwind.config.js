/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "moojiio-bg": "#F5F5F5",
        "custom-border": "#ECECED",
        "t-primary": "#343434",
        "t-second": "#808080",
        "checkbox-bg":"rgba(50, 123, 255, 0.02)"
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(moojiio-bg|t-primary|t-second|checkbox-bg)/,
    },
  ],
}


// #F5F5F5