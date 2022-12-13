import React from 'react';

import { ImageContainer } from './ImageContainer';

export default {
  title: "Example/Components/ImageContainer",
  component: ImageContainer,
	argTypes: {},
};


export const MumblePost = (args) => <ImageContainer {...args} />;

MumblePost.args = {
  imgSrc: '/testimage/testimage_01.jpg',
  altText: 'meaningfull image description alt text',
  sizeStyle: 'mumblePost'
}

export const ProfileBanner = MumblePost.bind({})
ProfileBanner.args = {
  imgSrc: '/testimage/testimage_01.jpg',
  altText: 'Profile Banner meaningfull image',
  sizeStyle: 'profileBanner'
};