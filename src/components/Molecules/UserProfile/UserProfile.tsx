import React, { FC } from 'react';

import { User } from '../../../types/User';

/**
 * User Icon with image from loged in user
 */

type BaseProps = {
	size: 'S' | 'M' | 'L' | 'XL';
	user: User;
};

export const UserProfile: FC<BaseProps> = ({ size, user }) => {
	const baseStyle = ['rounded-full', 'self-center', 'overflow-hidden'];

	const sizeStyle = [`M-size-${size.toLowerCase()}`];

	return (
		<div className={[...sizeStyle, ...baseStyle].join(' ')}>
			<img src={user.avatar} alt={user.userName} />
		</div>
	);
};
