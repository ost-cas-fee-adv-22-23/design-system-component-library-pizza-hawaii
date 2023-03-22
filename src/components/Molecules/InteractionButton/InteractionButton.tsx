import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Label } from '../../Atoms/Label/Label.stories';
import { Icon } from '../../Atoms/Icon';

/*
 * Type
 */

type TInteractionButton<T> = {
	/**
	 * HTML tag to render a button (button, a)
	 * @default 'button'
	 */
	as?: FC<T>;

	/**
	 * color scheme options of this button (slate, violet, pink)
	 */
	colorScheme: 'slate' | 'violet' | 'pink';

	/**
	 * buttonText: text to render
	 */
	buttonText: string;

	/**
	 * iconName: icon name to render
	 */
	iconName: string;

	/**
	 * isActive: boolean to set active state
	 * @default false
	 */
	isActive?: boolean;
} & Omit<T, 'className'>;

/*
 * Styles
 */

const InteractionButtonBaseStyle = 'flex items-center gap-y-0 gap-x-2 rounded-full leading-none group';

export const InteractionButtonColorSchemeMap: Record<string, Record<string, string>> = {
	default: {
		slate: ['text-slate-600', 'hover:text-slate-600 hover:bg-slate-100'].join(' '),
		pink: ['text-slate-600', 'hover:text-pink-600 hover:bg-pink-50'].join(' '),
		violet: ['text-slate-600', 'hover:text-violet-600 hover:bg-violet-50'].join(' '),
	},
	active: {
		slate: ['text-slate-600', 'hover:text-slate-600 hover:bg-slate-100'].join(' '),
		pink: ['text-pink-900', 'hover:text-pink-600 hover:bg-pink-50'].join(' '),
		violet: ['text-slate-600', 'hover:text-violet-600 hover:bg-violet-50'].join(' '),
	},
};

const InteractionButtonIconColorSchemeMap: Record<string, Record<string, string>> = {
	default: {
		slate: [].join(' '),
		pink: ['group-hover:text-pink-600'].join(' '),
		violet: [].join(' '),
	},
	active: {
		slate: [].join(' '),
		pink: ['text-pink-600', 'group-hover:text-pink-600'].join(' '),
		violet: ['text-violet-600', 'group-hover:text-violet-600'].join(' '),
	},
};

/**
 * Typography for InteractionButton Component
 * @param { buttonText } buttonText label of the button
 * @param { colorScheme } colorScheme of the Button: `pink`, `violet`, or `slate`
 * @param { iconName } iconName name of Icon -see Library
 * @param { isActive } isActive boolean to set the button to active state
 * @example
 * return (
 *   <InteractionButton
  buttonText="Likes"
  colorScheme="violet"
  iconName="heart_fillable"
  isActive={true}
/>
)
*/
export function InteractionButton<
	T extends {
		className?: string;
		type?: 'button' | 'submit' | 'reset';
		title?: string;
	} = ButtonHTMLAttributes<HTMLElement>
>({ as, colorScheme, buttonText, iconName, isActive = false, ...props }: TInteractionButton<T>): JSX.Element {
	const Tag = as || 'button';

	if (Tag === 'button') {
		props.type = 'button';
	}

	const style = [
		InteractionButtonBaseStyle,
		InteractionButtonColorSchemeMap[isActive ? 'active' : 'default'][colorScheme],
	];

	return (
		<Tag
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
			className={style.join(' ')}
		>
			<span className={InteractionButtonIconColorSchemeMap[isActive ? 'active' : 'default'][colorScheme]}>
				<Icon name={iconName} />
			</span>
			<Label as="span" size="M">
				{buttonText}
			</Label>
		</Tag>
	);
}
