import React, { FC, TextareaHTMLAttributes } from 'react';
import { FormItem } from '../FormItem/FormItem';

import uid from '../../../../utils/uid';

type BaseProps = {
	label: string;
	errorMessage?: string;
	id?: string;
};

type FormTextareaType = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const FormTextarea: FC<FormTextareaType> = ({ label, errorMessage, id = uid('FormTextarea'), ...props }) => {
	return (
		<FormItem className="FormTextarea" id={id} label={label} errorMessage={errorMessage}>
			<textarea
				className={['FormTextarea', 'M-FormItem-Input', errorMessage && 'M-FormItem-Input-error'].join(' ')}
				id={id}
				{...props}
			/>
		</FormItem>
	);
};
