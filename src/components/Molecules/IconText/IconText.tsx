import React, { FC, ReactNode } from 'react';

import { Icon, TIconSize, TIconName } from '../../Atoms/Icon/Icon';

/*
 * Type
 */

type TIconTextSize = keyof typeof IconTextSizeMap;
type TIconTextColor = keyof typeof IconTextColorMap;

type TIconText = {
	/**
	 * React Children: here most probably text
	 */
	children: ReactNode;

	/**
	 * text size options of this button (S, M, L)
	 */
	size?: TIconTextSize;

	/**
	 * color scheme options of this button (slate, violet, gradient)
	 */
	colorScheme: TIconTextColor;

	/**
	 * icon name to render
	 */
	icon: TIconName;
};

/*
 * Style
 */

const IconTextBaseStyle: string[] = [
	'flex items-center',
	'leading-none',
	'rounded-full',
	'overflow-hidden text-ellipsis mb-[-0.2em] pb-[0.2em]',
];

export const IconTextSizeMap: Record<string, string> = {
	S: 'text-sm gap-1 px-2 py-1',
	M: 'text-base gap-2 px-3 py-2',
	L: 'text-xl gap-2 px-4 py-3',
};

export const IconTextColorMap: Record<string, string> = {
	slate: 'text-slate-500 hover:text-slate-600 hover:bg-slate-100 ',
	violet: 'text-violet-600 hover:text-violet-900 hover:bg-violet-50 ',
	pink: ' text-pink-400 hover:text-pink-600 hover:bg-pink-50',
};

/**
 * IconText component
 *
 * @param {string} children - React Children: here most probably text
 * @param {string} as - HTML tag to render a button (button, a, span)
 * @param {string} size - text size options of this button (S, M, L)
 * @param {string} colorScheme - color scheme options of this button (slate, violet, gradient)
 * @param {string} icon - icon name to render
 *
 * @example <IconText icon="arrowRight" colorScheme="slate" size="M">IconText</IconText>
 * /


/*
 * State
 */

export const IconText: FC<TIconText> = ({ children = 'IconText', colorScheme = 'slate', size = 'M', icon, ...props }) => {
	const styles = [
		...IconTextBaseStyle,
		IconTextSizeMap[size],
		IconTextColorMap[colorScheme],
		'group',
		'transition-all duration-300',
	];

	return (
		<span
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
			className={styles.join(' ')}
		>
			<Icon name={icon} size={size as TIconSize} />
			{children}
		</span>
	);
};
