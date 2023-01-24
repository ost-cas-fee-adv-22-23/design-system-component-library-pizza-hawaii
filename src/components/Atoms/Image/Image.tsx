import React, { FC, ImgHTMLAttributes } from 'react';
import ProjectSettings from '../../../utils/ProjectSettings.json';
import { ImageService, ImageServiceResult } from './ImageService';

/*
 * Type
 */

export type TImage = ImgHTMLAttributes<HTMLImageElement> & {
	/**
	 * src of the image
	 */
	src?: string;

	/**
	 * optional: preset for image: 'header' or 'post'
	 * `post`: 'width: 680, aspect-ratio: 2.125: 1, rounded boarder'
	 * `header`: 'width 584, aspect-ratio: 16: 9, rounded boarder'
	 */
	preset?: 'header' | 'post';

	/**
	 * optional: caption string for text caption of the image
	 */
	caption?: string;
};
/*
 * Styles
 */

export const BaseImageStyle = 'block object-cover h-full w-full';

/**
 * Controls for Image Component
 *
 * @param { string } src for image file
 * @param { string } alt for image file
 * @param { string } caption for image file
 * @param { string } preset for image: 'header' or 'post'
 *
 * @example	<Image src="//picsum.photos/id/28/1600/1587/" alt="cow wear orange socks" preset="post" />
 * @example	<Image src="//picsum.photos/id/28/1600/1587/" alt="lemon tree" width="640" height="320" />
 */

export const Image: FC<TImage> = ({ src, alt = '', caption, preset, ...props }) => {
	let styleClasses = BaseImageStyle;
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

/*
 * Helper Functions for Image Component
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
