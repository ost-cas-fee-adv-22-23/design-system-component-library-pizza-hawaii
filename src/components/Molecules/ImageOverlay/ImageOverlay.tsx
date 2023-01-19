import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import { Icon, TIconName } from '../../Atoms/Icon';

/*
 * Type
 */

export type TImageOverlay = {
	/**
	 * children: React component image
	 */
	children: ReactNode;
	/**
	 * always provide a button label string for A11y screenreader reason.
	 */
	buttonLabel: string;
	/**
	 * onClick funcion is a empty function: edit this to your needs.
	 */
	onClick: () => void;
};

export type TImageOverlayPreset = {
	icon: TIconName;
	animation: string;
};

export type TImageOverlayProps = (TImageOverlay & { preset: keyof typeof ImageOverlayTypeMap }) &
	ButtonHTMLAttributes<HTMLButtonElement>;

/*
 * Style
 */

const ImageOverLayButtonStyle = [
	'flex items-center justify-center',
	'absolute inset-0 z-10',
	'bg-violet-600 bg-opacity-50 text-white rounded-2xl',
	'opacity-0 hover:opacity-100',
	'transition-all duration-500 ease-out',
	'group',
];

const ImageOverlayTypeMap = {
	edit: {
		icon: 'edit',
		iconAnimationClass: [
			'containing-svg:transition-all containing-svg:duration-300 containing-svg:origin-bottom-right containing-svg:rotate-6',
			'containing-svg:group-hover:rotate-0',
		].join(' '),
	},
	enlarge: {
		icon: 'fullscreen',
		iconAnimationClass: [
			'containing-svg-path:transition-all containing-svg-path:duration-300 containing-svg-path-1:translate-x-[-1px] containing-svg-path-1:translate-y-[1px] containing-svg-path-2:translate-x-[1px] containing-svg-path-2:translate-y-[-1px]',
			'containing-svg-path:group-hover:translate-x-0 containing-svg-path:group-hover:translate-y-0',
		].join(' '),
	},
};

export const ImageOverlay: FC<TImageOverlayProps> = ({ children, buttonLabel, ...props }) => {
	const { preset, ...rest } = props;
	const { icon, iconAnimationClass } = ImageOverlayTypeMap[preset];

	return (
		<div className="block relative">
			<button type="button" className={[...ImageOverLayButtonStyle].join(' ')} {...rest}>
				<span className={iconAnimationClass}>
					<Icon name={icon} size="XL" />
				</span>
				<span className="sr-only">{buttonLabel}</span>
			</button>
			{children}
		</div>
	);
};
