import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { IconLink as Component, IconLinkSizeMap, IconLinkColorMap } from './IconLink';

export default {
	/* 👇 IconLink component.
	 * select an icon by name
	 * size options are 'S / M / L '
	 */
	title: 'Components/Molecules/IconLink',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
		size: {
			options: Object.keys(IconLinkSizeMap),
			control: { type: 'select' },
		},
		colorScheme: {
			control: { type: 'select' },
			options: Object.keys(IconLinkColorMap),
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const IconLink = Template.bind({});
IconLink.args = {};
