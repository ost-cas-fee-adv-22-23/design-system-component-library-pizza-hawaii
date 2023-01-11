import React, { FC, TextareaHTMLAttributes } from 'react';
import { FormItem } from '../FormItem/FormItem';

import uid from '../../../../utils/uid';

type BaseProps = {
	label: string;
	errorMessage?: string;
	id?: string;
	labelHidden?: boolean;
};

type FormTextareaType = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const FormTextarea: FC<FormTextareaType> = ({
	label,
	errorMessage,
	id = uid('FormTextarea'),
	labelHidden,
	...props
}) => {
	return (
		<FormItem
			className="FormTextarea"
			id={id}
			label={label || 'FormTextarea'}
			errorMessage={errorMessage}
			labelHidden={labelHidden}
		>
			<textarea
				className={['FormTextarea', 'M-FormItem-Input', errorMessage && 'M-FormItem-Input-error', 'h-40'].join(' ')}
				id={id}
				{...props}
			/>
		</FormItem>
	);
};
