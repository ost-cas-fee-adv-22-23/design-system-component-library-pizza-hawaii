import React, { FC, ReactNode, FormHTMLAttributes } from 'react';

import { GridBaseStyle, GridVariantStyleMap, GridMarginBelowStyleMap, GridGapStyleMap } from '../../Atoms/Grid/Grid';

/*
 * Type
 */

type TForm = {
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
	'text-slate-700',
];

export const Form: FC<TFormType> = ({ children, ...props }) => (
	<form className={FormBaseStyle.join(' ')} {...props}>
		{children}
	</form>
);
