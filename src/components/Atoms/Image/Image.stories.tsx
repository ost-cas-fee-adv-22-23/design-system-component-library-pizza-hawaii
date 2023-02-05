import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Image as Component } from './Image';

export default {
	title: 'Components/Atoms/Image',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const Image = Template.bind({});
Image.args = {
	src: '//picsum.photos/id/28/1600/1587/',
	alt: 'forest view',
	width: 640,
};
