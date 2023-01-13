import React, { FC, ReactNode } from 'react';
import uid from '../../../../utils/uid';

/*
 * Type
 */

type TFormItem = {
	label: string;
	children: ReactNode;
	errorMessage?: string;
	id?: string;
	labelHidden?: boolean;
};

/*
 * Style
 */

export const FormItem_InputStyle = [
	'w-full',
	'text-black text-base',
	'bg-slate-100 rounded-lg py-4 pl-4 pr-12',
	'border border-slate-300 outline outline-slate-300 outline-0',
	'hover:border-slate-300 hover:outline-slate-300 hover:outline-1',
	'focus:border-purple-600 focus:outline-purple-600 focus:outline-1',
];

export const FormItem_InputErrorStyle = [
	'border-error-red outline-error-red outline-1',
	'hover:border-error-red/[.33] hover:outline-error-red/[.33]',
	'focus:border-error-red/[.33] focus:outline-error-red/[.33]',
];

export const FormItem: FC<TFormItem> = ({ label, children, errorMessage, labelHidden, id = uid('FormItem'), ...props }) => {
	return (
		<div className={['FormItem flex flex-col'].join(' ')} {...props}>
			<label
				className={['text-slate-800 font-semibold text-base mb-xxs', labelHidden ? 'sr-only' : ''].join(' ')}
				htmlFor={id}
			>
				{label}
			</label>
			<div className="relative">{children}</div>
			{errorMessage ? (
				<span className="text-error-red text-xs font-medium mt-xxs self-end">{errorMessage}</span>
			) : null}
		</div>
	);
};
