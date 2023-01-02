import React, { FC, ImgHTMLAttributes } from 'react';
import ProjectSettings from '../../../utils/ProjectSettings.json';
import { ImageService, ImageServiceResult } from './ImageService';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
	preset?: keyof typeof ProjectSettings.images;
	caption?: string;
};

type ImagePresetType = {
	img: (src: string | undefined) => ImageServiceResult;
	styleClasses: string;
	aspectRatio: string;
};

type ImagePresetListType = {
	[profileName: string]: ImagePresetType;
};

type ImagePreset = {
	width: number;
	aspectRatio: number[];
	styleClasses: string;
};

const ImagePreset: ImagePresetListType = Object.keys(ProjectSettings.images).reduce(
	(acc: ImagePresetListType, presetName: string) => {
		const imgSettings: Record<string, ImagePreset> = ProjectSettings.images;
		const imgSetting: ImagePreset = imgSettings[presetName];

		if (typeof presetName === 'string') {
			acc[presetName as string] = {
				...imgSetting,
				img: (src: string | undefined): ImageServiceResult => {
					return ImageService.imgAttr(
						imgSetting.width,
						Math.floor((imgSetting.aspectRatio[1] / imgSetting.aspectRatio[0]) * imgSetting.width),
						src
					);
				},
			};
		}
		return acc;
	},
	{}
);

export const Image: FC<ImageProps> = ({ src, alt = '', caption, preset, ...props }) => {
	let styleClasses = 'block object-cover h-full w-full';
	let aspectRatio = '[1/1]';
	if (preset) {
		const imageSettings = ImagePreset[preset];
		aspectRatio = '';
		props = {
			...imageSettings.img(src),
		};
		styleClasses = [styleClasses, imageSettings.styleClasses].join(' ');
	} else if (props.width && props.width) {
		aspectRatio = `aspect-[${props.width}/${props.height}]`;
		props = {
			...ImageService.imgAttr(props.width as number, props.width as number, src as string),
		};
	}
	return (
		<figure className={[styleClasses, aspectRatio, 'bg-purple-200'].join(' ')}>
			<img className={styleClasses} src={src} alt={alt} {...props} />
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	);
};
