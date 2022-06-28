module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			buttercream: '#FDF3DC',
			yellow: '#FCD672',
			orange: '#fbaa60',
			lightmandarin: '#ff5c4d',
			mandarin: '#FF4D00',
			red: '#F32735',
			cayenne: '#C1272D',
			wine: '#5A2736',
			wine_light: '#6c3243',
			brown: '#350D18',
			white: '#f7f7f7',
			grey: '#f2f2f2',
			black: '#2f2f2f',
			lightblue: '#005bea',
			darkblue: '#0B1F65',
			skyblue: '#63DCF4',
		},
		fontFamily: {
			mon: ['Montserrat'],
			nun: ['Nunito Sans'],
		},
		extend: {
			// backgroundImage: (theme) => ({
			// 	'home-hero': "url('/images/home-hero.jpeg')",
			// }),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
	important: true,
};
