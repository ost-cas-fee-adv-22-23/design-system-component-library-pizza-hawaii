import React, { FC, ReactNode } from 'react';
import { Icon, TIconName } from '../../Atoms/Icon';

/*
 * Type
 */

export type TImageOverlay = {
	children: ReactNode;
	icon: TIconName;
	buttonLabel: string;
	onClick: () => void;
};

/*
 * Style
 */

const ImageOverLayButtonStyle = [
	'flex items-center justify-center',
	'absolute inset-0',
	'rounded-2xl',
	'bg-violet-600 text-white',
	'opacity-0',
	'transition-all duration-300',
	'hover:opacity-100 hover:bg-opacity-50',
	'z-10',
];

export const ImageOverlay: FC<TImageOverlay> = ({ children, icon, buttonLabel, ...props }) => (
	<div className="block relative">
		<button type="button" className={[...ImageOverLayButtonStyle].join(' ')} {...props}>
			<Icon name={icon} size="M" />
			<span className="sr-only">{buttonLabel}</span>
		</button>
		{children}
	</div>
);
