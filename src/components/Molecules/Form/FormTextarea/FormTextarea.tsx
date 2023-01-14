import React, { FC, TextareaHTMLAttributes } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem/FormItem';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type TFormTextarea = {
	label: string;
	errorMessage?: string;
	id?: string;
	labelHidden?: boolean;
	size?: 'M' | 'L';
};

type TFormTextareaType = TFormTextarea & TextareaHTMLAttributes<HTMLTextAreaElement>;

/*
 * Style
 */

const fieldStyle: string[] = ['h-40'];

export const FormTextarea: FC<TFormTextareaType> = ({
	label,
	errorMessage,
	id = uid('FormTextarea'),
	labelHidden,
	size,
	...props
}) => {
	const style = [
		...FormItem_InputStyle,
		...(errorMessage ? FormItem_InputErrorStyle : []),
		...fieldStyle,
		size && size === 'L' ? 'text-lg' : null,
	];

	return (
		<FormItem id={id} label={label || 'FormTextarea'} errorMessage={errorMessage} labelHidden={labelHidden}>
			<textarea className={style.join(' ')} id={id} {...props} />
		</FormItem>
	);
};
