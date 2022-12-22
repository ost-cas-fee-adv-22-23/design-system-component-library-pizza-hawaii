import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon/Icon';
import { Label } from '../../Atoms/Label/Label';

// TODO resolve that or get rid of that rule
// eslint-disable-next-line import/no-unresolved
import '/src/components/Components-base.css';

type BaseButtonProps = {
	label: string;
	as: 'button' | 'a';
	size: 'round' | 'M' | 'L';
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

type ButtonProps = HTMLButtonProps | LinkButtonProps;

const defaultProps: Partial<ButtonProps> = {
	as: 'a',
	size: 'M',
	color: 'violet',
	icon: 'mumble',
	onClick: undefined,
};

export const Button: FC<ButtonProps> = ({ label, as: Tag = 'a', color, size, icon, ...props }) => {
	const style = [`M-Button-base`, `M-Button-${size.toLowerCase()}`, `M-Button-${color.toLowerCase()}`];

	return (
		<Tag className={['Button', ...style].join(' ')} {...props}>
			<Label as="span" className="Button--inner" size="M">
				{label}
			</Label>
			{icon ? <Icon name={icon} /> : null}
		</Tag>
	);
};

Button.defaultProps = defaultProps;
