import React from 'react';
import { Headline } from './Headline';

export default {
	title: 'Example/Atoms/Headline',
	component: Headline,
	argTypes: {},
};

const Template = (args): JSX.Element => <Headline {...args} />;

const Buttons = ['1', '2', '3', '4'].reduce((acc, level) => {
	const HeadlineTemplate = Template.bind({});
	HeadlineTemplate.args = {
		level,
		children: `Headline ${level}`,
	};
	acc[level] = HeadlineTemplate;
	return acc;
}, {});

export const H1 = Buttons['1'];
export const H2 = Buttons['2'];
export const H3 = Buttons['3'];
export const H4 = Buttons['4'];
