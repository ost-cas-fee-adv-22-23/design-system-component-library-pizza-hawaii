import React, { FC } from 'react';
import { Label } from '../../Atoms/Label/Label.stories';

import { Icon } from '../../Atoms/Icon';
/*
 * Settings
 */

export const possibleInteractionButtonColors = ['slate', 'violet', 'pink'] as const;

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

const InteractionButtonBaseStyle = 'flex items-center gap-y-0 gap-x-2 rounded-full py-2 px-3 leading-none group';

export const ColorSchemeMap: Record<string, Record<string, string>> = {
	default: {
		slate: ['text-slate-600', 'hover:text-slate-600 hover:bg-slate-100'].join(' '),
		pink: ['text-slate-600', 'hover:text-pink-600 hover:bg-pink-50'].join(' '),
		violet: ['text-slate-600', 'hover:text-violet-600 hover:bg-violet-50'].join(' '),
	},
	active: {
		slate: ['text-slate-600', 'hover:text-slate-600 hover:bg-slate-100'].join(' '),
		pink: ['text-pink-900', 'hover:text-pink-600 hover:bg-pink-50'].join(' '),
		violet: ['text-slate-600', 'hover:text-violet-600 hover:bg-violet-50'].join(' '),
	},
};

export const IconColorSchemeMap: Record<string, Record<string, string>> = {
	default: {
		slate: [].join(' '),
		pink: ['group-hover:text-pink-600'].join(' '),
		violet: [].join(' '),
	},
	active: {
		slate: [].join(' '),
		pink: ['text-pink-600', 'group-hover:text-pink-600'].join(' '),
		violet: ['text-violet-600', 'group-hover:text-violet-600'].join(' '),
	},
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
	...props
}) => {
	return (
		<button
			className={[InteractionButtonBaseStyle, ColorSchemeMap[count > 0 ? 'active' : 'default'][colorScheme]].join(' ')}
			{...props}
		>
			<span className={IconColorSchemeMap[count > 0 ? 'active' : 'default'][colorScheme]}>
				<Icon name={count === 0 ? iconNameSingle : iconNamePlural} />
			</span>
			<Label as="span" size="M">
				{count > 0 && <span>{count} </span>}
				{count < 2 ? buttonTextSingular : buttonTextPlural}
			</Label>
		</button>
	);
};
