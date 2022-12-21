/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uid from '../../../utils/uid';

import '/src/components/Components-base.css';

export const Switch = ({ options, value, name }) => {
	const [activeValue, setActiveValue] = useState('mumbles');

	console.log(value);

	const changeValue = (event) => {
		setActiveValue(event.target.value);
		console.log('active state view is now:', activeValue);
	};
	const fieldName = name || uid('switch');
	const fieldStyles = 'flex overflow-hidden bg-slate-200 rounded-lg p-1 w-fit';
	const inputStyles = ' absolute overflow-hidden h-0 w-0';
	const labelStyles =
		'hover:cursor-pointer bg-slate-200 first-of-type:rounded-tl-md first-of-type:rounded-bl-md last:rounded-tr-md last:rounded-br-md text-slate-600 text-base font-semibold text-center py-2 px-4 border-slate-600 transition-all ease-in duration-150 ';

	return (
		<div className="p-2">
			<div className={fieldStyles + ' M-input-checked'}>
				{options.map((option) => {
					const optionId = uid('switch-option');

					return (
						<>
							<input
								className={inputStyles}
								type="radio"
								id={optionId}
								name={fieldName}
								value={option.value}
								checked={activeValue === option.value}
								onChange={changeValue}
							/>
							<label className={labelStyles} htmlFor={optionId}>
								{option.label}
							</label>
						</>
					);
				})}
			</div>
		</div>
	);
};

Switch.propTypes = {
	value: PropTypes.string,
	name: PropTypes.string,
};
