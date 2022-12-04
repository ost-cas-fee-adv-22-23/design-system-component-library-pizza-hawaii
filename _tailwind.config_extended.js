const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			gray: colors.slate,
			pink: colors.pink,
			violet: colors.violet,
		},
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			}
		}
	},
	plugins: [],
};
