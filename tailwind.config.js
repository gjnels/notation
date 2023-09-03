import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        danger: colors.rose
      }
    }
  },
  plugins: []
}
