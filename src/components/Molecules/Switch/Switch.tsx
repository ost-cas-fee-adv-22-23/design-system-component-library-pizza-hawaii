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

	const fieldStyles = 'flex overflow-hidden bg-slate-200 rounded-lg p-1 w-fit';
	const inputStyles = 'absolute overflow-hidden h-0 w-0';
	const labelStyles =
		'hover:cursor-pointer bg-slate-200  first-of-type:rounded-tl-md first-of-type:rounded-bl-md last:rounded-tr-md last:rounded-br-md text-slate-600 text-base font-semibold text-center py-2 px-4 border-slate-600 transition-all ease-in duration-150 ';
	return (
		<>
			<form className="p-2">
				<div className={[fieldStyles, 'M-input-checked'].join(' ')}>
					<input
						className={inputStyles}
						type="radio"
						id="mumbles"
						name="switchview"
						value="mumbles"
						checked={isActive === 'mumbles'}
						onChange={changeView}
					/>
					<label className={labelStyles} htmlFor="mumbles">
						Deine Mumbles
					</label>
					<input
						className={inputStyles}
						type="radio"
						id="likes"
						name="switchview"
						value="likes"
						checked={isActive === 'likes'}
						onChange={changeView}
					/>
					<label className={labelStyles} htmlFor="likes">
						Deine Likes
					</label>
				</div>
			</form>
		</>
	);
};

Switch.propTypes = {
	isActive: PropTypes.oneOf(['mumbles', 'likes']),
};
