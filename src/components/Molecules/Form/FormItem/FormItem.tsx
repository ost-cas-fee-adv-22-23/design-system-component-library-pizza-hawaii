import React, { FC, ReactNode } from 'react';
import uid from '../../../../utils/uid';

type BaseProps = {
	label: string;
	children: ReactNode;
	errorMessage?: string;
	className?: string;
	id?: string;
	labelHidden?: boolean;
};

export const FormItem: FC<BaseProps> = ({
	label,
	children,
	errorMessage,
	className,
	labelHidden,
	id = uid('FormItem'),
	...props
}) => {
	return (
		<div className={['FormItem flex flex-col', className].join(' ')} {...props}>
			<label
				className={['FormItem--label M-FormItem-Label mb-xxs', labelHidden ? 'sr-only' : ''].join(' ')}
				htmlFor={id}
			>
				{label}
			</label>
			{children}
			{errorMessage ? <span className="FormItem--error M-FormItem-Error mt-xxs self-end">{errorMessage}</span> : null}
		</div>
	);
};
