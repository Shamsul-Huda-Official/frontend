export default {
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%' },
          '25%':       { borderRadius: '50% 50% 40% 60% / 60% 40% 60% 40%' },
          '50%':       { borderRadius: '40% 60% 60% 40% / 45% 55% 45% 55%' },
          '75%':       { borderRadius: '55% 45% 50% 50% / 40% 60% 50% 60%' },
        },
      },
    },
  },
}