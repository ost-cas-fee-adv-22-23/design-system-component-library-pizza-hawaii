import React, { FC, useState } from 'react';
import { InteractionButton } from '../../Molecules/InteractionButton/InteractionButton';
import copy from 'copy-to-clipboard';

/*
 * Type
 */

export type TCopyToClipboardButton = {
	/**
	 * default Button text
	 */
	defaultButtonText: string;
	/**
	 * active Button text
	 */
	activeButtonText: string;

	/**
	 * text to share
	 * @default window.location.href
	 * @example
	 * return (
	 * <CopyToClipboardButton shareText="https://www.google.com">
	 * 	Share
	 * </CopyToClipboardButton>
	 * )
	 */
	shareText?: string;
};

/*
 * Style
 */

/**
 * Typography for Headlines Component
 * @param { defaultButtonText } defaultButtonText text of Button in initial state Child nodes
 * @param { activeButtonText } activeButtonText text of Button in active state Child node
 * @param { shareText } shareText text to share
 * @default window.location.href
 * @example
 * return (
 *   <CopyToClipboardButton activeButtonText="Link copied" defaultButtonText="Copy Link" colorScheme="pink" />
 * )
 */

export const CopyToClipboardButton: FC<TCopyToClipboardButton> = ({
	defaultButtonText,
	activeButtonText,
	shareText = window?.location?.href,
}) => {
	const [isActive, setIsActive] = useState(false);

	let timeout: NodeJS.Timeout;

	const copyToText = (): void => {
		copy(shareText);
		setIsActive(true);
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			setIsActive(false);
		}, 2000);
	};

	const buttonProps = {
		buttonText: isActive ? activeButtonText : defaultButtonText,
		colorScheme: 'slate',
		iconName: 'share',
		isActive,
		onClick: copyToText,
	};

	return <InteractionButton as="button" type="button" {...buttonProps} />;
};
