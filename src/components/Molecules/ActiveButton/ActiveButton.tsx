import React, { FC } from 'react';

import { Icon } from '../../Atoms/Icon';

export type Props = {
	colorScheme: string;
	isActive: boolean;
	buttonInitialText: string;
	buttonActiveText: string;
};

export const ColorSchemeActiveButtonMap: Record<string, string> = {
	slate: 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 hover:rounded-full active:bg-slate-100 active:rounded-full ',
	violet: 'text-violet-600 hover:text-violet-600 hover:bg-violet-50 hover:rounded-full active:bg-violet-50 active:rounded-full',
	pink: ' text-pink-400 hover:text-pink-600 hover:bg-pink-50 hover:rounded-full active:bg-pink-50 active:rounded-full',
};

export const ActiveButton: FC<Props> = ({ colorScheme, isActive, buttonInitialText, buttonActiveText }) => {
  const styles = ['flex items-center', ColorSchemeActiveButtonMap[colorScheme]];
	// TODO: font sizes correct

	return (
		<div>
			<button className={[styles].join(' ')}>
				<div className={[styles, 'gap-x-xs', 'py-2', 'px-3'].join(' ')}>
					{isActive ? (
						<>
							<span>
								<Icon name="share" />
							</span>
							<span>{buttonActiveText}</span>
						</>
					) : (
						<>
							<span className={``}>
								<Icon name="share" />
							</span>
							<span>{buttonInitialText}</span>
						</>
					)}
				</div>
			</button>
		</div>
	);
};
