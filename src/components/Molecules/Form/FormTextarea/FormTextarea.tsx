import React, { FC, ChangeEvent, TextareaHTMLAttributes } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type TFormTextarea = {
	/**
	 * label: add a label to the form input
	 */
	label: string;
	/**
	 * optional: (but recommended) add errorMessage text if the form textarea is not valid or could not be submitted
	 */
	errorMessage?: string;
	/**
	 * optional: id is a string to identify the form textarea
	 */
	id?: string;
	/**
	 * optional: hide the label visually.
	 */
	hideLabel?: boolean;
	/**
	 * optional: choose textarea size between 'M', 'L'
	 */
	size?: 'M' | 'L';
	/**
	 * onChange method: empty function as standard. hook here in for your method happening onChange.
	 */
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

type TFormTextareaType = TFormTextarea & TextareaHTMLAttributes<HTMLTextAreaElement>;

/*
 * Style
 */

const fieldStyle: string[] = ['h-40'];

/**
 * FormTextarea Component
 *
 * @param {label} - label: add a label to the form input
 * @param {errorMessage} - optional: (but recommended) add errorMessage text if the form textarea is not valid or could not be submitted
 * @param {id} - optional: id is a string to identify the form textarea
 * @param {hideLabel} - optional: hide the label visually.
 * @param {size} - optional: choose textarea size between 'M', 'L'
 * @param {onChange} - onChange method: empty function as standard. hook here in for your method happening onChange.
 *
 * @example <FormTextarea label="Form Textarea" onChange={() => {}} />
 */

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
