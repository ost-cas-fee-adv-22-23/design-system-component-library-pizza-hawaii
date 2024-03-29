import React, { FC, ReactNode, FormHTMLAttributes } from 'react';

import { GridBaseStyle, GridVariantStyleMap, GridMarginBelowStyleMap, GridGapStyleMap } from '../../Atoms/Grid/Grid';

/*
 * Type
 */

type TForm = {
	/**
	 * children: React node
	 */
	children: ReactNode;
};

type TFormType = TForm & FormHTMLAttributes<HTMLFormElement>;

/*
 * Styles
 */

const FormBaseStyle: string[] = [
	GridBaseStyle,
	GridVariantStyleMap.col,
	GridMarginBelowStyleMap.M,
	GridGapStyleMap.M,
	'text-slate-700 dark:text-slate-300',
];

/**
 * Form Component
 * @param { ReactNode } children - Child Nodes of the form
 * @example <Form>Form</Form>
 */

export const Form: FC<TFormType> = ({ children, ...props }) => (
	<form className={FormBaseStyle.join(' ')} {...props}>
		{children}
	</form>
);
