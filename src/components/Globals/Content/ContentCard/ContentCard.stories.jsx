import React from 'react';

import  ContentCard  from  './ContentCard'

export default {
  title: 'Example/Components/ContentCard',
  component: ContentCard,
  argTypes: {
    text: 'Card Title'
  }
}

export const Text = () => <ContentCard text={'Card Title'} />

// export const Text = () => Template.bind({});
// Text.args = {
  // title: 'hoi'
// }

