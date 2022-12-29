import React, { FC, ReactNode } from 'react';

type BaseProps = {
	as?: 'div' | 'body' | 'section' | 'article' | 'footer';
	children: ReactNode;
	className?: string;
};

// TODO fix and improve that
const Wrapper: FC<BaseProps> = ({ children, as: Tag = 'div', ...props }) => {
	console.log('props wrapper', props);
	const wrapperStyles = ['bg-black, w-24'];
	return (
		<Tag className={wrapperStyles} {...props}>
			{children}
		</Tag>
	);
};

export default Wrapper;