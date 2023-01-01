import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImageOverlay as Component } from './ImageOverlay';

export default {
	title: 'Component/Molecules/ImageOverlay',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const EditOverlay = Template.bind({});
export const ZoomOverlay = Template.bind({});

EditOverlay.args = {
	icon: 'edit',
	overlayStyles: '',
	src: '//picsum.photos/id/28/1600/1587/',
};

// TODO: zoom icon export correctly and alignement of icon
ZoomOverlay.args = {
	icon: 'zoom',
	overlayStyles: '',
	src: '//picsum.photos/id/27/1600/2087/',
};
