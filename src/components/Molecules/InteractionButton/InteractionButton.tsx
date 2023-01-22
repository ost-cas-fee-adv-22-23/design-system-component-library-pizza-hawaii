import React, { FC } from 'react';
import { Label } from '../../Atoms/Label/Label.stories';

import { Icon } from '../../Atoms/Icon';
/*
 * Settings
 */

export const possibleInteractionButtonColors = ['slate', 'pink', 'violet'] as const;

/*
 * Type
 */

export type TInteractionButtonColors = (typeof possibleInteractionButtonColors)[number];

export type Props = {
	/**
	 * choose a colorscheme for the button number and icon
	 */
	colorScheme: TInteractionButtonColors;
	/**
	 * count: provide integer number or undefined. amount countable things
	 */
	count?: number;
	/**
	 * initial buttontext for singular or no counts 'comment'
	 */
	buttonTextSingular: string;
	/**
	 * buttontext if count is more than 1. example: 'comments'
	 */
	buttonTextPlural: string;
	/**
	 * icon name to be displayed when state of count below 1.
	 */
	iconNameSingle: string;
	/**
	 * icon name to be displayed when state of count is equal or above 1
	 */
	iconNamePlural: string;
};

/*
 * Styles
 */

export const ColorSchemeMap: Record<string, string> = {
	slate: 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 hover:rounded-full',
	violet: 'text-violet-600 hover:text-violet-600 hover:bg-violet-50 hover:rounded-full',
	pink: ' text-pink-400 hover:text-pink-600 hover:bg-pink-50 hover:rounded-full',
};

/**
 * Typography for InteractionButton Component
 * @param { count } count number to be visualized before the button
 * @param { buttonTextSingular } string initial buttontext for singular or no counts 'comment'
 * @param { buttonTextPlural } string buttontext if count is more than 1. example: 'comments'
 * @param { colorScheme } ColorSchema of the Button: pink, violet, or slate
 * @param { iconNameSingle } icon name to be displayed when state of count below 1
 * @param { iconNamePlural } icon name to be displayed when state of count is equal or above 1
 * @example
 * return (
 *   <InteractionButton 
  buttonTextPlural="Likes"
  buttonTextSingular="Like"
  colorScheme="violet"
  count={3}
  iconNamePlural="heart_filled"
  iconNameSingle="heart_fillable"
/>
)
*/

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
		<button className={[styles, 'gap-1', 'py-2', 'px-3'].join(' ')}>
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
		</button>
	);
};
