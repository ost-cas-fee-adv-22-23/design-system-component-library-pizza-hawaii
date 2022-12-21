import React, { FC, ReactNode, FormHTMLAttributes } from 'react';

type BaseProps = {
	children: ReactNode;
};

type FormType = BaseProps & FormHTMLAttributes<HTMLFormElement>;

export const Form: FC<FormType> = ({ children, ...props }) => {
	return (
		<form className="flex flex-col gap-3 mb-8 text-slate-700" {...props}>
			{children}
		</form>
	);
};
