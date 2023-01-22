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

export type TFormSelect = {
	/**
	 * label: add a labeltext
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
/*
 * Styles
 */

/**
 * Typography for Button Component
 * @param { label } label text for form input field
 * @param { errorMessage } string errorMessage text when form validation is not passed
 * @param { id } id string for identifying the form input
 * @param { hideLabel } hideLabel for hiding label visually
 * @param { options } Array with an options object
 * @example
 * return (
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
 * )
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
