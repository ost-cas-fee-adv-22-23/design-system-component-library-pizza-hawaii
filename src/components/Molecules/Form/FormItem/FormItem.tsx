import React, { FC, ReactNode, useId } from 'react';

/*
 * Type
 */

type TFormItem = {
	/**
	 * label: add a label to the form input
	 */
	label: string;

	/**
	 * children: React nodes
	 */
	children: ReactNode;

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
};

/*
 * Style
 */

export const FormItem_InputStyle = [
	'w-full',
	'text-black text-base',
	'rounded-lg p-4',
	'bg-slate-50 hover:bg-slate-100 focus:bg-white',
	// Border for focus and hover
	'border border-slate-300 outline outline-slate-300 outline-0',
	'hover:border-slate-300 hover:outline-slate-300 hover:outline-1',
	'focus:border-purple-600 focus:outline-purple-600 focus:outline-1',
	// Disabled State
	'disabled:text-slate-400 disabled:bg-slate-50 disabled:border-slate-300 disabled:outline-slate-300 disabled:outline-0',
];

export const FormItem_InputErrorStyle = [
	'text-error-red',
	'border-error-red outline-error-red outline-1',
	'hover:border-error-red/[.33] hover:outline-error-red/[.33]',
	'focus:border-error-red/[.33] focus:outline-error-red/[.33]',
];

/**
 * FormItem Component
 *
 * @param {label} - label: add a label to the form input
 * @param {children} - children: React nodes
 * @param {errorMessage} - optional: (but recommended) add errorMessage text if the form input is not valid or could not be submitted
 * @param {id} - optional: id is a string to identify the form Input
 * @param {hideLabel} - optional: hide the label visually.
 *
 * @example <FormItem label="Form Input" errorMessage="This is an error message"><input type="text" /></FormItem>
 */
export const FormItem: FC<TFormItem> = ({ label, children, errorMessage, hideLabel, id = useId(), ...props }) => {
	return (
		<div className="flex flex-col" {...props}>
			<label
				className={['text-slate-800 dark:text-slate-200 font-semibold text-base mb-xxs', hideLabel ? 'sr-only' : ''].join(' ')}
				htmlFor={id}
			>
				{label}
			</label>
			<div className="relative">{children}</div>
			{errorMessage ? (
				<span className="text-error-red text-xs font-medium mt-xxs self-end" id={`${id}-error`}>
					{errorMessage}
				</span>
			) : null}
		</div>
	);
};
