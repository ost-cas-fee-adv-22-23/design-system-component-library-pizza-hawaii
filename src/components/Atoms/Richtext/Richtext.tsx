import React, { FC, ReactNode, Children } from 'react';

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

	let content = children;
	if (Children.count(children) === 1 && typeof children === 'string') {
		if (!/<\/?[a-z][\s\S]*>/i.test(children)) {
			return <p>{children}</p>;
		}
		content = <div dangerouslySetInnerHTML={{ __html: children }}></div>;
	}
	return (
		<Tag className={style} {...props}>
			{content}
		</Tag>
	);
};
