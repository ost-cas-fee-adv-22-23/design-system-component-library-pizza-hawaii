import React, { FC } from 'react';
import { Label } from '../../Atoms/Label/Label';
import { Icon } from '../../Atoms/Icon/index';
import copy from 'copy-to-clipboard';

/*
 * Settings
 */

export const possibleShareButtonSchemas = ['slate', 'violet', 'pink'] as const;

/*
 * Type
 */

type TShareButtonColorSchema = (typeof possibleShareButtonSchemas)[number];

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
};

export const ColorSchemeShareButtonMap: Record<string, string> = {
	slate: 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 hover:rounded-full active:bg-slate-100 active:rounded-full ',
	violet: 'text-violet-600 hover:text-violet-600 hover:bg-violet-50 hover:rounded-full active:bg-violet-50 active:rounded-full',
	pink: ' text-pink-400 hover:text-pink-600 hover:bg-pink-50 hover:rounded-full active:bg-pink-50 active:rounded-full',
};

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

export const ShareButton: FC<TShareButton> = ({ colorScheme, isActive, buttonInitialText, buttonActiveText }) => {
	const styles = ['flex items-center leading-none', ColorSchemeShareButtonMap[colorScheme]];
	const copyToText = (): void => {
		copy('Text to copy');
	};

	return (
		<button type="button" className={[styles, 'gap-2 py-2 px-3'].join(' ')} onClick={copyToText}>
			{isActive ? (
				<>
					<span className="leanding-none">
						<Icon name="share" />
					</span>
					<Label as="span" size="M" className="leading-4">
						{buttonActiveText}
					</Label>
				</>
			) : (
				<>
					<span className="leading-4">
						<Icon name="share" />
					</span>
					<Label as="span" size="M" className="leading-4">
						{buttonInitialText}
					</Label>
				</>
			)}
		</button>
	);
};
