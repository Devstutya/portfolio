/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: '#121212', // Example dark mode background color
        light: '#ffffff', // Example light mode background color
        customDarkNavBg: '#1a1a1a', // Custom dark mode navbar background color
      },
      // Extend spacing for padding and margin
      spacing: {
        'navbar-height': '80px', // Adjust based on your navbar height
      },
      zIndex: {
        'navbar': '1000', // Ensure navbar stays on top
      },
      // Add custom utilities
      transform: {
        'zoomed-right': 'scale(1.2) translateX(10px)',
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  variants: {
    extend: {},
  },
  plugins: [],
};
