import React, { FC, ChangeEvent, InputHTMLAttributes } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem';
import { Icon } from '../../../Atoms/Icon';

import uid from '../../../../utils/uid';

/*
 * Type
 */

export type TFormInput = {
	/**
	 * label text for form input field
	 */
	label: string;

	/**
	 * optional: (but recommended) add errorMessage text if the form input is not valid or could not be submitted
	 */
	errorMessage?: string;

	/**
	 * optional: id is a string to identify the form Input
	 */
	id?: string;

	/**
	 * optional: hide the label visually.
	 */
	hideLabel?: boolean;

	/**
	 * optional: display an icon within the form from the iconLibrary
	 */
	icon?: string;

	/**
	 * onChange method: empty function as standard. hook here in for your method happening onChange.
	 */
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TFormInputType = TFormInput & InputHTMLAttributes<HTMLInputElement>;

/**
 * FormInput Component
 *
 * @param {label} - label text for form input field (required)
 * @param {errorMessage} - optional: (but recommended) add errorMessage text if the form input is not valid or could not be submitted
 * @param {id} - optional: id is a string to identify the form Input
 * @param {hideLabel} - optional: hide the label visually.
 * @param {icon} - optional: display an icon within the form from the iconLibrary
 * @param {onChange} - onChange method: empty function as standard. hook here in for your method happening onChange.
 *
 * @example <FormInput label="Form Input" onChange={() => {}} />
 */

export const FormInput: FC<TFormInputType> = ({ label, errorMessage, id = uid('FormInput'), hideLabel, icon, ...props }) => {
	if (errorMessage) {
		props['aria-invalid'] = true;
		props['aria-describedby'] = `${id}-error`;
		icon = 'cancel';
	}

	const inputProps = {
		className: [...FormItem_InputStyle, ...(errorMessage ? FormItem_InputErrorStyle : []), icon && 'pr-10'].join(' '),
		id,
		...props,
	};

	const iconContainerProps = {
		className: `absolute right-4 top-1/2 -translate-y-1/2 flex ${errorMessage ? 'text-error-red ' : 'text-slate-600'}`,
	};

	return (
		<FormItem id={id} label={label || 'FormInput'} errorMessage={errorMessage} hideLabel={hideLabel}>
			<input {...inputProps} />
			{icon && (
				<span {...iconContainerProps}>
					<Icon name={icon} />
				</span>
			)}
		</FormItem>
	);
};
