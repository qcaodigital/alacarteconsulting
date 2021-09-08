module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			buttercream: '#FDF3DC',
			yellow: '#FCD672',
			mandarin: '#FF4D00',
			red: '#F32735',
			cayenne: '#C1272D',
			brown: '#350D18',
		},
		fontFamily: {
			mon: ['Montserrat'],
			nun: ['Nunito Sans'],
		},
		extend: {
			backgroundImage: (theme) => ({
				'home-hero': "url('/images/home-hero.jpeg')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	important: true,
};
