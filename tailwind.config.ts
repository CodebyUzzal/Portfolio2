import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: 'class',
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx,mdx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
      ringColor: {
        DEFAULT: 'hsl(var(--ring))',
      },
    },
  },
  plugins: [animate],
};

export default config;
