import React, { FC, ReactNode } from 'react';
import './Richtext.css';

type BaseProps = {
	as?: 'div' | 'section';
	size: 'M' | 'L';
	children: string | ReactNode;
};

const sizeMap: Record<BaseProps['size'], string> = {
	M: 'text-l',
	L: 'text-xl',
};

export const Richtext: FC<BaseProps> = ({ children, as: Tag = 'div', size = 'M', ...props }) => {
	const style = ['Richtext inline-block leading-none font-medium leading-normal', sizeMap[size]].join(' ');
	return <Tag className={style} {...props} dangerouslySetInnerHTML={{ __html: children as string }}></Tag>;
};
