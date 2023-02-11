import React, { FC } from 'react';
import { default as IconLib, IconNames as IcoNames, TIconLibEntry } from './IconLib';

/*
 * Type
 */

export type TIconSize = 'S' | 'M' | 'L' | 'XL';
export type TIconName = TIconLibEntry;

type TIcon = {
	/*
	 * Size of the icon
	 * @default: M
	 */
	size?: TIconSize;

	/*
	 * Name of the icon
	 */
	name: TIconName;
};

/*
 * Styles
 */

export const IconSizeMap = {
	S: ['text-[11px]'],
	M: ['text-[16px]'],
	L: ['text-[28px]'],
	XL: ['text-[36px]'],
};

/**
 * Icon Component
 *
 * @param { TIconSize } size - Size of the icon
 * @param { TIconName } name - Name of the icon
 *
 * @example	<Icon name='arrow-right' size='M' />
 */

export const Icon: FC<TIcon> = ({ size = 'M', name = IcoNames[0], ...props }) => {
	const style = [...(IconSizeMap[size] || IconSizeMap.M), 'containing-svg:fill-current containing-svg:w-[1em]'];
	const Tag = IconLib[name];
	return (
		<span className={['inline-flex', ...style].join(' ')}>
			<Tag />
		</span>
	);
};
