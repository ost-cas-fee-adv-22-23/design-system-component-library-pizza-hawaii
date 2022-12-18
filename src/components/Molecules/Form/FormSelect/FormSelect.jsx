/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { FormItem } from '/src/components/Molecules/Form/FormItem/FormItem';

import uid from '/src/utils/uid';

export const FormSelect = ({ type, name, label, options, errorMessage, id = uid('FormSelect'), ...props }) => {
	return (
		<FormItem
			className="FormSelect"
			id={id}
			label={label}
			errorMessage={errorMessage}
			inputField={
				<select
					className={['FormSelect', 'M-FormItem-Input', errorMessage && 'M-FormItem-Input-error'].join(' ')}
					type={type}
					name={name}
					id={id}
					{...props}
				>
					{options.map((option) => (
						<option value={option.value}>{option.label}</option>
					))}
				</select>
			}
		/>
	);
};

FormSelect.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	errorMessage: PropTypes.string,
};

FormSelect.defaultProps = {
	type: 'text',
	name: 'text-input',
	label: 'Text Input',
	options: [
		{ label: 'Option 1', value: '1' },
		{ label: 'Option 2', value: '2' },
		{ label: 'Option 3', value: '3' },
		{ label: 'Option 4', value: '4' },
		{ label: 'Option 5', value: '5' },
	],
};
