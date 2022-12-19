import React from 'react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { NaviButton as Component } from './NaviButton';

export default {
	title: 'Example/Molecules/NaviButton',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
};

export const NaviButton = (args) => <Component {...args} />;
NaviButton.args = {
	children: 'NaviButton',
};
