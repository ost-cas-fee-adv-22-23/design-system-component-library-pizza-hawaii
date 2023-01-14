import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Colors as Component } from './Colors';

export default {
	title: 'Components/Atoms/Colors',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Pink = Template.bind({});
export const Violet = Template.bind({});
export const Slate = Template.bind({});

Pink.args = {
	paletteName: 'pink',
};

Violet.args = {
	paletteName: 'violet',
};

Slate.args = {
	paletteName: 'slate',
};
