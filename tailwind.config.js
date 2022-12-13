const defaultTheme = require('tailwindcss/defaultTheme');
const ProjectSettings = require("./src/utils/ProjectSettings.json");

const toRem = (px) => `${px / ProjectSettings.baseFontSize}rem`;

let spacing = Object.keys(ProjectSettings.spaces).reduce((acc, spacing) => {
	acc[spacing] = toRem(ProjectSettings.spaces[spacing]);
	return acc;
}, {});

spacing = {
	...spacing,
	content: toRem(ProjectSettings.content.padding),
};


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
			spacing,
			width: {
				content: toRem(ProjectSettings.content.width),
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
