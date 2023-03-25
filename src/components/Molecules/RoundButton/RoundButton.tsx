import React, { FC, ButtonHTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon';
import { ButtonBaseStyle, ButtonColorMap } from '../Button';

/*
 * Type
 */

type TRoundButton<T> = {
	/**
	 * HTML tag to render a button
	 */
	component?: FC<T>;

	/**
	 * label for screenreaders
	 */
	buttonLabel: string;

	/**
	 * colorscheme for RoundButton background: slate, violet or gradient
	 */
	colorScheme: 'slate' | 'violet' | 'gradient';

	/**
	 * specify a Icon-name string from the IconLibrary
	 */
	icon?: string;
} & Omit<T, 'className'>;

/*
 * Style
 */

const RoundButtonBaseStyle: string[] = [...ButtonBaseStyle, 'inline-flex', 'p-4 rounded-full w-auto'];
export const RoundButtonColorMap: Record<string, string> = ButtonColorMap;

/**
 * RoundButton Component
 *
 * @param {string} component - Component to render a link (e.g. NextLink)
 * @param {string} buttonLabel - label for screenreaders
 * @param {string} colorScheme - colorscheme for RoundButton background: slate, violet or gradient
 * @param {string} icon - specify a Icon-name string from the IconLibrary
 * @param {any} props - all other props will be spreaded to the HTML Tag
 *
 * @example <RoundButton buttonLabel="Mumble" as="button" colorScheme="violet" icon="mumble" />
 */
export function RoundButton<
	T extends {
		className?: string;
	} = ButtonHTMLAttributes<HTMLElement>
>({ component, colorScheme = 'violet', icon = 'mumble', buttonLabel, ...props }: TRoundButton<T>): JSX.Element {
	const Tag = component || 'button';
	const style = [...RoundButtonBaseStyle, RoundButtonColorMap[colorScheme]];

	return (
		<Tag
			className={[...style].join(' ')}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
		>
			<span className="sr-only">{buttonLabel}</span>
			{icon ? <Icon name={icon} /> : null}
		</Tag>
	);
};
