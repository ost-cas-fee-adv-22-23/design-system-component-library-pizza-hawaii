import React, { FC, ReactNode, ButtonHTMLAttributes, Children } from 'react';
import { Icon } from '../../Atoms/Icon';
import { Label } from '../../Atoms/Label';

/*
 * Type
 */

type TNaviButton<T> = {
	/**
	 * Choose a HTML tag as Navigation Button:
	 */
	as?: FC<T>;
	/**
	 * Icon name from the Icon library
	 */
	icon?: string;
	/**
	 * React Node children: Buttontext
	 */
	children: ReactNode;
} & Omit<T, 'className'>;

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
export function NaviButton<
	T extends {
		className?: string;
		type?: 'button' | 'submit' | 'reset';
		title?: string;
	} = ButtonHTMLAttributes<HTMLElement>
>({ children, as, icon, ...props }: TNaviButton<T>): JSX.Element {
	const Tag = as || 'button';

	if (Tag === 'button') {
		props.type = 'button';
	}

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
