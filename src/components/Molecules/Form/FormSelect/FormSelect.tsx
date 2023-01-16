import React, { FC, SelectHTMLAttributes, ChangeEvent } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem';

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
	hideLabel?: boolean;
	onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

type TFormSelectType = TFormSelect & SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect: FC<TFormSelectType> = ({
	label,
	options,
	errorMessage,
	id = uid('FormSelect'),
	hideLabel,
	...props
}) => {
	const selectProps = {
		className: [
			...FormItem_InputStyle,
			...(errorMessage ? FormItem_InputErrorStyle : []),
			'appearance-none bg-[length:1em_1em] bg-[center_right_.7rem] bg-no-repeat bg-select-background',
		].join(' '),
		id,
		...props,
	};

	return (
		<FormItem id={id} label={label || 'FormSelect'} errorMessage={errorMessage} hideLabel={hideLabel}>
			<select {...selectProps}>
				{options &&
					options.map((option) => {
						const { label, ...optionProps } = option;
						return (
							<option key={option.value} {...optionProps}>
								{label || optionProps.value}
							</option>
						);
					})}
			</select>
		</FormItem>
	);
};
