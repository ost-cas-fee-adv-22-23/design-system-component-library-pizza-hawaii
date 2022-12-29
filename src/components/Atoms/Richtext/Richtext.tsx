import React, { FC, Children, ReactNode } from 'react';
import parseRichText from '../../../utils/parseRichText';
import './Richtext.css';

type BaseProps = {
	as?: 'div' | 'section';
	size: 'M' | 'L';
	className?: string;
	children: ReactNode;
};

const sizeMap: Record<BaseProps['size'], string> = {
	M: 'text-l',
	L: 'text-xl',
};

export const Richtext: FC<BaseProps> = ({ children, as: Tag = 'div', size = 'M', className = '', ...props }) => {
	const style = [
		'Richtext inline-block leading-none font-medium text-slate-900 leading-normal',
		sizeMap[size],
		className,
	].join(' ');

	let content = children;
	if (Children.count(children) === 1 && typeof children === 'string') {
		const html = parseRichText(children);
		content = <div dangerouslySetInnerHTML={{ __html: html }}></div>;
	}
	return (
		<Tag className={style} {...props}>
			{content}
		</Tag>
	);
};
