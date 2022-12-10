import React from 'react';

import { ImageContainer } from './ImageContainer';

export default {
  title: "Example/Components/ImageContainer",
  component: ImageContainer,
	argTypes: {},
};


export const Default = (args) => <ImageContainer {...args} />;

Default.args = {
  imgSrc: '/testimage/testimage_01.jpg',
  altText: 'meaningfull image description alt text'
}

