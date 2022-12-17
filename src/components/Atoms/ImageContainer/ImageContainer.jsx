import React from 'react';
import PropTypes from 'prop-types';
import staticTestImg from './testimage/testimage_01.jpg';

// TODO import hover icon for fullscreen and apply it to hover
// import { Icon } from "/src/components/Atoms/Icon/Icon";

export const ImageContainer = (props) => {
	const containerStyles = ['max-h-56', props.imageType];

	const imageStyles = ['rounded-lg', 'max-h-56'];

	const { imgSrc, altText, sizeStyle } = props;
	// TODO: make image variant variable

	return (
		<div className={[sizeStyle, ...containerStyles].join(' ')}>
			<img className={[...imageStyles].join(' ')} src={staticTestImg} alt={props.altText} />
		</div>
	);
};

ImageContainer.PropTypes = {
	imgSrc: PropTypes.string,
	altText: PropTypes.string,
	sizeStyle: PropTypes.oneOf(['profileBanner', 'mumblePost']),
};

ImageContainer.defaultProps = {
	imgSrc: staticTestImg,
	altText: 'default alt text',
	sizeStyle: 'mumblePost',
};
