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
	...props
}) => {
	return (
		<FormItem id={id} label={label || 'FormTextarea'} errorMessage={errorMessage} labelHidden={labelHidden}>
			<textarea
				className={[...FormItem_InputStyle, ...(errorMessage ? FormItem_InputErrorStyle : []), ...fieldStyle].join(
					' '
				)}
				id={id}
				{...props}
			/>
		</FormItem>
	);
};
