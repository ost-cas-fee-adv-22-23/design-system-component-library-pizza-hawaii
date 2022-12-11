const defaultTheme = require('tailwindcss/defaultTheme');

const baseFontSize = 16;

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", ...defaultTheme.fontFamily.sans],
		},
		fontSize: {
			xs: "0.875rem",
			sm: "1rem",
			base: "1.125rem",
			lg: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "2rem",
			"4xl": "2.5rem",
			"5xl": "3rem",
		},
		fontWeight: {
			medium: "500",
			semibold: "600",
			bold: "700",
		},
		lineHeight: {
			none: "1",
			tight: "1.25",
			snug: "1.4",
			normal: "1.45",
			relaxed: "1.625",
			loose: "2",
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
		},
	},
	plugins: [],
};
