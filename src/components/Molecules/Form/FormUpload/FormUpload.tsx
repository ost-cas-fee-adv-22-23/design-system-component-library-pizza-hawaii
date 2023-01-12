import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { FormItem, FormItem_InputStyle, FormItem_InputErrorStyle } from '../FormItem/FormItem';

import { Icon } from '../../../Atoms/Icon/Icon';
import { Label } from '../../../Atoms/Label/Label';
import { Richtext } from '../../../Atoms/Richtext/Richtext';
import { baseStyle as ButtonBaseStyle, btnSizeMap as ButtonSizeMap } from '../../../Molecules/Button/Button';

import uid from '../../../../utils/uid';

/*
 * Type
 */

type BaseProps = {
	label: string;
	hint?: string;
	accept?: string;
	errorMessage?: string;
	id?: string;
	labelHidden?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	preset: keyof typeof filePreset;
};

type FormUploadType = BaseProps & InputHTMLAttributes<HTMLInputElement>;

type UploadTypePreset = {
	accept: string;
	hint: string;
};

/*
 * Style
 */

const filePreset: Record<string, UploadTypePreset> = {
	img: {
		accept: 'image/jpeg, image/png',
		hint: 'JPEG oder PNG, maximal 50 MB',
	},
};

const fieldStyle: string[] = [
	'relative',
	'mb-4 p-12',
	'rounded-xl',
	'border-0 outline-1 outline-dashed -outline-offset-1',
	'hover:border-0 hover:outline-2 hover:outline-slate-400 hover:-outline-offset-2',
	'focus:border-0 focus:outline-2 focus:outline-slate-400 focus:-outline-offset-2',
];

export const FormUpload: FC<FormUploadType> = ({
	preset = 'img',
	label,
	hint,
	accept,
	errorMessage,
	id = uid('FormUpload'),
	labelHidden,
	...props
}) => {
	const { accept: presetAccept, hint: presetHint } = filePreset[preset];

	return (
		<FormItem id={id} label={label || 'FormUpload'} errorMessage={errorMessage} labelHidden={labelHidden}>
			<div
				className={[...FormItem_InputStyle, ...(errorMessage ? FormItem_InputErrorStyle : []), ...fieldStyle].join(
					' '
				)}
			>
				<label htmlFor={id} className="flex flex-col gap-2 items-center text-slate-500">
					<Icon name="upload" size="L" />
					<Label as="span" size="XL">
						Datei hierhin ziehen ...
					</Label>
					<Richtext size="M">{hint || presetHint}</Richtext>
				</label>
				<input
					className="absolute top-0 left-0 w-full h-full opacity-0"
					id={id}
					type="file"
					accept={accept || presetAccept}
					{...props}
				/>
			</div>
			<label
				className={[
					...ButtonBaseStyle,
					ButtonSizeMap.M,
					'text-slate-500 hover:text-white bg-slate-300 hover:bg-slate-400',
				].join(' ')}
				htmlFor={id}
			>
				... oder Datei auswählen
			</label>
		</FormItem>
	);
};
