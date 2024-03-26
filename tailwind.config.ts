import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveline: {
          '0%': { transform: 'h-0' },
          '100%': { transform: 'h-[100%]' },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
        moveline: 'moveline 8s linear forwards',
      },
      boxShadow: {
        glow: '0 0 20px theme(colors.white)',
      },
    },
  },
  plugins: [],
};
export default config;
