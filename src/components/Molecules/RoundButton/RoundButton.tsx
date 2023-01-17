import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon';
import { ButtonBaseStyle, ButtonColorMap } from '../Button';

/*
 * Type
 */
export type TRoundButtonColor = keyof typeof ButtonColorMap;

type TButton = {
	buttonLabel: string;
	as?: 'button' | 'a';
	colorScheme: TRoundButtonColor;
	icon?: string;
};

type HTMLButtonProps = TButton & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = TButton & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;

type TButtonProps = HTMLButtonProps | LinkButtonProps;

/*
 * Style
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
