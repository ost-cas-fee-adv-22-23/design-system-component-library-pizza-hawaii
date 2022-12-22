import React, { FC, ImgHTMLAttributes } from 'react';
import ProjectSettings from '../../../utils/ProjectSettings.json';
import { ImageServiceMock, ImageServiceMockResult } from './ImageServiceMock';
import { ImageService, ImageServiceResult } from './ImageService';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
	preset: string;
	caption?: string;
};

type ImagePresetType = {
	img: () => ImageServiceMockResult | ImageServiceResult;
	styleClasses: string;
};

type ImagePresetListType = {
	[profileName: string]: ImagePresetType;
};

export const Image: FC<ImageProps> = ({ src, alt = '', caption, preset, ...props }) => {
	const ImagePreset: ImagePresetListType = {
		profile: {
			img: () => ImageService.imgAttr(64, 64, src),
			styleClasses: 'rounded-full',
		},
		header: {
			img: () =>
				ImageService.imgAttr(
					ProjectSettings.content.width,
					Math.floor((ProjectSettings.content.width / 16) * 9),
					src
				),
			styleClasses: 'rounded-2xl',
		},
		post: {
			img: () =>
				ImageService.imgAttr(
					ProjectSettings.content.width - ProjectSettings.content.padding * 2,
					Math.floor(((ProjectSettings.content.width - ProjectSettings.content.padding * 2) / 16) * 9),
					src
				),
			styleClasses: 'rounded-2xl',
		},
	};

	let styleClasses = '';
	if (preset) {
		const imageSettings = ImagePreset[preset];
		props = {
			...imageSettings.img(),
		};
		styleClasses = imageSettings.styleClasses;
	}
	return (
		<figure>
			<img className={styleClasses} src={src} alt={alt} {...props} />
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	);
};

Image.defaultProps = {
	src: '',
	preset: 'profile',
	alt: 'A good description in needed!',
};
