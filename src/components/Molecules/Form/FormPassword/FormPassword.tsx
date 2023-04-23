import React, { FC, InputHTMLAttributes, ChangeEvent, useState, useId } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem/index';
import { Icon } from '../../../Atoms/Icon/index';

/*
 * Type
 */

type TFormPassword = {
	/**
	 * label: add a label to the form input
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
	 * add two strings in this array here to guide the user that there is a password preview functionality.
	 * first: 'show your pasword'
	 * second: 'hide your password'
	 */
	showPasswordButtonLabels?: [string, string];
	/**
	 * onChange: add and customize here your function for password submitting
	 */
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TFormPasswordType = TFormPassword & InputHTMLAttributes<HTMLInputElement>;

/**
 * FormPassword Component
 *
 * @param { label } - label: add a label to the form input
 * @param { errorMessage } - optional: (but recommended) add errorMessage text if the form input is not valid or could not be submitted
 * @param { id } - optional: id is a string to identify the form Input
 * @param { hideLabel } - optional: `boolean` hide the label visually.
 * @param { showPasswordButtonLabels } - add two strings in this array here to guide the user that there is a password preview functionality.
 * @param { onChange } - onChange: add and customize here your function for password submitting
 *
 * @example <FormPassword label="Form Password" onChange={() => {}} />
 * @example <FormPassword label="Form Password" showPasswordButtonLabels={['Show your password', 'Hide your password']} onChange={() => {}} />
 */

export const FormPassword: FC<TFormPasswordType> = ({
	label,
	errorMessage,
	id = useId(),
	hideLabel,
	showPasswordButtonLabels = ['Click to show password', 'Click to hide password'],
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const onIconClick = (): void => {
		setShowPassword(!showPassword);
	};

	if (errorMessage) {
		props['aria-invalid'] = true;
		props['aria-describedby'] = `${id}-error`;
	}

	const showPasswordButtonProps = {
		title: showPassword ? showPasswordButtonLabels[1] : showPasswordButtonLabels[0],
		className: `absolute right-4 top-1/2 -translate-y-1/2 inline-flex ${
			errorMessage ? 'text-error-red ' : 'text-slate-600'
		} p-4 -mx-4`,
		onClick: onIconClick,
	};

	return (
		<FormItem id={id} label={label || 'FormPassword'} errorMessage={errorMessage} hideLabel={hideLabel}>
			<input
				className={[...FormItem_InputStyle, ...(errorMessage ? FormItem_InputErrorStyle : []), 'pr-10'].join(' ')}
				type={showPassword ? 'text' : 'password'}
				id={id}
				{...props}
			/>
			<button type="button" {...showPasswordButtonProps}>
				<Icon name="eye" />
				<span className="sr-only">{showPassword ? showPasswordButtonLabels[1] : showPasswordButtonLabels[0]}</span>
			</button>
		</FormItem>
	);
};
