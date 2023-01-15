import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem';
import { Icon } from '../../../Atoms/Icon';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type TFormInput = {
	label: string;
	errorMessage?: string;
	id?: string;
	hideLabel?: boolean;
	icon?: string;
	onIconClick?: () => void;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TFormInputType = TFormInput & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<TFormInputType> = ({
	label,
	errorMessage,
	id = uid('FormInput'),
	hideLabel,
	icon,
	...props
}) => {
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
