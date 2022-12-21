import React from 'react';

import { TimeStamp as Component } from './TimeStamp';

export default {
	title: 'Example/Molecules/TimeStamp',
	component: Component,
};

export const TimeStamp = (args): JSX.Element => <Component {...args} />;
TimeStamp.args = {
	time: '13:32',
};
// TODO: add UTC timestamp and calculate local time
