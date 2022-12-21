import React, { FC, LabelHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
	as?: 'span' | 'label';
	size: 'S' | 'M' | 'L' | 'XL';
	className?: string;
	children: ReactNode;
};

type LabelType = BaseProps & LabelHTMLAttributes<HTMLLabelElement>;

const sizeMap: Record<BaseProps['size'], string> = {
	S: 'text-sm',
	M: 'text-base',
	L: 'text-xl',
	XL: 'text-2xl ',
};

export const Label: FC<LabelType> = ({ children = 'Label', as: Tag = 'span', size = 'M', className = '', ...props }) => {
	const style = ['inline-block leading-none font-semibold', sizeMap[size], className].join(' ');

	return (
		<Tag className={style} {...props}>
			{children}
		</Tag>
	);
};
