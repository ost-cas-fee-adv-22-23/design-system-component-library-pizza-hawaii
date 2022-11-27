import React from 'react';

import { UserProfile } from './UserProfile';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Components/UserProfile',
  component: UserProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    imagePath: '../../../assets/img/testimages/testuser.png'
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UserProfile {...args} />;


export const UserProfileImg = Template.bind({});
