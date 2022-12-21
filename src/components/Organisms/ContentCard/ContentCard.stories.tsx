import React from 'react';

import { ContentCard } from './ContentCard';
import { All as posts } from '../../../mocks/Post';

export default {
	title: 'Example/Organisms/ContentCard',
	component: ContentCard,
	argTypes: {
		text: 'Card Title',
	},
};

const Template = (args): JSX.Element => <ContentCard {...args} />;

export const Detailpage = Template.bind();
Detailpage.args = {
	variant: 'detailpage',
	...posts[0],
};

export const Timeline = Template.bind();
Timeline.args = {
	variant: 'timeline',
	...posts[0],
};

export const Responsive = Template.bind();
Responsive.args = {
	variant: 'responsive',
	...posts[0],
};
