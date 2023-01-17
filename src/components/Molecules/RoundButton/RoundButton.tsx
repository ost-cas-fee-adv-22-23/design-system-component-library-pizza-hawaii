import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

import { Icon } from '../../Atoms/Icon';
import { ButtonBaseStyle, ButtonColorMap } from '../Button';

/*
 * Type
 */

type BaseButtonProps = {
	buttonLabel: string;
	as?: 'button' | 'a';
	color: keyof typeof ButtonColorMap;
	icon?: string;
};

type HTMLButtonProps = BaseButtonProps & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseButtonProps & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = HTMLButtonProps | LinkButtonProps;

export const RoundButton: FC<ButtonProps> = ({ as: Tag = 'button', color = 'violet', icon = 'mumble', buttonLabel, ...props }) => {
	const style = [...ButtonBaseStyle, 'p-4 rounded-full w-auto', ButtonColorMap[color]];

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
