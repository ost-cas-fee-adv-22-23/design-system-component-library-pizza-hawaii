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

const Template = (args): JSX.Element => <Navi {...args} />;

export const Navi = Template.bind({});

Navi.args = {
	children: (
		<>
			<NaviButton as="a" href="/" icon="settings">
				Settings
			</NaviButton>
			<NaviButton as="a" href="/" icon="settings">
				Settings
			</NaviButton>
			<NaviButton as="a" href="/" icon="settings">
				Settings
			</NaviButton>
		</>
	),
};
