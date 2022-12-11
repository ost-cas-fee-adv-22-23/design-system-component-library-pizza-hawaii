import React from 'react';

import { UserProfile } from './UserProfile';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/UserProfile',
  component: UserProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: './img/testuser.png',
    userName: 'user name comes here as alt text'
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UserProfile {...args} />;


// export const UserProfileImg = Template.bind({size: 'm'});

const UserProfileImages = ['s', 'm', 'l', 'big'].reduce((acc, size) => {
  const UserProfile = Template.bind({})
  UserProfile.args = {
    size: size
  }
  acc[size] = UserProfile
  return acc
}, {})


export const Small = UserProfileImages['s'];
export const Medium = UserProfileImages['m'];
export const Large = UserProfileImages['l'];
export const Big = UserProfileImages['big'];
