import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { FormItem } from '../FormItem/FormItem';

import uid from '../../../../utils/uid';

type BaseProps = {
	label: string;
	errorMessage?: string;
	id?: string;
	labelHidden?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type FormInputType = BaseProps & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputType> = ({ label, errorMessage, id = uid('FormInput'), labelHidden, ...props }) => {
	return (
		<FormItem
			className="FormInput"
			id={id}
			label={label || 'FormInput'}
			errorMessage={errorMessage}
			labelHidden={labelHidden}
		>
			<input
				className={['FormInput', 'M-FormItem-Input', errorMessage && 'M-FormItem-Input-error'].join(' ')}
				id={id}
				{...props}
			/>
		</FormItem>
	);
};
