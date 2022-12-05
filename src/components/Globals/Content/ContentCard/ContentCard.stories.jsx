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
  size: 'l',
  corners: 'round'
}

export const Medium = Template.bind()
Medium.args = {
  text: 'Medium- rare, mostly we well use that one',
  size: 'm',
  corners: 'square'
}

export const Small = Template.bind()
Small.args = {
  text: 'Hi I am a Small template - the profile image is smaller here',
  size: 's',
  corners: 'square'
}

// export const Text = () => Template.bind({});

