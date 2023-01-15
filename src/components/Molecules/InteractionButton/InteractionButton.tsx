import React, { FC, useEffect, useState } from 'react';

import { Icon } from '../../Atoms/Icon';

type Props = {
	// onClick: () => void;
	colorScheme: string;
	count: number;
};

export const ColorSchemeMap: Record<string, string> = {
	slate: 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 hover:rounded-full',
	violet: 'text-violet-600 hover:text-violet-600 hover:bg-violet-50 hover:rounded-full',
	pink: ' text-pink-400 hover:text-pink-600 hover:bg-pink-50 hover:rounded-full',
};

export const InteractionButton: FC<Props> = ({ count, colorScheme }) => {
	const styles = ['flex items-center', ColorSchemeMap[colorScheme]];
	// TODO: solve that useState - or not
	const [comments, setComments] = useState(count);

	useEffect(() => {
		setComments(count);
	}, [count]);

	return (
		<div>
			<button className={[styles].join(' ')}>
				<div className={[styles, 'gap-x-xs', 'py-2', 'px-3'].join(' ')}>
					{count === 0 ? (
						<>
							<Icon name="mumble" />
							<span>Comment</span>
						</>
					) : (
						<>
							<span className={`text-${colorScheme}-600 `}>
								<Icon name="mumble" />
							</span>
							<span>
								{count}
								{count === 1 ? ' Comment' : ' Comments'}
							</span>
						</>
					)}
				</div>
			</button>
		</div>
	);
};
