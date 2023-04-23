import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImageOverlay as Component } from './ImageOverlay';
import { IconNames } from '../../Atoms/Icon/IconLib';

export default {
	title: 'Components/Molecules/ImageOverlay',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
			description:
				'you can specify an icon for the overlay here. all icons are defined within the <icon /> component.',
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const EditOverlay = Template.bind({});
export const ZoomOverlay = Template.bind({});

const img = <img width={584} height={320} src="//picsum.photos/id/28/1600/1587/" alt={''} />;

EditOverlay.args = {
	preset: 'edit',
	children: img,
};

ZoomOverlay.args = {
	preset: 'enlarge',
	children: img,
};
