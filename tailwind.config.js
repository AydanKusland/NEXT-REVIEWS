/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.jsx', './components/**/*.jsx'],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ['var(--font-orbitron)', 'sans-serif'],
				sans: ['var(--font-exo_2)', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
