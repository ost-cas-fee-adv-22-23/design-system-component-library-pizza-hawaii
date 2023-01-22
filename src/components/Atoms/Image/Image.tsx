import React, { FC, ImgHTMLAttributes } from 'react';
import ProjectSettings from '../../../utils/ProjectSettings.json';
import { ImageService, ImageServiceResult } from './ImageService';

/**
 * Settings
 */

export const possibleImagePresets = ['header', 'post'] as const;

/*
 * Type
 */

type TImagePresets = (typeof possibleImagePresets)[number];

export type TImage = ImgHTMLAttributes<HTMLImageElement> & {
	/**
	 * provide an image source path
	 */
	src?: string;
	/**
	 * optional preset: mumble-presets are:
	 * `post`: 'width: 680, aspect-ratio: 2.125: 1, rounded boarder'
	 * or:
	 * `header`: 'width 584, aspect-ratio: 16: 9, rounded boarder'
	 */
	preset?: TImagePresets;
	/**
	 * optional: caption text of an image: string
	 */
	caption?: string;
};

/**
 * Styles
 */

/**
 * Controls for Image Component
 * @param { src } source for image file
 * @param { preset } preset form mumble image Variants
 * @param { caption } string for optional text caption of the image
 */

/*
 * Helpers
 */

type ImagePresetType = {
	img: (src: string | undefined) => ImageServiceResult;
	styleClasses: string;
	aspectRatio: number[];
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

		if (presetName && typeof presetName === 'string') {
			acc[presetName] = {
				...imgSetting,
				img: (src: string | undefined): ImageServiceResult => {
					return ImageService.imgAttr(
						imgSetting.width,
						Math.floor(
							typeof imgSetting.aspectRatio === 'string'
								? imgSetting.width
								: (imgSetting.aspectRatio[1] / imgSetting.aspectRatio[0]) * imgSetting.width
						),
						src
					);
				},
			};
		}
		return acc;
	},
	{}
);

export const Image: FC<TImage> = ({ src, alt = '', caption, preset, ...props }) => {
	let styleClasses = 'block object-cover h-full w-full';
	if (preset) {
		const imageSettings = ImagePreset[preset];
		props = {
			...imageSettings.img(src),
		};
		styleClasses = [styleClasses, imageSettings.styleClasses].join(' ');
	} else if (props.width && props.width) {
		styleClasses += ` aspect-[${props.width}/${props.height}]`;
		props = {
			...ImageService.imgAttr(props.width as number, props.width as number, src as string),
		};
	}
	return (
		<figure className={[styleClasses, 'bg-purple-200'].join(' ')}>
			<img className={styleClasses} src={src} alt={alt} {...props} />
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	);
};
