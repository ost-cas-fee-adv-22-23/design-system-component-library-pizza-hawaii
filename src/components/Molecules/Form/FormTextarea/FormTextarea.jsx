/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { FormItem } from '/src/components/Molecules/Form/FormItem/FormItem';

import uid from '/src/utils/uid';

export const FormTextarea = ({ name, label, errorMessage, id = uid('FormTextarea'), ...props }) => {
	return (
		<FormItem
			className="FormTextarea"
			id={id}
			label={label}
			errorMessage={errorMessage}
			inputField={
				<textarea
					className={['FormTextarea', 'M-FormItem-Input', errorMessage && 'M-FormItem-Input-error'].join(' ')}
					name={name}
					id={id}
					{...props}
				/>
			}
		/>
	);
};

FormTextarea.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	errorMessage: PropTypes.string,
};

FormTextarea.defaultProps = {
	name: 'text-input',
	label: 'Text Input',
};
