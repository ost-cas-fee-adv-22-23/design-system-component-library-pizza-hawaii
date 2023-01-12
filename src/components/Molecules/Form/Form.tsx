import React, { FC, ReactNode, FormHTMLAttributes } from 'react';

/*
 * Type
 */

type TForm = {
	children: ReactNode;
};

type TFormType = TForm & FormHTMLAttributes<HTMLFormElement>;

export const Form: FC<TFormType> = ({ children, ...props }) => {
	return (
		<form className="flex flex-col gap-3 mb-8 text-slate-700" {...props}>
			{children}
		</form>
	);
};
