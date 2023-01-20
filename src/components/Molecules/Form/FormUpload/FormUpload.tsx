import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem';

import { Icon } from '../../../Atoms/Icon';
import { Label } from '../../../Atoms/Label';

import { ButtonBaseStyle, ButtonSizeMap } from '../../../Molecules/Button';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type FormUpload = {
	label: string;
	hint?: string;
	buttonTitle?: string;
	errorMessage?: string;
	id?: string;
	hideLabel?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type FormUploadType = FormUpload & InputHTMLAttributes<HTMLInputElement>;

/*
 * Style
 */

const fieldStyle: string[] = [
	'relative',
	'mb-4 p-0',
	'rounded-xl',
	'border-0 outline-1 outline-dashed -outline-offset-1',
	'hover:border-0 hover:outline-2 hover:outline-slate-300 hover:-outline-offset-2',
	'focus:border-0 focus:outline-2 focus:outline-slate-300 focus:-outline-offset-2',
];

export const FormUpload: FC<FormUploadType> = ({
	label,
	title = 'Datei hierhin ziehen ...',
	buttonTitle = '... oder Datei auswählen',
	hint = 'JPEG oder PNG, maximal 50 MB',
	errorMessage,
	id = uid('FormUpload'),
	hideLabel,
	...props
}) => {
	return (
		<FormItem id={id} label={label || 'FormUpload'} errorMessage={errorMessage} hideLabel={hideLabel}>
			<div
				className={[...FormItem_InputStyle, ...(errorMessage ? FormItem_InputErrorStyle : []), ...fieldStyle].join(
					' '
				)}
			>
				<label
					htmlFor={id}
					className="flex flex-col gap-2 items-center w-full px-4 py-12 sm:py-8 text-slate-500 text-center"
				>
					<Icon name="upload" size="L" />
					<Label as="span" size="XL">
						{title}
					</Label>
					{hint && (
						<span className="text-slate-400">
							<Label as="span" size="M">
								{hint}
							</Label>
						</span>
					)}
				</label>
				<input className="absolute top-0 left-0 w-full h-full opacity-0" id={id} type="file" {...props} />
			</div>
			<label
				className={[
					...ButtonBaseStyle,
					ButtonSizeMap.M,
					'text-slate-500 hover:text-white bg-slate-300 hover:bg-slate-400',
				].join(' ')}
				htmlFor={id}
			>
				{buttonTitle}
			</label>
		</FormItem>
	);
};
