module.exports = {
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      corePlugins: {
            aspectRatio: false,
      },
      theme: {
            screens: {
                  xs: '560px',
                  sm: '640px',
                  md: '768px',
                  lg: '976px',
                  xl: '1440px',
                  '2xl': '1800px',
            },
            container: {
                  center: true,
            },
            extend: {
                  colors: {
                        fond: '#18163c',
                        fond2: '#1e1c44',
                        fondnoir: '#050811',
                        rose: '#ee4b98',
                        blanc10: 'rgba(255,255,255, .1)',
                        noir10: 'rgba(0,0,0, .1)',
                  },
                  spacing: {},
            },
      },
      plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
