import React, { FC, useState } from 'react';
import { InteractionButton } from '../InteractionButton/InteractionButton';
import copy from 'copy-to-clipboard';

/*
 * Type
 */

export type TShareButton = {
	/**
	 * inactive initial text of Button
	 */
	defaultButtonText: string;
	/**
	 * activated Button text. if nothing should change, use the same term as in inactive button.
	 */
	activeButtonText: string;

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

/**
 * Typography for Headlines Component
 * @param { defaultButtonText } text of Button in initial state Child nodes
 * @param { activeButtonText } text of Button in active state Child node
 * @example
 * return (
 *   <ShareButton activeButtonText="Link copied" defaultButtonText="Copy Link" colorScheme="pink" />
 * )
 */

export const ShareButton: FC<TShareButton> = ({
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
