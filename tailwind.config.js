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
        /* All these now resolve from CSS variables, so they change with data-theme */
        cyberCyan: 'var(--accent-cyan)',
        cyberPink: 'var(--accent-pink)',
        cyberDark: 'var(--bg-primary)',
        cyberCard: 'var(--bg-card)',
        cyberMuted: 'var(--text-muted)',
        cyberText: 'var(--text-primary)',
        cyberSecondary: 'var(--bg-secondary)',
        /* Keep static fallbacks for non-themed usage */
        dark: '#0a0a12',
        light: '#ffffff',
        customDarkNavBg: 'var(--navbar-bg)',
      },
      spacing: {
        'navbar-height': '80px',
      },
      zIndex: {
        'navbar': '1000',
      },
      transform: {
        'zoomed-right': 'scale(1.2) translateX(10px)',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cyber-glow': 'var(--glow)',
        'cyber-glow-strong': 'var(--glow-strong)',
      },
    },
  },
  darkMode: 'class',
  variants: {
    extend: {},
  },
  plugins: [],
};
