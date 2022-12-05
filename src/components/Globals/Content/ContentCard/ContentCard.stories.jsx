import React from 'react';

import  ContentCard  from  './ContentCard'

export default {
	title: 'Example/Components/ContentCard',
	component: ContentCard,
	argTypes: {
		text: 'Card Title'
	}
}

const Template = (args) => <ContentCard {...args} />


export const Detailpage = Template.bind()
Detailpage.args = {
	text: "Hi I am a Large template",
	variant: "detailpage",
};

export const Timeline = Template.bind()
Timeline.args = {
	text: "Medium- rare, mostly we well use that one",
	variant: "timeline",
};


// export const Text = () => Template.bind({});

