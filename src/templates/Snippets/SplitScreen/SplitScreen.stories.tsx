import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SplitScreen as Component } from './SplitScreen';

export default {
	title: 'Examples/Snippets',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const SplitScreen = Template.bind({});

SplitScreen.args = {
	children: `SplitScreen Content`,
};
