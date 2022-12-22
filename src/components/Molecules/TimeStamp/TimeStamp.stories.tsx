import React from 'react';

import { TimeStamp as Component } from './TimeStamp';

export default {
	title: 'Example/Molecules/TimeStamp',
	component: Component,
};

const Template = (args): JSX.Element => <Component {...args} />;

export const TimeStamp = Template.bind({});
TimeStamp.args = {
	time: '2021-12-26T08:50:23Z',
};
