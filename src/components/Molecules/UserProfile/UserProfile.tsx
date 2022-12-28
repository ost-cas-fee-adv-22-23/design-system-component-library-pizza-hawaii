import React, { FC } from 'react';

import { User } from '../../../types/User';
import { Image } from '../../Atoms/Image/Image';

/**
 * User Icon with image from loged in user
 */

export type BaseProps = {
	size: 'S' | 'M' | 'L' | 'XL';
	border?: boolean;
	user: User;
	href?: string;
};

const sizeMap: Record<BaseProps['size'], string> = {
	S: 'h-10 w-10',
	M: 'h-16 w-16',
	L: 'h-24 w-24',
	XL: 'h-40 w-40',
};
const imgMap: Record<BaseProps['size'], number> = {
	S: 40,
	M: 64,
	L: 96,
	XL: 160,
};

export const UserProfile: FC<BaseProps> = ({ size = 'M', border, href, user }) => {
	const baseStyle = [
		'inline-flex',
		'rounded-full',
		'self-center',
		'overflow-hidden',
		'bg-purple-200',
		border && 'border-6',
	];

	return (
		<div className={[...baseStyle, sizeMap[size]].join(' ')}>
			{href && (
				<a href={href} className="transition duration-300 ease-in-out hover:scale-110">
					<Image src={user.avatar} alt={user.userName} width={imgMap[size]} height={imgMap[size]} />
				</a>
			)}
			{!href && <Image src={user.avatar} alt={user.userName} width={imgMap[size]} height={imgMap[size]} />}
		</div>
	);
};
