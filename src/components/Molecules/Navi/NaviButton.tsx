import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Icon } from '../../Atoms/Icon/Icon';
import { Label } from '../../Atoms/Label/Label';

/*
 * Type
 */

type TNaviButton = {
	as: 'button' | 'a';
	icon?: string;
};

type HTMLButtonProps = TNaviButton & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = TNaviButton & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;

type NaviButtonProps = LinkButtonProps | HTMLButtonProps;

export const NaviButton: FC<NaviButtonProps> = ({ as: Tag, icon, ...props }) => {
	const style =
		'inline-flex flex-col items-center justify-center min-w-[56px] min-h-[56px] gap-1 p-2 rounded-lg text-white bg-violet-600 hover:bg-violet-700';

	let content = props.children;

	if (props.children && typeof props.children === 'string') {
		content = (
			<Label as="span" size="S">
				{props.children}
			</Label>
		);
	}

	return (
		<li className="flex-auto">
			<Tag
				className={style}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				{...(props as any)}
			>
				{icon ? <Icon name={icon} /> : null}
				{content}
			</Tag>
		</li>
	);
};
