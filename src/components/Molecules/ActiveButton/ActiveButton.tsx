import React, { FC } from 'react';
import { Label } from '../../Atoms/Label/Label';
import { Icon } from '../../Atoms/Icon';
import copy from 'copy-to-clipboard';

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
	const styles = ['flex items-center leading-none', ColorSchemeActiveButtonMap[colorScheme]];
	const copyToText = (): void => {
		copy('Text to copy');
	};

	return (
		<div>
			<button type="button" className={[styles].join(' ')} onClick={copyToText}>
				<div className={[styles, 'gap-2 py-2 px-3'].join(' ')}>
					{isActive ? (
						<>
							<span className="leanding-none">
								<Icon name="share" />
							</span>
							<Label as="span" size="M" className="leading-4">
								{buttonActiveText}
							</Label>
						</>
					) : (
						<>
							<span className="leading-4">
								<Icon name="share" />
							</span>
							<Label as="span" size="M" className="leading-4">
								{buttonInitialText}
							</Label>
						</>
					)}
				</div>
			</button>
		</div>
	);
};
