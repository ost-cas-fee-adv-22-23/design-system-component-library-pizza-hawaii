import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TimeStamp as Component } from './TimeStamp';

export default {
	title: 'Component/Molecules/TimeStamp',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const TimeStamp = Template.bind({});
TimeStamp.args = {
	time: '2021-12-26T08:50:23Z',
};
