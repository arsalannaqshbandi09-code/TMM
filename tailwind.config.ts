import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // TMM Brand Colors - Premium dark theme with emerald accent
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // Surface colors for glass morphism
        surface: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Dark backgrounds
        background: {
          primary: '#050505',
          secondary: '#0a0a0a',
          tertiary: '#111111',
          card: '#0f0f0f',
          elevated: '#1a1a1a',
        },
        // Text colors
        text: {
          primary: '#ffffff',
          secondary: '#a3a3a3',
          tertiary: '#737373',
          muted: '#525252',
          inverse: '#050505',
          accent: '#14b8a6',
        },
        // Border colors
        border: {
          primary: '#262626',
          secondary: '#404040',
          accent: '#14b8a6',
          subtle: '#1a1a1a',
        },
      },
      fontFamily: {
        // Editorial display font - strong, distinctive
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        // Clean, modern sans for UI
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        // Monospace for technical elements
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        // Fluid typography scale
        'display-xl': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-xl': ['clamp(1.75rem, 2.5vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-lg': ['clamp(1.5rem, 2vw, 1.875rem)', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-md': ['clamp(1.25rem, 1.5vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['clamp(1.125rem, 1.25vw, 1.25rem)', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['clamp(1.125rem, 1.25vw, 1.25rem)', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['clamp(1rem, 1vw, 1.125rem)', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['clamp(0.875rem, 0.9vw, 1rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['clamp(0.75rem, 0.8vw, 0.875rem)', { lineHeight: '1.5', fontWeight: '500' }],
        'overline': ['clamp(0.625rem, 0.7vw, 0.75rem)', { lineHeight: '1.5', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase' }],
      },
      spacing: {
        'space-3xs': '0.125rem',
        'space-2xs': '0.25rem',
        'space-xs': '0.5rem',
        'space-sm': '0.75rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2rem',
        'space-2xl': '3rem',
        'space-3xl': '4rem',
        'space-4xl': '6rem',
        'space-5xl': '8rem',
        'space-6xl': '12rem',
      },
      borderRadius: {
        'radius-xs': '0.25rem',
        'radius-sm': '0.375rem',
        'radius-md': '0.5rem',
        'radius-lg': '0.75rem',
        'radius-xl': '1rem',
        'radius-2xl': '1.5rem',
        'radius-3xl': '2rem',
        'radius-full': '9999px',
      },
      boxShadow: {
        'shadow-xs': '0 1px 2px 0 rgb(0 0 0 / 0.3)',
        'shadow-sm': '0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)',
        'shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
        'shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
        'shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
        'shadow-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.5)',
        'shadow-inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.4)',
        'shadow-glow': '0 0 40px -10px rgb(20 184 166 / 0.3)',
        'shadow-glow-lg': '0 0 80px -20px rgb(20 184 166 / 0.2)',
        'shadow-card': '0 4px 24px -4px rgb(0 0 0 / 0.5), 0 0 0 1px rgb(255 255 255 / 0.03)',
        'shadow-card-hover': '0 12px 48px -8px rgb(0 0 0 / 0.6), 0 0 0 1px rgb(20 184 166 / 0.15)',
      },
      backdropBlur: {
        'blur-xs': '2px',
        'blur-sm': '4px',
        'blur-md': '8px',
        'blur-lg': '16px',
        'blur-xl': '24px',
        'blur-2xl': '40px',
      },
      transitionDuration: {
        'duration-instant': '50ms',
        'duration-fast': '150ms',
        'duration-normal': '250ms',
        'duration-slow': '350ms',
        'duration-slower': '500ms',
        'duration-slowest': '700ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-out': 'fadeOut 0.3s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'scale-out': 'scaleOut 0.3s ease-in forwards',
        'rotate-in': 'rotateIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-5deg) scale(0.95)' },
          '100%': { opacity: '1', transform: 'rotate(0) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgb(20 184 166 / 0.3)' },
          '50%': { boxShadow: '0 0 40px -5px rgb(20 184 166 / 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(-5px)' },
          '75%': { transform: 'translateY(-15px) translateX(3px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)',
        'gradient-brand-subtle': 'linear-gradient(135deg, rgb(20 184 166 / 0.1) 0%, rgb(13 148 136 / 0.05) 100%)',
        'gradient-mesh': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgb(20 184 166 / 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 100%, rgb(13 148 136 / 0.1), transparent)',
        'gradient-card': 'linear-gradient(145deg, rgb(255 255 255 / 0.03) 0%, rgb(255 255 255 / 0.01) 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgb(255 255 255 / 0.08) 0%, rgb(255 255 255 / 0.02) 100%)',
        'gradient-noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
      },
      backgroundSize: {
        'noise': '256px 256px',
      },
      perspective: {
        'perspective-100': '100px',
        'perspective-250': '250px',
        'perspective-500': '500px',
        'perspective-1000': '1000px',
        'perspective-2000': '2000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
        'flat': 'flat',
      },
      backfaceVisibility: {
        'visible': 'visible',
        'hidden': 'hidden',
      },
    },
  },
  plugins: [],
};

export default config;