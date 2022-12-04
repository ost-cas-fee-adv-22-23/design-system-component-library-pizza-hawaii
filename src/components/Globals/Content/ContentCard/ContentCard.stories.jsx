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


export const Large = Template.bind()
Large.args = {
  text: 'Hi I am a Large template',
  size: 'l'
}

export const Small = Template.bind()
Small.args = {
  text: 'Hi I am a Small template',
  size: 's'
}

// export const Text = () => Template.bind({});

