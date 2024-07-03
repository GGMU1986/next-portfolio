import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'welcome': ['Orbitron', 'sans-serif']
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'welcome': {
          '0%': {
            color: '#fff',
            filter: 'blur(2px) hue-rotate(360deg)',
            textShadow: '0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff, 0 0 80px #00b3ff'
          },
          '100%': {
            color: 'transparent'
          }
        }
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
        'welcome': 'welcome 3s linear infinite'
      },
      boxShadow: {
        glow: '0 0 20px theme(colors.white)',
      },
    },
  },
  plugins: [],
};
export default config;
