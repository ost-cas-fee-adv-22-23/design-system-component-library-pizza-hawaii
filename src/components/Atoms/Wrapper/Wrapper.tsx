import React, { FC, ReactNode } from 'react';

type BaseProps = {
	as?: 'div' | 'body' | 'section' | 'article' | 'footer';
	children: ReactNode;
	wrapperStyles?: string;
};

export const Wrapper: FC<BaseProps> = ({ children, as: Tag = 'div', ...props }) => {
	const wrapperDefaults = ['z-0, bg-slate-100'];
	return (
		<Tag className={[wrapperDefaults, props.wrapperStyles].join(' ')} {...props}>
			{children}
		</Tag>
	);
};
