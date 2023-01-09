import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { IconLink as Component, icoLinkSizeMap } from './IconLink';

export default {
	title: 'Component/Molecules/IconLink',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
		size: {
			options: Object.keys(icoLinkSizeMap),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const IconLink = Template.bind({});
IconLink.args = {};
