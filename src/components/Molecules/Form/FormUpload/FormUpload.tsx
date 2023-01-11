import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { FormItem } from '../FormItem/FormItem';

import { Icon } from '../../../Atoms/Icon/Icon';
import { Label } from '../../../Atoms/Label/Label';
import { Richtext } from '../../../Atoms/Richtext/Richtext';
import { baseStyle as ButtonBaseStyle, btnSizeMap as ButtonSizeMap } from '../../../Molecules/Button/Button';

import uid from '../../../../utils/uid';

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

const filePreset: Record<string, UploadTypePreset> = {
	img: {
		accept: 'image/jpeg, image/png',
		hint: 'JPEG oder PNG, maximal 50 MB',
	},
};

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
		<FormItem
			className="FormUpload"
			id={id}
			label={label || 'FormUpload'}
			errorMessage={errorMessage}
			labelHidden={labelHidden}
		>
			<div
				className={[
					'FormUpload',
					'M-FormItem-Input',
					'M-FormItem-Upload',
					errorMessage && 'M-FormItem-Input-error',
					'relative',
					'mb-4',
				].join(' ')}
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
