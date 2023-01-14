import React, { FC, ReactNode, Children } from 'react';
import dompurify from 'dompurify';

/*
 * Type
 */

type TRichtext = {
	as?: 'div' | 'section' | 'article';
	size: keyof typeof RichtextSizeMap;
	children: ReactNode;
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
