import 'tailwindcss/tailwind.css';
import '../src/styles/main.css';
import "@fontsource/poppins"

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
