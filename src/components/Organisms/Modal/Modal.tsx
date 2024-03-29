import React, { FC, ReactNode, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';

import { Headline } from '../../Atoms/Headline/Headline';
import { Icon } from '../../Atoms/Icon';

/*
 * Type
 */

type TModal = {
	/**
	 * optional title of modal window
	 */
	title?: string;
	/**
	 * React node
	 */
	children: ReactNode;
	/**
	 * isVisible boolean to use visibility of modal component
	 */
	isVisible: boolean;
	/**
	 * optional us an id (string)
	 */
	id?: string;
	/**
	 * on Close method: empty function as standard for closing the modal window. change to something else if you like.
	 */
	onClose: () => void;
};

/*
 * Styles
 */

const ModalBaseStyle = [
	'fixed inset-0 z-50',
	'flex justify-center items-center',
	'min-w-[600px] p-0 overflow-hidden mx-auto sm:m-0 sm:w-screen sm:h-screen sm:min-w-0',
	'rounded-2xl shadow-lg sm:rounded-none sm:shadow-none',
	'bg-white dark:bg-slate-900 text-slate-900 dark:text-white',
];
const ModalOverlayStyle = ['fixed inset-0 z-40', 'opacity-25 bg-violet-600'];
const ModalBodyStyle = [
	'relative flex flex-col w-full overflow-x-hidden max-w-screen max-h-screen min-w-full sm:rounded-none sm:shadow-none sm:h-full',
];
const ModalHeaderStyle = [
	'flex items-center justify-between gap-4',
	'px-8 py-6 sm:px-4 sm:py-4',
	'bg-violet-600 text-white',
];

/**
 * Modal Component
 *
 * @param { string } title - title of modal window
 * @param { ReactNode } children - React node
 * @param { boolean } isVisible - isVisible `boolean` to use visibility of modal component
 * @param { string } id - optional us an id (string)
 * @param { function } onClose - on Close method: empty function as standard for closing the modal window. change to something else if you like.
 *
 * @example <Modal title="Modal Title" isVisible={true} onClose={() => {}}>Modal Content</Modal>
 */

export const Modal: FC<TModal> = ({ title, children = 'Modal Content', isVisible = false, id = useId(), onClose }) => {
	const modalRef = useRef(null);

	useEffect(() => {
		if (!isVisible || !modalRef.current) {
			return;
		}

		// Save focus before modal
		const focusBeforeModal = document.activeElement as HTMLElement;

		// Get all focusable elements inside modal
		const focusableElements = Array.from(
			(modalRef.current as HTMLElement).querySelectorAll(
				'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]'
			)
		) as HTMLElement[];

		// Focus first focusable element
		focusableElements[0].focus();

		// Handle Tab key
		const onKeyDown = (e: KeyboardEvent): void => {
			// Close modal on Escape
			if (e.key === 'Escape') {
				onClose && onClose();
			}
			// Handle Tab key
			if (e.key === 'Tab') {
				modalRef && modalRef.current && handleTabKey(e, focusableElements);
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('keydown', onKeyDown);

			// Restore focus
			focusBeforeModal && focusBeforeModal.focus();
		};
	}, [isVisible]);

	return createPortal(
		<>
			<dialog className={ModalBaseStyle.join(' ')} aria-labelledby={`${id}-title`} aria-modal="true">
				<div className={ModalBodyStyle.join(' ')} ref={modalRef}>
					<div className={ModalHeaderStyle.join(' ')}>
						{title ? (
							<Headline level={3} as="h2" id={`${id}-title`}>
								{title}
							</Headline>
						) : (
							<div>
								<span className="sr-only">Modal</span>
							</div>
						)}
						<button className="inline-flex items-center p-4 -m-4 transition hover:rotate-90" onClick={onClose}>
							<Icon name="cancel" />
							<span className="sr-only">Close Modal</span>
						</button>
					</div>

					<div className="relative p-8 sm:p-4 flex-auto overflow-y-auto">{children}</div>
					<button className="sr-only focus:not-sr-only bg-black p-2 text-white" onClick={onClose}>
						Close Modal
					</button>
				</div>
			</dialog>
			<div className={ModalOverlayStyle.join(' ')}></div>
		</>,
		document.body
	);
};

const handleTabKey = (e: KeyboardEvent, focusableElements: HTMLElement[]): void => {
	const firstElement = focusableElements[0] as HTMLElement;
	const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

	if (!e.shiftKey) {
		// Direction: forward
		// If focus is on the last focusable element, move focus to the first focusable element
		if (document.activeElement === lastElement) {
			firstElement.focus();
			e.preventDefault();
		}
	} else {
		// Direction: backward
		// If focus is on the first focusable element, move focus to the last focusable element
		if (document.activeElement === firstElement) {
			lastElement.focus();
			e.preventDefault();
		}
	}
};
