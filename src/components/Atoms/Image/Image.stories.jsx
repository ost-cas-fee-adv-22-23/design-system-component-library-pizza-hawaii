import React from 'react';
import { Image as Component } from "./Image";

export default {
	title: "Example/Atoms/Image",
	component: Component,
	argTypes: {
		preset: {
			options: ["profile", "post", "header"],
			control: { type: "select" },
		},
	},
};

const Template = (args) => <Image {...args} />;

export const Image = (args) => <Component {...args} />;
Image.args = {};
