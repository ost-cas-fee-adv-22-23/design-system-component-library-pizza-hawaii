import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem';
import { Icon } from '../../../Atoms/Icon';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type TFormInput = {
	label: string;
	errorMessage?: string;
	id?: string;
	labelHidden?: boolean;
	icon?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TFormInputType = TFormInput & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<TFormInputType> = ({
	label,
	errorMessage,
	id = uid('FormInput'),
	labelHidden,
	icon,
	...props
}) => {
	return (
		<FormItem id={id} label={label || 'FormInput'} errorMessage={errorMessage} labelHidden={labelHidden}>
			<input
				className={[...FormItem_InputStyle, ...(errorMessage ? FormItem_InputErrorStyle : [])].join(' ')}
				id={id}
				{...props}
			/>
			{icon && (
				<span
					className={`absolute right-4 top-1/2 -translate-y-1/2 flex ${
						errorMessage ? 'text-error-red ' : 'text-slate-600'
					}`}
				>
					<Icon name={icon} />
				</span>
			)}
		</FormItem>
	);
};
