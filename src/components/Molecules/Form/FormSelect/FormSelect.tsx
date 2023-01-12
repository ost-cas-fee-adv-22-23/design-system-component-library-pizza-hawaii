import React, { FC, SelectHTMLAttributes } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem/FormItem';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type TFormSelectOption = {
	label: string;
	value: string;
};

type TFormSelect = {
	label: string;
	options: TFormSelectOption[];
	errorMessage?: string;
	id?: string;
	labelHidden?: boolean;
};

type TFormSelectType = TFormSelect & SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect: FC<TFormSelectType> = ({
	label,
	options,
	errorMessage,
	id = uid('FormSelect'),
	labelHidden,
	...props
}) => {
	return (
		<FormItem id={id} label={label || 'FormSelect'} errorMessage={errorMessage} labelHidden={labelHidden}>
			<select
				className={[...FormItem_InputStyle, ...(errorMessage ? FormItem_InputErrorStyle : [])].join(' ')}
				id={id}
				{...props}
			>
				{options && options.map((option) => <option value={option.value}>{option.label}</option>)}
			</select>
		</FormItem>
	);
};
