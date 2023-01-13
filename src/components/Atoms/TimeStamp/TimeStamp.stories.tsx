import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TimeStamp as Component } from './TimeStamp';

export default {
	title: 'Components/Atoms/TimeStamp',
	component: Component,
	argTypes: {
		date: { control: 'date' },
		prefix: { control: 'text' },
		postfix: { control: 'text' },
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Timestamp = Template.bind({});
Timestamp.args = {
	date: '2023-01-17T16:15:00Z',
};

export const TimestampPrefix = Template.bind({});
TimestampPrefix.args = {
	date: '2022-10-25T16:00:00Z',
	prefix: 'Start des CAS vor',
};

export const TimestampPostfix = Template.bind({});
TimestampPostfix.args = {
	date: '2023-01-24T22:59:59Z',
	postfix: 'bis zur Abgabe',
};
