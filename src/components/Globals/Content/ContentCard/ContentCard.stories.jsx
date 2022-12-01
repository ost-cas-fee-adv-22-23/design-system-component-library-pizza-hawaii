import React from 'react';

import  ContentCard  from  './ContentCard'

export default {
  title: 'Example/Components/ContentCard',
  component: ContentCard,
  argTypes: {
    text: 'Display Name'
  }
}

export const Text = () => <ContentCard text={'Display Name'} />

// export const Text = () => Template.bind({});
// Text.args = {
  // title: 'hoi'
// }

