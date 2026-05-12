/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F2EC',
        air: '#F5F2EC',
        bone: '#EDE8DF',
        navy: {
          DEFAULT: '#3F4348',
          /** Primary body copy — readable on desktop */
          soft: '#4B4B4B',
          /** Small caps labels (Time, Location, …) */
          label: '#5B5B5B',
          muted: '#6F6A64',
        },
        ocean: {
          DEFAULT: '#1E2D78',
          deep: '#161f5c',
          /** Slightly more saturated blue — e.g. Dress code vs yellow headline */
          vivid: '#152A9A',
        },
        sky: {
          bright: '#93B2F8',
          wash: '#F0EDE6',
        },
        sage: '#A8B8A3',
        butter: '#E8DFD0',
        charcoal: '#4A4A4A',
        citrus: {
          DEFAULT: '#B78A28',
          deep: '#9a7520',
        },
        cream: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Caveat"', 'cursive'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
        label: '0.2em',
      },
      opacity: {
        4: '0.04',
        6: '0.06',
        8: '0.08',
        12: '0.12',
        15: '0.15',
        18: '0.18',
        22: '0.22',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
        88: '0.88',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        prose: '38rem',
        /** Schedule / editorial reading column */
        reading: '32rem',
        content: '54rem',
        wide: '64rem',
      },
      borderRadius: {
        soft: '1.25rem',
      },
      boxShadow: {
        /** Editorial cards — barely there */
        card:
          '0 2px 28px -14px rgba(30, 45, 120, 0.045), 0 1px 6px -4px rgba(30, 45, 120, 0.03)',
        gentle:
          '0 12px 28px -20px rgba(30, 45, 120, 0.06)',
        photo:
          '0 20px 44px -28px rgba(30, 45, 120, 0.06), 0 8px 20px -14px rgba(147, 178, 248, 0.08)',
        postcard:
          '0 8px 22px -16px rgba(30, 45, 120, 0.05), 0 2px 8px -6px rgba(30, 45, 120, 0.04)',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-up-delay': 'fadeUp 1.05s ease-out 0.18s both',
        'fade-up-slow': 'fadeUp 1.05s ease-out 0.42s both',
        float: 'float 14s ease-in-out infinite',
        'float-slow': 'float 18s ease-in-out infinite',
        'rsvp-note-in': 'rsvpNoteIn 0.45s ease-out both',
        'rsvp-photo-in': 'rsvpPhotoIn 1.15s ease-out 0.2s both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(1.25rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'rotate(-0.4deg) translateY(0)' },
          '50%': { transform: 'rotate(0.5deg) translateY(-3px)' },
        },
        rsvpNoteIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rsvpPhotoIn: {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(12px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
