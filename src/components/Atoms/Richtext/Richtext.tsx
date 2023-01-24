import React, { FC, ReactNode, Children } from 'react';
import xss, { IWhiteList } from 'xss';

/**
 * Settings
 */

export const defaultAllowedTags: IWhiteList = {
	p: [],
	a: ['href', 'title', 'target'],
};

/*
 * Type
 */

export type TRichtext = {
	/**
	 * HTML tag to render a richtext (div, section, article)
	 */
	as?: 'div' | 'section' | 'article';

	/**
	 * sizes for text-sizes: `L`, `M`
	 */
	size: 'M' | 'L';

	/**
	 * React Children or HTML string
	 */
	children: ReactNode;

	/**
	 * optional: define allowed tags within an Allowed Tags/Attributes Map.
	 * default: 'a': ['href', 'title', 'target'], 'p': [].
	 */
	allowedTags?: IWhiteList;
};

/*
 * Styles
 */

export const RichtextSizeMap: Record<string, string> = {
	M: 'text-l',
	L: 'text-xl',
};

export const RichtextChildStyles: string[] = [
	// Paragraphs
	'[&>p]:block [&>p]:mb-2 [&>p:last-child]:mb-0',

	// Links
	'[&>p>a]:inline-block [&>p>a]:text-violet-600 [&>p>a:hover]:text-violet-400',
];

/**
 * Richtext Component
 *
 * @param { string } as - HTML tag to render
 * @param { string } size - text size options of this label
 * @param { ReactNode } children - React Children or HTML string
 *
 * @example	<Richtext as='div' size='M'>My <a href="">Richtext</a> goes here...</Richtext>
 */

export const Richtext: FC<TRichtext> = ({
	children,
	as: Tag = 'div',
	size = 'M',
	allowedTags = defaultAllowedTags,
	...rest
}) => {
	const style = [
		'block font-medium leading-normal',
		RichtextSizeMap[size], // Text size
		...RichtextChildStyles, // Child styles
	].join(' ');

	const props = {
		className: style,
		...rest,
	};

	if (Children.count(children) === 1 && typeof children === 'string') {
		return <Tag {...props} dangerouslySetInnerHTML={{ __html: sanitizeContent(children, allowedTags) }} />;
	}

	return <Tag {...props}>{children}</Tag>;
};

/*
 * Helpers
 */

function sanitizeContent(content: string, allowedTags: IWhiteList): string {
	content = xss(content, {
		whiteList: allowedTags,
		stripIgnoreTag: true,
	});

	if (!/<\/?[a-z][\s\S]*>/i.test(content)) {
		content = `<p>${content}</p>`;
	}

	return content;
}
