import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon/Icon';
import { Label } from '../../Atoms/Label/Label';

import '../../../components/Components-base.css';

type BaseButtonProps = {
	label: string;
	as: 'button' | 'a';
	size: 'M' | 'L' | 'round';
	color: 'slate' | 'violet' | 'gradient';
	icon?: string;
	onClick?: (e: MouseEvent) => void;
};

type HTMLButtonProps = BaseButtonProps & {
	as: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = BaseButtonProps & {
	as: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = HTMLButtonProps | LinkButtonProps | any; // Todo: remove any

export const Button: FC<ButtonProps> = ({ label, as: Tag = 'a', color, size, icon = 'mumble', ...props }) => {
	const style = [`M-Button-base`, `M-Button-${size?.toLowerCase()}`, `M-Button-${color?.toLowerCase()}`];

	return (
		<Tag className={['Button', ...style].join(' ')} {...props}>
			<Label as="span" className="Button--inner" size="M">
				{label}
			</Label>
			{icon ? <Icon name={icon} /> : null}
		</Tag>
	);
};
