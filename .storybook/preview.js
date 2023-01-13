import 'tailwindcss/tailwind.css';
import '../src/styles/main.css';
import "@fontsource/poppins"

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
