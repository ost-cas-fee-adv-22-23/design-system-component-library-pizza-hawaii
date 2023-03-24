import React, { FC, ReactNode, Children } from 'react';

/*
 * Type
 */

type TGrid = {
	/**
	 * HTML tag to render a grid (div, ul, ol)
	 */
	as?: 'div' | 'ul' | 'ol';

	/**
	 * Child Nodes
	 */
	children: ReactNode;

	/**
	 * variants of grid: row or col
	 */
	variant: 'row' | 'col';

	/**
	 * optional: a gap between the grid items can be added: choose the size of the gap: 'S','M','L','XL'
	 */
	gap?: 'S' | 'M' | 'L' | 'XL';

	/**
	 * optional: the grid can be centered
	 */
	centered?: boolean;

	/**
	 * optional: the grid can be wrapped below a screen size: choose the screen size: 'sm','md','lg'
	 */
	wrapBelowScreen?: 'sm' | 'md' | 'lg';

	/**
	 * optional: the grid can have a margin below: choose the size of the margin: 'XXS','XS','S','M','L'
	 */
	marginBelow?: 'XXS' | 'XS' | 'S' | 'M' | 'L';
};

/*
 * Styles
 */
export const GridBaseStyle = 'flex w-full';

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

export const GridWrapBelowScreenStyleMap: Record<string, string> = {
	sm: 'md:flex-wrap',
	md: 'md:flex-wrap',
	lg: 'md:flex-wrap',
};

/**
 * Typography for Grid Component
 *
 * @param { string } as - HTML tag to render a grid (div, ul, ol)
 * @param { string } variant - variants of grid: row or col
 * @param { string } [gap] - choose the size of the gap: 'S','M','L','XL'
 * @param { boolean } [centered] - the grid can be centered
 * @param { string } [marginBelow] - choose the size of the margin: 'XXS','XS','S','M','L'
 * @param { string } [wrapBelowScreen] - choose the screen size: 'sm','md','lg'
 * @param { ReactNode } children - Child Nodes
 *
 * @example <Grid as="div" gap="M" marginBelow="M" variant="col" wrapBelowScreen="md" >{{children}}</Grid>
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

/**
 * Helpers
 */

// Parse children to wrap them in li tags if the grid is a list
function parseChildren(children: ReactNode, tag: string): ReactNode {
	if (tag === 'ul' || tag === 'ol') {
		return wrappChildrensInListItems(children);
	}
	return children;
}

// Wrap children in li tags
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
