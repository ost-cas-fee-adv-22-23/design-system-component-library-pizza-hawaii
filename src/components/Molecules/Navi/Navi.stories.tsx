import React from 'react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { Navi as Component } from './Navi';
import { NaviButton } from './NaviButton';

export default {
	title: 'Example/Molecules/Navi',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
};

export const Navi = (args) => <Component {...args} />;
Navi.args = {
	children: (
		<>
			<NaviButton icon="settings">Settings</NaviButton>
			<NaviButton icon="settings">Settings</NaviButton>
			<NaviButton icon="settings">Settings</NaviButton>
		</>
	),
};
