import React, { FC } from 'react';
import { Label } from '../../Atoms/Label/Label.stories';

import { Icon } from '../../Atoms/Icon';

type Props = {
	colorScheme: string;
	count?: number;
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
	count = 0,
	colorScheme,
	buttonTextSingular,
	buttonTextPlural,
	iconNameSingle,
	iconNamePlural,
}) => {
	const styles = ['flex items-center leading-none', ColorSchemeMap[colorScheme]];

	return (
		<div>
			<button className={[styles].join(' ')}>
				<div className={[styles, 'gap-1', 'py-2', 'px-3'].join(' ')}>
					{count === 0 ? (
						<>
							<span className="leading-4 gap-2">
								<Icon name={iconNameSingle} />
							</span>
							<Label as="span" size="M" className="leading-4 gap-2">
								{buttonTextSingular}
							</Label>
						</>
					) : (
						<>
							<span className={`text-${colorScheme}-600 leading-4`}>
								<Icon name={iconNamePlural} />
							</span>
							<Label as="span" size="M" className="leading-4 gap-1">
								{count}
							</Label>
							<Label as="span" size="M" className="leading-4 gap-0.5">
								{count === 1 ? buttonTextSingular : buttonTextPlural}
							</Label>
						</>
					)}
				</div>
			</button>
		</div>
	);
};
