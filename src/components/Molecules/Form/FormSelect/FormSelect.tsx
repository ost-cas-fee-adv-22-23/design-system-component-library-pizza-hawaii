import React, { FC, SelectHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { FormItem } from '../FormItem/FormItem';

import uid from '../../../../utils/uid';

type OptionType = {
	label: string;
	value: string;
};

type BaseProps = {
	label: string;
	options: OptionType[];
	errorMessage?: string;
	id?: string;
};

type FormSelectType = BaseProps & SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect: FC<FormSelectType> = ({ label, options, errorMessage, id = uid('FormSelect'), ...props }) => {
	return (
		<FormItem className="FormSelect" id={id} label={label} errorMessage={errorMessage}>
			<select
				className={['FormSelect', 'M-FormItem-Input', errorMessage && 'M-FormItem-Input-error'].join(' ')}
				id={id}
				{...props}
			>
				{options.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</FormItem>
	);
};

FormSelect.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	errorMessage: PropTypes.string,
};

FormSelect.defaultProps = {
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
