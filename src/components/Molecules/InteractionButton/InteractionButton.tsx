import React, { FC } from 'react';

import { Icon } from '../../Atoms/Icon';

type Props = {
	colorScheme: string;
	count: number;
	buttonTextSingular: string;
	buttonTextPlural: string;
	iconNameSingle: string;
	iconNamePlural: string;
};

export const ColorSchemeMap: Record<string, string> = {
	slate: 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 hover:rounded-full',
	violet: 'text-violet-600 hover:text-violet-600 hover:bg-violet-50 hover:rounded-full',
	pink: ' text-pink-400 hover:text-pink-600 hover:bg-pink-50 hover:rounded-full',
};

export const InteractionButton: FC<Props> = ({
	count,
	colorScheme,
	buttonTextSingular,
	buttonTextPlural,
	iconNameSingle,
	iconNamePlural,
}) => {
	const styles = ['flex items-center', ColorSchemeMap[colorScheme]];
	// TODO: check and correct all fonts sizes and paddings and alignings

	return (
		<div>
			<button className={[styles].join(' ')}>
				<div className={[styles, 'gap-x-xs', 'py-2', 'px-3'].join(' ')}>
					{count === 0 ? (
						<>
							<span className={`text-${colorScheme}-600 `}>
								<Icon name={iconNameSingle} />
							</span>
							<span>{buttonTextSingular}</span>
						</>
					) : (
						<>
							<span className={`text-${colorScheme}-600 `}>
								<Icon name={iconNamePlural} />
							</span>
							<span>{count}</span>
							<span>{count === 1 ? buttonTextSingular : buttonTextPlural}</span>
						</>
					)}
				</div>
			</button>
		</div>
	);
};
