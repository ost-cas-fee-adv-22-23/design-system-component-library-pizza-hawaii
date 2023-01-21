import React, { FC, ReactNode, Children } from 'react';
import dompurify from 'dompurify';

/**
 * Settings
 */

export const possibleRichtextTags = ['div', 'section', 'article'] as const;
export const possibleRichtextSizes = ['M', 'L'] as const;

/*
 * Type
 */

type TRichtextTag = typeof possibleRichtextTags[number];
type TRichtextSize = typeof possibleRichtextSizes[number];

type TRichtext = {
	/**
	 * as: select HTML tags for rendering
	 */
	as?: TRichtextTag;
	/**
	 * size: select text size 'M' or 'L'
	 */
	size: TRichtextSize;
	/**
	 * child nodes
	 */
	children: ReactNode;
	/**
	 * optional: define allowed tags within an Allowed Tags Array
	 * default: 'a' and 'p'.
	 */
	allowedTags?: string[];
};

/*
 * Styles
 */

export const RichtextSizeMap: Record<string, string> = {
	M: 'text-l',
	L: 'text-xl',
};

export const RichtextChildStyleMap: string[] = [
	// Paragraphs
	'[&>p]:block [&>p]:mb-2 [&>p:last-child]:mb-0',

	// Links
	'[&>p>a]:inline-block [&>p>a]:text-violet-600 [&>p>a:hover]:text-violet-400',
];

/**
 * @param { TRichtextTag } HTML Element to render the Richttext Component
 * @param { TRichtextSize } sizes for text-sizes
 * @param { children } React children node
 * @param { allowedTags } stringArray for Allowed Tags to render within the RichtText.
 * @returns <Richtext allowedTags={["p", "a"]} size="M" as="p" >My Richtext goes here...</Richtext>
 */

/*
 * Helpers
 */

function sanitizeContent(content: string, allowedTags: string[]): string {
	content = dompurify.sanitize(content, { ALLOWED_TAGS: allowedTags });

	if (!/<\/?[a-z][\s\S]*>/i.test(content)) {
		content = `<p>${content}</p>`;
	}

	return content;
}

export const Richtext: FC<TRichtext> = ({ children, as: Tag = 'div', size = 'M', allowedTags = ['p', 'a'], ...rest }) => {
	const style = [
		'block font-medium leading-normal',
		RichtextSizeMap[size], // Text size
		...RichtextChildStyleMap, // Child styles
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
