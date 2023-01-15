import React, { FC, TextareaHTMLAttributes } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type TFormTextarea = {
	label: string;
	errorMessage?: string;
	id?: string;
	hideLabel?: boolean;
	size?: 'M' | 'L';
	onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
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
	hideLabel,
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
		<FormItem id={id} label={label || 'FormTextarea'} errorMessage={errorMessage} hideLabel={hideLabel}>
			<textarea className={style.join(' ')} id={id} {...props} />
		</FormItem>
	);
};
