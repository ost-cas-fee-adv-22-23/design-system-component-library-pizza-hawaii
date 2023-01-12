import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem/FormItem';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type TFormInput = {
	label: string;
	errorMessage?: string;
	id?: string;
	labelHidden?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TFormInputType = TFormInput & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<TFormInputType> = ({ label, errorMessage, id = uid('FormInput'), labelHidden, ...props }) => {
	return (
		<FormItem id={id} label={label || 'FormInput'} errorMessage={errorMessage} labelHidden={labelHidden}>
			<input
				className={[...FormItem_InputStyle, ...(errorMessage ? FormItem_InputErrorStyle : [])].join(' ')}
				id={id}
				{...props}
			/>
		</FormItem>
	);
};
