import React, { FC, ReactNode, Children } from 'react';

/*
 * Type
 */

export type TGrid = {
	/**
	 * specify the html markup of your grid: 'div', 'ul','ol'
	 */
	as?: 'div' | 'ul' | 'ol';
	/**
	 * React Children nodes content of your grid
	 */
	children: ReactNode;
	/**
	 * variants of grid direction: row or col
	 */
	variant: keyof typeof GridVariantStyleMap;
	/**
	 * variants of grid gap: 'S', 'M', 'L', 'XL'
	 */
	gap?: keyof typeof GridGapStyleMap;
	/**
	 * optional: center the grid: boolean
	 */
	centerd?: boolean;
	/**
	 * optional: a wrap below screen: choose the size of that wrapper: 'sm', 'md', 'lg'
	 */
	wrapBelowScreen?: 'sm' | 'md' | 'lg';
	/**
	 * optional: a margin below the grid can be added: choose the size of the margin-below: 'XXS','XS','S','M','L'
	 */
	marginBelow?: keyof typeof GridMarginBelowStyleMap;
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

export const Grid: FC<TGrid> = ({
	as: Tag = 'div',
	children,
	variant = 'col',
	gap = 'M',
	centerd,
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
		centerd && 'items-center',
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
