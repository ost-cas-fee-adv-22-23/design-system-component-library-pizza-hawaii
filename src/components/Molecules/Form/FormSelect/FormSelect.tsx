import React, { FC, SelectHTMLAttributes } from 'react';
import { FormItem } from '../FormItem/FormItem';

import uid from '../../../../utils/uid';

type OptionType = {
	label: string;
	value: string;
};

type BaseProps = {
	label: string;
	options: OptionType[];
	errorMessage?: string;
	id?: string;
	labelHidden?: boolean;
};

type FormSelectType = BaseProps & SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect: FC<FormSelectType> = ({
	label,
	options,
	errorMessage,
	id = uid('FormSelect'),
	labelHidden,
	...props
}) => {
	return (
		<FormItem
			className="FormSelect"
			id={id}
			label={label || 'FormSelect'}
			errorMessage={errorMessage}
			labelHidden={labelHidden}
		>
			<select
				className={['FormSelect', 'M-FormItem-Input', errorMessage && 'M-FormItem-Input-error'].join(' ')}
				id={id}
				{...props}
			>
				{options.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</FormItem>
	);
};
