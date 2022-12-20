/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const ProjectSettings = require('./src/utils/ProjectSettings.json');

const toRem = (px) => `${px / ProjectSettings.baseFontSize}rem`;

let fontSizes = Object.keys(ProjectSettings.fontSizes).reduce((acc, size) => {
	acc[size] = toRem(ProjectSettings.fontSizes[size]);
	return acc;
}, {});

let spacing = Object.keys(ProjectSettings.spaces).reduce((acc, size) => {
	acc[size] = toRem(ProjectSettings.spaces[size]);
	return acc;
}, {});

spacing = {
	...spacing,
	content: toRem(ProjectSettings.content.padding),
};

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
		},

		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
			},
			lineHeight: {
				normal: '1.4',
			},
			fontSize: fontSizes,
			spacing,
			width: {
				content: toRem(ProjectSettings.content.width),
			},
			maxWidth: {
				content: toRem(ProjectSettings.content.width),
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
		},
	},
	plugins: [],
};
