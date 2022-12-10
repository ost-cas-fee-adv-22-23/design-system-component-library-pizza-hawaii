const defaultTheme = require('tailwindcss/defaultTheme');

const baseFontSize = 16;

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				'xxs': `${4 / baseFontSize}rem`, // 0.25rem
				'xs': `${8 / baseFontSize}rem`,
				's': `${16 / baseFontSize}rem`, // 1rem
				'm': `${24 / baseFontSize}rem`,
				'l': `${32 / baseFontSize}rem`,
				'xl': `${48 / baseFontSize}rem`,
				'xxl': `${64 / baseFontSize}rem`,
			}
		},
	},
	plugins: [],
};
