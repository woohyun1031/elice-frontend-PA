import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        '1280': '1280px',
      },
      maxWidth: {
        container: '1280px',
      },
      backgroundColor: {
        body: 'rgb(240, 241, 243);',
        search: 'rgb(255, 255, 255)',
      },
      borderColor: {
        elice: 'rgb(82, 79, 161)',
        search: 'rgb(201, 202, 204)',
      },
    },
  },
  plugins: [],
};
export default config;
