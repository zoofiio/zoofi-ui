import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      screens: {
        ssm: '450px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        s0: 'linear-gradient(90deg, #C2B7FD 0%, #423C5E 100%)',
        s1: 'radial-gradient(97.67% 126.32% at 50% 0%, #010214 25.78%, #7A61BC 99.83%)',
        s2: 'linear-gradient(90deg, #C2B7FD 0%, #9580F7 100%)',
        
        btndark: 'radial-gradient(76.25% 76.25% at 50.3% 23.75%, #204C33 0%, #3E5232 100%),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)',
        btn: 'radial-gradient(76.25% 76.25% at 50.3% 23.75%, #D1F5DE 0%, #F0FADD 100%),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)',
        btndis: 'linear-gradient(180deg, rgba(159, 179, 159, 0.2) 0%, rgba(190, 255, 186, 0.2) 100%)'

        
      },
      colors: {
        // light mode
        primary: { 
          DEFAULT: '#1ECA53',
        },
        border: {
          DEFAULT: '#4A5546',
        },
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: '#1ECA53',
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // dark mode
        'dark-tremor': {
          brand: {
            faint: '#0B1229',
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: '#1ECA53',
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: '#131A2B',
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[800],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@headlessui/tailwindcss')],
}
