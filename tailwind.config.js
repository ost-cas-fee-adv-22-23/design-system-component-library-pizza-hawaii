const ProjectSettings = {
	baseFontSize: 16,
	fontSizes: {
		l: 18,
		lg: 20,
		xl: 24,
		'2xl': 32,
		'3xl': 40,
		'4xl': 48,
	},
	spaces: {
		xxs: 4,
		xs: 8,
		s: 16,
		m: 24,
		l: 32,
		xl: 48,
		xxl: 64,
	},
	content: {
		width: 680,
		padding: 48,
	},
};

const toRem = (px) => `${px / ProjectSettings.baseFontSize}rem`;

const fontSizes = Object.keys(ProjectSettings.fontSizes).reduce((acc, size) => {
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
	content: ['./src/**/*.{js,jsx,ts,tsx,json}'],

	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},

		screens: {
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },
		},
		extend: {
			colors: {
				'error-red': '#FF0000',
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
			backgroundImage: {
				'select-background':
					"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='4 4 16 16' width='30'%3E%3Cpath d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' fill='%23475569'/%3E%3C/svg%3E\")",
			},
			backgroundSize: {
				'size-200': '200% 200%',
				'size-300': '300% 300%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			borderWidth: {
				6: '6px',
			},
			leading: {
				normal: '1.4',
			},
		},
	},
	plugins: [
		function ({ addVariant, e }) {
			addVariant('containing-svg', '& svg');
			addVariant('containing-svg-path', '& svg path');
			addVariant('containing-svg-path-1', '& svg path:nth-child(1)');
			addVariant('containing-svg-path-2', '& svg path:nth-child(2)');
		},
	],
};
