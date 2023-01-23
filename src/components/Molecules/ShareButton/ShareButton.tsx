import React, { FC } from 'react';
import { Label } from '../../Atoms/Label/Label';
import { Icon } from '../../Atoms/Icon';
import { ColorSchemeMap, IconColorSchemeMap } from '../InteractionButton/InteractionButton';
import copy from 'copy-to-clipboard';

/*
 * Settings
 */

export const possibleShareButtonSchemas = ['slate', 'violet', 'pink'] as const;

/*
 * Type
 */

export type TShareButtonColorSchema = (typeof possibleShareButtonSchemas)[number];

export type TShareButton = {
	/**
	 * Choose one of the color Scheme: 'slate', 'violet' or 'pink'
	 */
	colorScheme: TShareButtonColorSchema;
	/**
	 * default is false, but you can also define it a active
	 */
	isActive: boolean;
	/**
	 * inactive initial text of Button
	 */
	buttonInitialText: string;
	/**
	 * activated Button text. if nothing should change, use the same term as in inactive button.
	 */
	buttonActiveText: string;

	/**
	 * text to share
	 * @default window.location.href
	 * @example
	 * return (
	 * <ShareButton shareText="https://www.google.com">
	 * 	Share
	 * </ShareButton>
	 * )
	 */
	shareText?: string;
};

/*
 * Style
 */

const ShareButtonBaseStyle = 'flex items-center justify-center leading-none gap-y-0 gap-x-2';

export const ShareButtonColorSchemeMap: Record<string, Record<string, string>> = ColorSchemeMap;

/**
 * Typography for Headlines Component
 * @param { colorSchema } Colorschema of the button
 * @param { isActive } state of Button
 * @param { buttonInitialText } text of Button in initial state Child nodes
 * @param { buttonActiveText } text of Button in active state Child node
 * @example
 * return (
 *   <ShareButton buttonActiveText="Link copied" buttonInitialText="Copy Link" colorScheme="pink" />
 * )
 */

export const ShareButton: FC<TShareButton> = ({
	colorScheme,
	isActive,
	buttonInitialText,
	buttonActiveText,
	shareText = window?.location?.href,
	...props
}) => {
	const copyToText = (): void => {
		copy(shareText);
	};

	return (
		<button
			onClick={copyToText}
			className={[ShareButtonBaseStyle, ColorSchemeMap[isActive ? 'active' : 'default'][colorScheme]].join(' ')}
			{...props}
		>
			<span className={IconColorSchemeMap[isActive ? 'active' : 'default'][colorScheme]}>
				<Icon name="share" />
			</span>
			<Label as="span" size="M">
				{isActive ? buttonActiveText : buttonInitialText}
			</Label>
		</button>
	);
};
