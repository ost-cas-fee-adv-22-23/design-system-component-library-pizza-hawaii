import React from 'react';

import { ContentCard } from './ContentCard';

export default {
	title: 'Example/Organisms/ContentCard',
	component: ContentCard,
	argTypes: {
		text: 'Card Title',
	},
};

const Template = (args) => <ContentCard {...args} />;

export const Detailpage = Template.bind();
Detailpage.args = {
	text: 'Hi I am the Detail template - Big and Bold',
	variant: 'detailpage',
};

export const Timeline = Template.bind();
Timeline.args = {
	text: 'Medium - rare, mostly we well use that one',
	variant: 'timeline',
};

export const Responsive = Template.bind();
Responsive.args = {
	text: 'Responsive - all mobiles see me that way',
	variant: 'responsive',
};
