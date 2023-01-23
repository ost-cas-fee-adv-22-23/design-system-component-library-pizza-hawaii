import React, { FC, ReactNode, Children } from 'react';
/*
 * Settings
 */

export const possibleGridTags = ['div', 'ul', 'ol'] as const;
export const possibleGridGapTags = ['S', 'M', 'L', 'XL'] as const;
export const possibleGridVariantStyles = ['col', 'row'] as const;
export const possibleGridwrapBelowScreenStyles = ['sm', 'md', 'lg'] as const;
export const possibleGridMarginBelowStyles = ['XXS', 'XS', 'S', 'M', 'L'] as const;

/*
 * Type
 */

type TGridTag = (typeof possibleGridTags)[number];
type TGridGapTag = (typeof possibleGridGapTags)[number];
type TGridVariantStyle = (typeof possibleGridVariantStyles)[number];
type TGridWrapBelowScreenStyles = (typeof possibleGridwrapBelowScreenStyles)[number];
type TGridMarginBelowStyles = (typeof possibleGridMarginBelowStyles)[number];

export type TGrid = {
	/**
	 * specify the html markup of your grid: 'div', 'ul','ol'
	 */
	as?: TGridTag;
	/**
	 * React Children nodes content of your grid
	 */
	children: ReactNode;
	/**
	 * variants of grid direction: row or col
	 */
	variant: TGridVariantStyle;
	/**
	 * variants of grid gap (distance of differ)
	 */
	gap?: TGridGapTag;
	/**
	 * optional: centers the Grid Component: boolean
	 */
	centered?: boolean;
	/**
	 * optional: a wrap below screen: choose the size of that wrapper: 'sm', 'md', 'lg'
	 */
	wrapBelowScreen?: TGridWrapBelowScreenStyles;
	/**
	 * optional: a margin below the grid can be added: choose the size of the margin-below: 'XXS','XS','S','M','L'
	 */
	marginBelow?: TGridMarginBelowStyles;
};

/*
 * Styles
 */
export const GridBaseStyle = 'flex';

export const GridVariantStyleMap: Record<string, string> = {
	row: 'flex-row',
	col: 'flex-col',
};

export const GridGapStyleMap: Record<string, string> = {
	S: 'gap-x-4 gap-y-2 sm:gap-x-2',
	M: 'gap-x-8 gap-y-4 sm:gap-x-4',
	L: 'gap-x-12 gap-y-6 sm:gap-x-8',
	XL: 'gap-x-16 gap-y-8 sm:gap-x-12',
};

export const GridMarginBelowStyleMap: Record<string, string> = {
	XXS: 'mb-2',
	XS: 'mb-4',
	S: 'mb-6',
	M: 'mb-8',
	L: 'mb-16',
};

// `${wrapBelowScreen}:flex-wrap` would be nicer, but it doesn't work with Tailwind
export const GridWrapBelowScreenStyleMap: Record<string, string> = {
	sm: 'md:flex-wrap',
	md: 'md:flex-wrap',
	lg: 'md:flex-wrap',
};

/**
 * Typography for Grid Component
 * @param { TGridTag } TGridTag: `div`, `ol`, `ul` HTML tag to render
 * @param { ReactNode } children Child nodes
 * @param { variant } variants: `col` or `row` of Grid direction
 * @param { gap } gap: `S` | `M` | `L` | `XL` distance between the grid elements
 * @param { centered } centered: booleant, if you like the grid centered of the parent component
 * @param { wrapBelowScreen } wrapBelowScreen: `sm`, `md`, `lg`a wrap below screen: choose the size of that wrapper: 'sm', 'md', 'lg'
 * @param { marginBelow } marginBelow optional: 'XXS','XS','S','M','L' optional: a margin below the grid can be added: choose the size of the margin-below: 'XXS','XS','S','M','L'
 */

export const Grid: FC<TGrid> = ({
	as: Tag = 'div',
	children,
	variant = 'col',
	gap = 'M',
	centered,
	marginBelow,
	wrapBelowScreen,
	...rest
}) => {
	const style = [
		GridBaseStyle,
		GridVariantStyleMap[variant],
		gap && GridGapStyleMap[gap],
		marginBelow && GridMarginBelowStyleMap[marginBelow],
		wrapBelowScreen && GridWrapBelowScreenStyleMap[wrapBelowScreen],
		centered && 'items-center',
	].join(' ');

	const props = {
		...rest,
		className: style,
	};

	children = parseChildren(children, Tag);

	return <Tag {...props}>{children}</Tag>;
};
function parseChildren(children: ReactNode, tag: string): ReactNode {
	if (tag === 'ul' || tag === 'ol') {
		return wrappChildrensInListItems(children);
	}
	return children;
}

function wrappChildrensInListItems(children: ReactNode): ReactNode {
	return Children.map(children, (child) => {
		if (typeof child === 'string') {
			return <li>{child}</li>;
		}

		if (child && typeof child === 'object' && 'type' in child) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const childType = (child as any).type;

			if (childType === 'li') {
				return child;
			}

			if (child.type.toString() === React.Fragment.toString()) {
				return Children.map(child.props.children, (c) => {
					return <li>{c}</li>;
				});
			}
			return <li>{child}</li>;
		}

		return child;
	});
}
