import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CopyToClipboardButton as Component } from './CopyToClipboardButton';

export default {
	title: 'Components/Organisms',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const CopyToClipboardButton = Template.bind({});

CopyToClipboardButton.args = {
	defaultButtonText: 'Copy Link',
	activeButtonText: 'Link copied',
};
