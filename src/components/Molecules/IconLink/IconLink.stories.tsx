import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { IconLink as Component, IconLinkSizeMap, IconLinkColorMap } from './IconLink';

export default {
	title: 'Components/Molecules/IconLink',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
		size: {
			control: { type: 'radio' },
			options: Object.keys(IconLinkSizeMap),
		},
		colorScheme: {
			control: { type: 'radio' },
			options: Object.keys(IconLinkColorMap),
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const IconLink = Template.bind({});
IconLink.args = {};
