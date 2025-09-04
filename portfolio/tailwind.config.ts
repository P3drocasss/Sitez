import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b2545',
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#b3d0ff',
          300: '#86b4ff',
          400: '#5a93ff',
          500: '#366fff',
          600: '#1f4ff0',
          700: '#173ed0',
          800: '#1233a8',
          900: '#0d287f',
          950: '#0b2545'
        }
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(2, 6, 23, 0.25)'
      }
    },
  },
  plugins: [],
} satisfies Config



