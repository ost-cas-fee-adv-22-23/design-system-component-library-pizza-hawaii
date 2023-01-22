import React, { FC, ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, Children } from 'react';
import { Icon } from '../../Atoms/Icon';
import { Label } from '../../Atoms/Label';

/*
 * Settings
 */

export const possibleNaviButtonTags = ['button', 'a'] as const;

/*
 * Type
 */

export type TNaviButtonTag = (typeof possibleNaviButtonTags)[number];

export type TNaviButton = {
	/**
	 * Choose a HTML tag as Navigation Button:
	 */
	as: TNaviButtonTag;
	/**
	 * Icon name from the Icon library
	 */
	icon?: string;
	/**
	 * React Node children: Buttontext
	 */
	children: ReactNode;
};
/**
 * If the button is rendered as button tag, use this one
 */
type HTMLButtonProps = TNaviButton &
	HTMLAttributes<HTMLElement> & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * LinkButtonProps: if the button is rendered as a tag, use this
 */
type LinkButtonProps = TNaviButton & HTMLAttributes<HTMLElement> & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
/**
 * generic: LinkButton or HTML Button props
 */
type NaviButtonProps = LinkButtonProps | HTMLButtonProps;

/*
 * Styles
 */

const style = [
	'inline-flex flex-col gap-1 items-center justify-center',
	'min-w-[56px] min-h-[56px] sm:min-w-[40px] sm:min-h-[40px]',
	'p-2 sm:p-1 rounded-lg',
	'text-white ',
	'bg-violet-600 hover:bg-violet-700',
	'group',
];

export const NaviButton: FC<NaviButtonProps> = ({ as: Tag = 'a', children, icon, ...props }) => {
	if (Children.count(children) === 1 && typeof children === 'string') {
		children = (
			<span className="leading-none sm:sr-only">
				<Label as="span" size="S">
					{children}
				</Label>
			</span>
		);
	}

	return (
		<Tag
			className={style.join(' ')}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
		>
			{icon && <Icon name={icon} />}
			{children}
		</Tag>
	);
};
