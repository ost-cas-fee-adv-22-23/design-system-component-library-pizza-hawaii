import React, { FC } from 'react';

import { User } from '../../../types/User';

/**
 * User Icon with image from loged in user
 */

type BaseProps = {
	size: 'S' | 'M' | 'L' | 'XL';
	user: User;
};

const sizeMap: Record<BaseProps['size'], string> = {
	XL: 'h-40 w-40 border-4 rounded-full bg-slate-10',
	L: 'h-24 w-24 border-4 rounded-full bg-slate-100',
	M: 'h-16 w-16 border-4 rounded-full bg-slate-100',
	S: 'h-10 w-10 ',
};

export const UserProfile: FC<BaseProps> = ({ size = 'M', user }) => {
	const baseStyle = ['rounded-full', 'self-center', 'overflow-hidden'];

	const sizeStyle = [sizeMap[size]];

	return (
		<div className={[...sizeStyle, ...baseStyle].join(' ')}>
			<img src={user.avatar} alt={user.userName} />
		</div>
	);
};
