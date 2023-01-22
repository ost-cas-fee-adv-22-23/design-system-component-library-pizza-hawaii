import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon';
import { ButtonBaseStyle, ButtonColorMap } from '../Button';

/*
 * Settings
 */

export const possibleRoundButtonTags = ['button', 'a'] as const;
export const possibleRoundButtonColorschemes = ['slate', 'violent', 'gradient'] as const;

/*
 * Type
 */

export type TRoundButtonColor = (typeof possibleRoundButtonColorschemes)[number];
export type TRoundButtonTags = (typeof possibleRoundButtonTags)[number];

type TButton = {
	/**
	 * provide also here a button label for A11y and Screenreader reason
	 */
	buttonLabel: string;
	/**
	 * choose HTML Tag to render the RoundButton
	 */
	as?: TRoundButtonTags;
	/**
	 * colorscheme for RoundButton background: slate, violet or gradient
	 */
	colorScheme: TRoundButtonColor;
	/**
	 * specify a Icon-name string from the IconLibrary
	 */
	icon?: string;
};

type HTMLButtonProps = TButton & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = TButton & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
type TButtonProps = HTMLButtonProps | LinkButtonProps;

/*
 * Style
 */

/**
 * Typography for Button Component
 * @param { buttonLabel } string for Button label or only-screenreader
 * @param { as } HTML tag to render for roundbutton
 * @param { colorScheme } ColorSchema of the Buttonbackground color
 * @param { icon } icon name of IconLibrary
 * @example
 * return (
 *  <RoundButton icon="edit">
  		Button Text
		</RoundButton>
 * )
 */

export const RoundButtonBaseStyle: string[] = [...ButtonBaseStyle, 'inline-flex', 'p-4 rounded-full w-auto'];
export const RoundButtonColorMap: Record<string, string> = ButtonColorMap;

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
