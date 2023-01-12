import React, { FC } from 'react';
import { default as IconLib, IconNames as IcoNames } from './IconLib';

/*
 * Type
 */

type TIconSize = keyof typeof sizeStyle;

type TIcon = {
	size?: TIconSize;
	name: string;
};

type TIconProps = (TIcon & { size?: TIconSize }) | TIcon;

/*
 * Styles
 */

const sizeStyle = {
	S: ['text-[11px]'],
	M: ['text-[16px]'],
	L: ['text-[28px]'],
};

export const Icon: FC<TIconProps> = ({ size = 'M', name = IcoNames[0], ...props }) => {
	const style = [...(sizeStyle[size] || sizeStyle.M), '[&>svg]:fill-current [&>svg]:w-[1em]'];

	return (
		<span
			className={['inline-flex', ...style].join(' ')}
			{...props}
			dangerouslySetInnerHTML={{ __html: IconLib[name] }}
		></span>
	);
};
