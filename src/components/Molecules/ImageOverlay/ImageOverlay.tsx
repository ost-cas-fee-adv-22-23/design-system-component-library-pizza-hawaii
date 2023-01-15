import React, { FC, ReactNode } from 'react';
import { Icon } from '../../Atoms/Icon';

/*
 * Type
 */

type TImageOverlay = {
	icon: string;
	children: ReactNode;
	onClick: () => void;
};

/*
 * Style
 */

const baseOverlay = [
	'flex items-center justify-center',
	'absolute inset-0',
	'text-white',
	'rounded-2xl',
	'opacity-0 bg-violet-600',
	'transition-all duration-300',
	'hover:opacity-100 hover:bg-opacity-50',
	'z-10',
];

export const ImageOverlay: FC<TImageOverlay> = ({ children, ...props }) => {
	return (
		<div className="block relative">
			<button type="button" className={[...baseOverlay].join(' ')} {...props}>
				<Icon name={props.icon} size="M" />
				<span className="sr-only">View</span>
			</button>
			{children}
		</div>
	);
};
