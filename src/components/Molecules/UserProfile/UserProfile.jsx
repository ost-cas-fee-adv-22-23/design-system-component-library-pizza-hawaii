import React from 'react';
import PropTypes from 'prop-types';
import imageFile from './img/testuser.png'
/**
 * User Icon with image from loged in user
 */
export const UserProfile = ({size}) => {
	const baseStyle = [
		"rounded-lg",
		"self-center",
		"p-xs"
	]

	const sizeStyle = [ `M-size-${size.toLowerCase()}`]


	const userImage = {
		src: imageFile,
		userName: 'alt text: TODO: here username'
	}

	return (
		<div className={[...sizeStyle, ...baseStyle].join(' ')}>
			<img  src={userImage.src} alt={userImage.userName}/>
		</div>
	)
}

UserProfile.propTypes = {
	/**
	 * image path string
	 */
	src: PropTypes.string,
	userName: PropTypes.string,
	size: PropTypes.oneOf(['S', 'M', 'L', 'big'])
}

UserProfile.defaultProps = {
	src: imageFile,
	userName: 'Cherry Chris'
}
