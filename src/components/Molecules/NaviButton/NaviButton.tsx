import React, { FC, ReactNode } from 'react';
import { Icon } from '../../Atoms/Icon/Icon';
import { Label } from '../../Atoms/Label/Label';

type BaseProps = {
	children: ReactNode;
	as: 'button' | 'a';
	size: 'round' | 'M' | 'L';
	color: 'slate' | 'violet' | 'gradient';
	icon?: string;
	href?: string;
	onClick?: () => void;
};

const defaultProps: Partial<BaseProps> = {
	as: 'button',
	size: 'M',
	color: 'violet',
	icon: 'mumble',
	onClick: undefined,
};

export const NaviButton: FC<BaseProps> = ({ as: Tag = 'a', children = 'NaviButton', icon = 'profile', ...props }) => {
	const style =
		'inline-flex flex-col items-center justify-center min-w-[56px] min-h-[56px] gap-1 p-2 rounded-lg text-white bg-violet-600 hover:bg-violet-700';

	const typeAttr = {
		button: {
			type: 'button',
		},
		a: {
			href: '#',
		},
		...props,
	};

	let content;
	if (children && typeof children[0] === 'string') {
		content = <Label size="S">{children}</Label>;
	} else {
		content = children;
	}

	return (
		<Tag className={style} {...typeAttr[Tag]}>
			{icon ? (
				<Icon name={icon} />
			) : null}
			{content}
		</Tag>
	);
};

NaviButton.defaultProps = defaultProps;
