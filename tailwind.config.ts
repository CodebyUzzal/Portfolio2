import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: 'class',
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx,mdx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#f7f4f7',
          100: '#ede4ea',
          200: '#dcc7d8',
          300: '#c2a2ba',
          400: '#a87d9c',
          500: '#8d587e',
          600: '#734260',
          700: '#522f4d',
          800: '#41253d',
          900: '#2d192a',
          950: '#180c16',
        },
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
