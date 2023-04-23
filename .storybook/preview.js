import 'tailwindcss/tailwind.css';
import '../src/styles/main.css';

import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		hideNoControlsWarning: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
		expanded: true,
	},
	backgrounds: {
		default: 'background',
		values: [
			{
				name: 'surface',
				value: '#dfdfdf',
			},
			{
				name: 'background',
				value: '#EEEEEE', // to display white components
			},
		],
		grid: {
			disable: true,
		},
	},
};
