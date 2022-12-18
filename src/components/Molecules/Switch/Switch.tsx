/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import '/src/components/Components-base.css';

export const Switch = (props) => {
	const { mumblesIsChecked, likedIsChecked } = props;
	const switchStyles = ['M-switch-field'];
	return (
		<form className="p-2">
			<div className={[switchStyles]}>
				<input type="radio" id="mumbles" name="viewchooser" value="mumbles" checked={mumblesIsChecked} />
				<label for="mumbles">Deine Mumbles</label>
				<input type="radio" id="likes" name="viewchooser" value="likes" checked={likedIsChecked} />
				<label for="likes">Deine Likes</label>
			</div>
		</form>
	);
};

Switch.propTypes = {
	mumblesIsChecked: PropTypes?.string,
	likedIsChecked: PropTypes?.string,
};
