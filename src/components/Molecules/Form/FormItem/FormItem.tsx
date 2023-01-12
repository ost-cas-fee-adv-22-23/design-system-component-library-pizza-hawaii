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
	'text-black text-base',
	'bg-slate-100 rounded-lg p-4',
	'border border-slate-300 outline outline-slate-300 outline-0',
	'hover:border-slate-300 hover:outline-slate-300 hover:outline-1',
	'focus:border-purple-600 focus:outline-purple-600 focus:outline-1',
];

export const FormItem_InputErrorStyle = ['border-red-700 outline-red-700 outline-1'];

export const FormItem: FC<TFormItem> = ({ label, children, errorMessage, labelHidden, id = uid('FormItem'), ...props }) => {
	return (
		<div className={['FormItem flex flex-col'].join(' ')} {...props}>
			<label
				className={['text-slate-800 font-semibold text-base mb-xxs', labelHidden ? 'sr-only' : ''].join(' ')}
				htmlFor={id}
			>
				{label}
			</label>
			{children}
			{errorMessage ? <span className="text-red-700 text-xs font-medium mt-xxs self-end">{errorMessage}</span> : null}
		</div>
	);
};
