import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class'];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './containers/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const theme = {
  container: {
    center: true,
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    fontFamily: {
      inter: ['var(--font-inter)', ...fontFamily.sans],
      spaceGrotesk: ['var(--font-signikaNegative)', ...fontFamily.sans],
    },
    boxShadow: {
      navbar:
        'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)',
      'button-primary': '0px 10px 30px 0px hsla(342, 92%, 54%, 0.3);',
      'button-secondary': '0px 10px 30px 0px hsla(250, 84%, 54%, 0.3);',
      'search-global': '0 5px 12px rgba(0, 0, 0, 0.2), inset 0 0 0 0 rgba(255, 255, 255, 0.05)',
      'card-light': '0 4px 24px 0 rgba(34, 41, 47, 0.1)',
      'focus-active': '0px 0px 0px 4px hsla(250, 84%, 67%, 0.2)',
      'focus-success': '0px 0px 0px 4px hsla(170, 78%, 36%, 0.20)',
      'focus-error': '0px 0px 0px 4px hsla(342, 92%, 65%, 0.20)',
      avatar: '0 4px 10px rgba(39,83,123,0.12)',
    },
    height: {
      header: '80px',
    },
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: {
        DEFAULT: 'hsl(var(--background))',
        darker: 'hsl(var(--background-darker))',
        dark: 'hsl(var(--background-dark))',
        light: 'hsl(var(--background-light))',
        lighter: 'hsl(var(--background-lighter))',
      },
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
        darker: 'hsl(var(--primary-darker))',
        dark: 'hsl(var(--primary-dark))',
        light: 'hsl(var(--primary-light))',
        lighter: 'hsl(var(--primary-lighter))',
        lightest: 'hsl(var(--primary-lightest))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
        darker: 'hsl(var(--secondary-darker))',
        dark: 'hsl(var(--secondary-dark))',
        light: 'hsl(var(--secondary-light))',
        lighter: 'hsl(var(--secondary-lighter))',
        lightest: 'hsl(var(--secondary-lightest))',
        sub: 'hsl(var(--secondary-sub))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      contrast: {
        lower: 'hsl(var(--contrast-lower))',
        low: 'hsl(var(--contrast-low))',
        medium: 'hsl(var(--contrast-medium))',
        high: 'hsl(var(--contrast-high))',
        higher: 'hsl(var(--contrast-higher))',
      },
      warning: {
        DEFAULT: 'hsl(var(--warning))',
        darker: 'hsl(var(--warning-darker))',
        dark: 'hsl(var(--warning-dark))',
        light: 'hsl(var(--warning-light))',
        lighter: 'hsl(var(--warning-lighter))',
      },
      success: {
        DEFAULT: 'hsl(var(--success))',
        darker: 'hsl(var(--success-darker))',
        dark: 'hsl(var(--success-dark))',
        light: 'hsl(var(--success-light))',
        lighter: 'hsl(var(--success-lighter))',
      },
      error: {
        DEFAULT: 'hsl(var(--error))',
        darker: 'hsl(var(--error-darker))',
        dark: 'hsl(var(--error-dark))',
        light: 'hsl(var(--error-light))',
        lighter: 'hsl(var(--error-lighter))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
};
export const plugins = [require('tailwindcss-animate'), require('@tailwindcss/typography')];
