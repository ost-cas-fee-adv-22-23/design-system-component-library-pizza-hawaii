import React, { FC } from 'react';
import { default as IconLib, IconNames as IcoNames, TIconLibEntry } from './IconLib';

/*
 * Type
 */

export type TIconSize = keyof typeof IconSizeMap;
export type TIconName = TIconLibEntry;

type TIcon = {
	size?: TIconSize;
	name: TIconName;
};

type TIconProps = (TIcon & { size?: TIconSize }) | TIcon;

/*
 * Styles
 */

export const IconSizeMap = {
	S: ['text-[11px]'],
	M: ['text-[16px]'],
	L: ['text-[28px]'],
};

export const Icon: FC<TIconProps> = ({ size = 'M', name = IcoNames[0], ...props }) => {
	const style = [...(IconSizeMap[size] || IconSizeMap.M), '[&>svg]:fill-current [&>svg]:w-[1em]'];

	return (
		<span
			className={['inline-flex', ...style].join(' ')}
			{...props}
			dangerouslySetInnerHTML={{ __html: IconLib[name] }}
		></span>
	);
};
