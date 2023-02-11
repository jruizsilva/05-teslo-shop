const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background100: colors.neutral[100],
        border400: colors.neutral[400],
        foreground300: colors.neutral[300],
        text500: colors.neutral[500],
        text600: colors.neutral[600],
        text800: colors.neutral[800],
        text900: colors.neutral[900],
        primary: {
          background700: colors.indigo[700],
          border300: colors.indigo[300],
          ring: colors.indigo[500],
          foreground100: colors.indigo[100],
          foreground900: colors.indigo[900],
          text100: colors.indigo[100],
          text800: colors.indigo[800]
        },
        error: {
          background100: colors.red[100],
          border300: colors.red[300],
          text500: colors.red[500],
          text700: colors.red[700]
        },
        warning: {
          background100: colors.yellow[100],
          border300: colors.yellow[300],
          text500: colors.yellow[500],
          text700: colors.yellow[700]
        },
        success: {
          background100: colors.green[100],
          border300: colors.green[300],
          text500: colors.green[500],
          text700: colors.green[700]
        }
      },
      fontFamily: {
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      }
    },
    plugins: []
  }
}
