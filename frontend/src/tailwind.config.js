// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      keyframes: {
        // Existing Keyframe for content slide
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        // New Keyframe for image fade-in
        fadeIn: {
          '0%': { opacity: '0.7' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        // Existing animation for content slide
        slideInLeft: 'slideInLeft 0.7s ease-out forwards',
        // New animation for image fade-in
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  // ...
}