import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        elice: 'rgb(82, 79, 161)',
        filter: {
          50: '#efeff0',
          100: '#e0e0e0',
          200: '#d0d1d1',
          300: '#c1c2c2',
          400: '#b2b3b4',
          500: '#a4a4a5',
          600: '#959697',
          700: '#878889',
          800: '#797a7c',
          900: '#6b6c6e',
          950: '#5e5f61',
        },
      },
      width: {
        '1280': '1280px',
      },
      maxWidth: {
        container: '1280px',
      },
      backgroundColor: {
        body: 'rgb(240, 241, 243);',
        search: 'rgb(255, 255, 255)',
        filter_header: 'rgb(249, 250, 252)',
      },
      borderColor: {
        elice: 'rgb(82, 79, 161)',
        search: 'rgb(201, 202, 204)',
        filter: 'rgb(225, 226, 228)',
      },
    },
  },
  plugins: [],
};
export default config;
