import { colors, spacing, fontSizes, borderRadius } from './src/config/theme.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      spacing,
      fontSize: fontSizes,
      borderRadius,
    },
  },
  plugins: [],
}
