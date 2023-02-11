import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon';
import { ButtonBaseStyle, ButtonColorMap } from '../Button';

/*
 * Type
 */

type TRoundButton = {
	/**
	 * HTML tag to render a button (button, a)
	 */
	as?: 'button' | 'a';

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
};

type HTMLButtonProps = TRoundButton & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = TRoundButton & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
type TButtonProps = HTMLButtonProps | LinkButtonProps;

/*
 * Style
 */

export const RoundButtonBaseStyle: string[] = [...ButtonBaseStyle, 'inline-flex', 'p-4 rounded-full w-auto'];
export const RoundButtonColorMap: Record<string, string> = ButtonColorMap;

/**
 * RoundButton Component
 *
 * @param {string} as - choose HTML Tag to render the RoundButton (button, a)
 * @param {string} buttonLabel - label for screenreaders
 * @param {string} colorScheme - colorscheme for RoundButton background: slate, violet or gradient
 * @param {string} icon - specify a Icon-name string from the IconLibrary
 * @param {any} props - all other props will be spreaded to the HTML Tag
 *
 * @example <RoundButton buttonLabel="Mumble" as="button" colorScheme="violet" icon="mumble" />
 */

export const RoundButton: FC<TButtonProps> = ({
	as: Tag = 'button',
	colorScheme = 'violet',
	icon = 'mumble',
	buttonLabel,
	...props
}) => {
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
