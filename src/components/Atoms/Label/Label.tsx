import React, { FC, LabelHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type BaseLabelProps = {
	as?: 'span' | 'label' | 'p' | 'legend';
	size: 'S' | 'M' | 'L' | 'XL';
	className?: string;
	children: ReactNode;
};

type HTMLSpanProps = BaseLabelProps & {
	as: 'span' | 'p' | 'legend';
} & HTMLAttributes<HTMLButtonElement>;

type HTMLLabelProps = BaseLabelProps & {
	as: 'label';
} & LabelHTMLAttributes<HTMLLabelElement>;

type LabelType = HTMLSpanProps | HTMLLabelProps;

const sizeMap: Record<BaseLabelProps['size'], string> = {
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
