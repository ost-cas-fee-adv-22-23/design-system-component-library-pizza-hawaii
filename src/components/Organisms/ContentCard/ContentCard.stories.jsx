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
	text: 'Hi I am the Detail template - Big and Bold. - Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut.',
	variant: 'detailpage',
	author: 'Jon Doe',
};

export const Timeline = Template.bind();
Timeline.args = {
	text: 'Medium - rare, mostly we well use that one. Quia aut et aut. Sunt et eligendi similique enim qui quo minus. error magni.',
	variant: 'timeline',
	author: 'Jon Doe',
};

export const Responsive = Template.bind();
Responsive.args = {
	text: 'Responsive - all mobiles see me that way. Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni.',
	variant: 'responsive',
	author: 'Jon Doe',
};
