const defaultTheme = require('tailwindcss/defaultTheme');

const baseFontSize = 16;

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", ...defaultTheme.fontFamily.sans],
		},

		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
			},
			spacing: {
				xxs: `${4 / baseFontSize}rem`, // 0.25rem
				xs: `${8 / baseFontSize}rem`,
				s: `${16 / baseFontSize}rem`, // 1rem
				m: `${24 / baseFontSize}rem`,
				l: `${32 / baseFontSize}rem`,
				xl: `${48 / baseFontSize}rem`,
				xxl: `${64 / baseFontSize}rem`,
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			}
		},
	},
	plugins: [],
};
