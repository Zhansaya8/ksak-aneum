/** @type {import('tailwindcss').Config} */
// Colour palette sampled directly from the "An음" event ticket artwork.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7efdc',   // ticket paper / stub background
        sand: '#e8cc9e',    // warm crayon-yellow wash
        tomato: '#cf473b',  // big red "AN음" letters & venue text
        ember: '#e0613f',   // orange leaf strokes
        teal: '#69b3af',    // "KSAK" / "NO" wordmark teal
        lagoon: '#3f8f93',  // deeper teal leaf
        sage: '#718c83',    // muted green-grey
        plum: '#9d4a5a',    // magenta-brown leaf
        ink: '#3d3a36',     // dark charcoal text
      },
      fontFamily: {
        display: ['Righteous', 'Montserrat', 'sans-serif'],
        hangul: ['"Black Han Sans"', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
