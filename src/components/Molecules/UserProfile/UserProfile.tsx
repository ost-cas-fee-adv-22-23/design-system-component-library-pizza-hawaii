import React, { FC } from 'react';

import { User } from '../../../types/User';
import { Image } from '../../Atoms/Image/Image';
import { Button } from '../Button/Button';

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
		'bg-purple-200',
		border && 'border-6',
	];

	if (href) {
		if (size !== 'XL') {
			return (
				<div className={[...baseStyle, 'overflow-hidden', sizeMap[size]].join(' ')}>
					<a href={href} className="transition duration-300 ease-in-out hover:scale-110">
						<Image src={user.avatar} alt={user.userName} width={imgMap[size]} height={imgMap[size]} />
					</a>
				</div>
			);
		} else {
			return (
				<div className={[...baseStyle, sizeMap[size], 'relative'].join(' ')}>
					<div className="rounded-full overflow-hidden">
						<Image src={user.avatar} alt={user.userName} width={imgMap[size]} height={imgMap[size]} />
					</div>
					<div className="absolute bottom-0 right-0">
						<Button as="a" size="round" icon="edit" color="slate">
							Edit User Image
						</Button>
					</div>
				</div>
			);
		}
	}

	return (
		<div className={[...baseStyle, 'overflow-hidden', sizeMap[size]].join(' ')}>
			<Image src={user.avatar} alt={user.userName} width={imgMap[size]} height={imgMap[size]} />
		</div>
	);
};
