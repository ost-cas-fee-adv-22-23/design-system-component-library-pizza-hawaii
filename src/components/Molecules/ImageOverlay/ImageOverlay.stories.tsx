import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImageOverlay as Component } from './ImageOverlay';
import { IconNames } from '../../Atoms/Icon/IconLib';
import { Image } from '../../Atoms/Image';

export default {
	title: 'Components/Molecules/ImageOverlay',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const EditOverlay = Template.bind({});
export const ZoomOverlay = Template.bind({});

const img = <Image preset="post" src="//picsum.photos/id/28/1600/1587/" />;

EditOverlay.args = {
	preset: 'edit',
	children: img,
};

ZoomOverlay.args = {
	preset: 'enlarge',
	children: img,
};
