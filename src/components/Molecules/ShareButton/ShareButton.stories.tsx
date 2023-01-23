import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShareButton as Component } from './ShareButton';

export default {
	title: 'Components/Molecules',
	component: Component,
	argTypes: {
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const ShareButton = Template.bind({});

ShareButton.args = {
	defaultButtonText: 'Copy Link',
	activeButtonText: 'Link copied',
};
