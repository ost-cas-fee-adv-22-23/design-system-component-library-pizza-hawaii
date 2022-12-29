import React from 'react';
import Wrapper from './Wrapper';

export default {
	title: 'Example/Atoms/Wrapper',
	component: Comment,
	argTypes: {},
};

const Template = (args): JSX.Element => <Wrapper {...args} />;

export const Div = Template.bind({});
export const Section = Template.bind({});
export const Body = Template.bind({});

Div.args = {
  as: 'div',
  className: 'min-w-full, bg-indigo-500',
  children: 'bg'
};

Section.args = {
  as: 'section',
  className: 'min-w-full, bg-purple-600',
  children: 'section'
};

Body.args = {
  as: 'body',
  className: 'w-full, bg-slate-100',
  children: 'body'
};