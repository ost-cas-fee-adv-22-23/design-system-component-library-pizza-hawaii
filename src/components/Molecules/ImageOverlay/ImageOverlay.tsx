import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import { Icon } from '../../Atoms/Icon';
/*
 * Image Overlay
 * if a image has interaction functionality (like open in fullscreen, in a lightbox)
 * you can specify an icon for the overlay here.
 * also specify a preset for Dimension of the image
 */

/*
 * Type
 */

type TImageOverlay = {
	/**
	 * React Children: here most probably text
	 */
	children: ReactNode;

	/**
	 * buttonLabel: string for the button because of accessibility
	 */
	buttonLabel: string;

	/**
	 * onClick: function to execute on click
	 */
	onClick: () => void;

	/**
	 * borderRadius: string for the border radius of the button
	 */
	borderRadius?: 'M' | 'L';
};

type TImageOverlayProps = (TImageOverlay & { preset: keyof typeof ImageOverlayTypeMap }) &
	ButtonHTMLAttributes<HTMLButtonElement>;

/*
 * Style
 */

const ImageOverlayButtonStyle = [
	'flex items-center justify-center',
	'absolute inset-0 z-10',
	'bg-violet-600 bg-opacity-50 text-white',
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

const ImageOverlayBorderRadiusMap = {
	M: 'rounded-lg',
	L: 'rounded-3xl',
};

/**
 * Typography for ImageOverlay Component
 *
 * @param {ReactNode} children - React Children
 * @param {string} preset - preset for the image overlay
 * @param {string} buttonLabel - label for the button
 * @param {string} borderRadius - border radius for the button
 * @param {function} onClick - function to execute on click
 *
 * @example <ImageOverlay preset="edit" buttonLabel="edit" onClick={() => {}}><img src="https://picsum.photos/id/28/1600/1587/" alt="image" /></ImageOverlay>
 */

export const ImageOverlay: FC<TImageOverlayProps> = ({ children, buttonLabel, borderRadius = 'M', ...props }) => {
	const { preset, ...rest } = props;
	const { icon, iconAnimationClass } = ImageOverlayTypeMap[preset];

	const ImageOverlayStyle = [
		'block relative overflow-hidden',
		borderRadius && ImageOverlayBorderRadiusMap[borderRadius],
	].join(' ');

	return (
		<div className={ImageOverlayStyle}>
			<button type="button" className={[...ImageOverlayButtonStyle].join(' ')} {...rest}>
				<span className={iconAnimationClass}>
					<Icon name={icon} size="XL" />
				</span>
				<span className="sr-only">{buttonLabel}</span>
			</button>
			{children}
		</div>
	);
};
