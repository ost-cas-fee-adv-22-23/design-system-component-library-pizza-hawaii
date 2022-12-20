import React, { FC, ReactNode } from 'react';
import { Icon } from '../../Atoms/Icon/Icon';
import { Label } from '../../Atoms/Label/Label';

type NaviButtonProps = {
	children: ReactNode;
	as?: 'button' | 'a';
	icon?: string;
	href?: string;
	type?: string;
	onClick?: () => void;
};

const defaultProps: Partial<NaviButtonProps> = {
	as: 'a',
	children: 'NaviButton',
	icon: 'profile',
};

export const NaviButton: FC<NaviButtonProps> = ({ as: Tag = 'a', children, icon, onClick, ...props }) => {
	const style =
		'inline-flex flex-col items-center justify-center min-w-[56px] min-h-[56px] gap-1 p-2 rounded-lg text-white bg-violet-600 hover:bg-violet-700';

	const typeAttr = {
		button: {
			type: props.type || 'button',
		},
		a: {
			href: props.href || '#',
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
		<li className="flex-auto">
			<Tag className={style} {...(Tag ? typeAttr[Tag] : {})} onClick={onClick}>
				{icon ? <Icon name={icon} /> : null}
				{content}
			</Tag>
		</li>
	);
};

NaviButton.defaultProps = defaultProps;
