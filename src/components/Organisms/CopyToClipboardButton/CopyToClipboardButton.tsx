import React, { FC, useState } from 'react';
import { InteractionButton } from '../../Molecules/InteractionButton/InteractionButton';
import copy from 'copy-to-clipboard';

/*
 * Type
 */

type TCopyToClipboardButton = {
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
	 * @default window.location.href (current url)
	 */
	shareText?: string;
};

/**
 * CopyToClipboardButton Component
 *
 * @param { string } defaultButtonText - default Button text
 * @param { string } activeButtonText - active Button text
 * @param { string } shareText - text to share
 *
 * @example <CopyToClipboardButton shareText="https://www.google.com">Share</CopyToClipboardButton>
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
		iconName: 'share',
		isActive,
		onClick: copyToText,
	};

	return <InteractionButton as="button" type="button" colorScheme="slate" {...buttonProps} />;
};
