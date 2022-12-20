/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '/src/components/Components-base.css';

export const Switch = () => {
	const [isActive, setIsActive] = useState('mumbles');

	const changeView = (event) => {
		setIsActive(event.target.value);
		console.log('active state view is now:', event.target.value);
	};

	const switchStyles = ['M-switch-field'];
	return (
		<>
			<form className="p-2">
				<div className={switchStyles}>
					<input
						type="radio"
						id="mumbles"
						name="switchview"
						value="mumbles"
						checked={isActive === 'mumbles'}
						onChange={changeView}
					/>
					<label htmlFor="mumbles">Deine Mumbles</label>
					<input
						type="radio"
						id="likes"
						name="switchview"
						value="likes"
						checked={isActive === 'likes'}
						onChange={changeView}
					/>
					<label htmlFor="likes">Deine Likes</label>
				</div>
			</form>
		</>
	);
};

Switch.propTypes = {
	isActive: PropTypes.oneOf(['mumbles', 'likes']),
};
