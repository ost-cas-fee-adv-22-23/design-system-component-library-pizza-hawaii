import React, { FC, Children, ReactNode } from 'react';
import './Richtext.css';

type BaseProps = {
	as?: 'div' | 'section';
	size: 'M' | 'L';
	className?: string;
	children: ReactNode;
	settings: Record<string, string | boolean>;
};

const sizeMap: Record<BaseProps['size'], string> = {
	M: 'text-l',
	L: 'text-xl',
};

export const Richtext: FC<BaseProps> = ({ children, as: Tag = 'div', size = 'M', className = '', settings, ...props }) => {
	const style = ['Richtext inline-block leading-none font-medium leading-normal', sizeMap[size], className].join(' ');
	console.log(children);
	return <Tag className={style} {...props} dangerouslySetInnerHTML={{ __html: children }}></Tag>;
};
