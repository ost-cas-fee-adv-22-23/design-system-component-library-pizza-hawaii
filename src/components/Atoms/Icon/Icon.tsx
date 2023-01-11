import React, { FC } from 'react';
import { default as IconLib, IconNames as IcoNames } from './IconLib';

type IconProps = {
	size?: 'S' | 'M' | 'L';
	name: string;
};

const sizeStyle = {
	S: ['w-3'],
	M: ['w-s'],
	L: ['w-[28px]'],
};

export const Icon: FC<IconProps> = ({ size = 'M', name = IcoNames[0], ...props }) => {
	const style = [...(sizeStyle[size] || sizeStyle.M)];

	return (
		<span
			className={['Icon', 'inline-flex', ...style].join(' ')}
			{...props}
			dangerouslySetInnerHTML={{ __html: IconLib[name] }}
		></span>
	);
};
