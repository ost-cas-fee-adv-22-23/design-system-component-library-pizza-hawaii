import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { IconLink as Component, IconLinkSizeMap, IconStateMap, LinkStateMap } from './IconLink';

export default {
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
		iconState: {
			options: Object.keys(IconStateMap),
			control: { type: 'select' },
		},
		linkState: {
			options: Object.keys(LinkStateMap),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const IconLink = Template.bind({});
IconLink.args = {};
