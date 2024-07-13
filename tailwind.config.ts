import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",

  theme: {
    fontSize:{
      xs:['10px', '12px'],
      sm:['12px', '16px'],
      base:['14px', '18px'],
      lg:['16px', '20px'],
      xl:['18px', '24px'],
      '2xl':['20px', '24px'],
      '3xl':['24px', '28px'],
      '4xl':['32px', '36px'],
      '5xl':['36px', '40px'],

      '6xl':['48px',{
        lineHeight: '50px',
        letterSpacing: '-.5px',
      }],
      '7xl':['56px',{
        lineHeight: '58px',
        letterSpacing: '-.5px',
      }],
      '8xl':['64px',{
        lineHeight: '66px',
        letterSpacing: '-1px',
      }],
      '9xl':['72px',{
        lineHeight: '72px',
        letterSpacing: '-1px',
      }],
    },

    letterSpacing: {
      tightest: '-3px',
      tighter: '-2px',
      tight: '-1px',
      normal: '0px',
      wide: '1px',
      wider: '2px',
      widest: '3px',
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      fontFamily: {
        mono: ['IBMPlexMono'],
        sans: ['Roobert', 'system-ui', 'sans-serif'],
        display: ['Roobert', 'system-ui', 'sans-serif'],
      },

      maxWidth: {
        '2xl': '640px',
      },

      fontWeight:{
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      colors:{
        transparent: 'transparent',
        'primary': '#635BFF',
        'secondary': '#ffc107',
        'black': '#222222',
        'grey': '#666666',
        'white': '#ffffff',
        'background': '#eceff1',
        'lightgrey': '#f2f2f2',
        'success': '#4caf50',
        'error': '#f44336',
        'warning': '#ffc107',
        'info': '#2196f3',
        'accent1': '#9c27b0',
        'accent2': '#e91e63',
        'accent3': '#03a9f4',
        'accent4': '#ff9800',
        'border': '#cccccc',
        'divider': 'rgb(0,0,0,.1)',
        'hint': '#888888',
        'disable': '#eeeeee',
        'primary50': '#ecf0ff',
        'primary100': '#dde3ff',
        'primary200': '#c2cbff',
        'primary300': '#9ca7ff',
        'primary400': '#7578ff',
      },

      screens: {
        sm: '480px',
        md: '768px',
        lg: '960px',
        xl: '1280px',
      }

      
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config