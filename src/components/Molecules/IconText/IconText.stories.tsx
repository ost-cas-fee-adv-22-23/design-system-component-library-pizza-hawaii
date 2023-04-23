import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { IconText as Component, IconTextSizeMap, IconTextColorMap } from './IconText';

export default {
	title: 'Components/Molecules/IconText',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
		size: {
			control: { type: 'radio' },
			options: Object.keys(IconTextSizeMap),
		},
		colorScheme: {
			control: { type: 'radio' },
			options: Object.keys(IconTextColorMap),
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const IconText = Template.bind({});
IconText.args = {};
