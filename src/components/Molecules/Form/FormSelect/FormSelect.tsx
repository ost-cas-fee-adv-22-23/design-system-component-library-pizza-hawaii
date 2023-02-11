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
	/**
	 * label: add a label to the form input
	 */
	label: string;
	/**
	 * options: Array with the object for each select-options entry:
	 * label: display value
	 * value: submit value
	 * disabled: not submittable option.
	 */
	options: TFormSelectOption[];
	/**
	 * provide an errorMessage if the user forget to choose an option.
	 */
	errorMessage?: string;
	/**
	 * id of this select form in a string.
	 */
	id?: string;
	/**
	 * optional: hide label boolean
	 */
	hideLabel?: boolean;
	/**
	 * onChange method: empty function as standard. hook here in for your method happening onChange.
	 */
	onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

type TFormSelectType = TFormSelect & SelectHTMLAttributes<HTMLSelectElement>;

/**
 * FormSelect Component
 *
 * @param {label} - label: add a label to the form input
 * @param {options} - options: Array with the object for each select-options entry:
 * @param {errorMessage} - provide an errorMessage if the user forget to choose an option.
 * @param {id} - id of this select form in a string.
 * @param {hideLabel} - optional: hide label boolean
 * @param {onChange} - onChange method: empty function as standard. hook here in for your method happening onChange.
 * @param {props} - props: all other props are passed to the select element.
 *
 * @example
 *   <FormSelect defaultValue="2" label="Form Select" onChange={() => {}}
				options={[
					{
						disabled: true,
						label: 'Bitte wählen',
						value: ''
					},
					{
						label: 'Option 1',
						value: '1'
					},
					{
						label: 'Option 2',
						value: '2'
					}
				]}
		/>
 */

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
