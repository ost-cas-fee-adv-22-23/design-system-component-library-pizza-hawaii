/* eslint-disable import/no-unresolved */
import React, { FC, InputHTMLAttributes } from 'react';
import { FormItem } from '../FormItem/FormItem';

import uid from '../../../../utils/uid';

type BaseProps = {
	label: string;
	errorMessage?: string;
	id?: string;
};

type FormInputType = (BaseProps & InputHTMLAttributes<HTMLInputElement>) | BaseProps;

export const FormInput: FC<FormInputType> = ({ label, errorMessage, id = uid('FormInput'), ...props }) => {
	return (
		<FormItem className="FormInput" id={id} label={label} errorMessage={errorMessage}>
			<input
				className={['FormInput', 'M-FormItem-Input', errorMessage && 'M-FormItem-Input-error'].join(' ')}
				id={id}
				{...props}
			/>
		</FormItem>
	);
};

FormInput.defaultProps = {
	type: 'text',
	name: 'text-input',
	label: 'Text Input',
};
