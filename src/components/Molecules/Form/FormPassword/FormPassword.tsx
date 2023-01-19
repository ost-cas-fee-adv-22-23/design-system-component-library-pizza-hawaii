'use client';

import React, { FC, InputHTMLAttributes, ChangeEvent, useState } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem/index';
import { Icon } from '../../../Atoms/Icon/index';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type TFormPassword = {
	label: string;
	errorMessage?: string;
	id?: string;
	hideLabel?: boolean;
	showPasswordButtonLabels?: [string, string];
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TFormPasswordType = TFormPassword & InputHTMLAttributes<HTMLInputElement>;

export const FormPassword: FC<TFormPasswordType> = ({
	label,
	errorMessage,
	id = uid('FormPassword'),
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
