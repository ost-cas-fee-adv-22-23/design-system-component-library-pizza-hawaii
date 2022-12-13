import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { SignIn } from './SignIn';

export default {
  title: 'Example/SignIn',
  component: SignIn,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <SignIn {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const SignInTemplate = Template.bind({});

