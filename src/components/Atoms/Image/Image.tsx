import React, { FC, ImgHTMLAttributes } from 'react';
import { ImageService } from './ImageService';

/*
 * Type
 */

export type TImage = ImgHTMLAttributes<HTMLImageElement> & {
	/**
	 * src of the image
	 */
	src?: string;

	/**
	 * width of the image
	 * required: if not set, the image will not be displayed
	 */
	width: number;

	/**
	 * height of the image
	 * optional: if not set, the image will be scaled to the width
	 */
	height?: number;

	/**
	 * alt string for text alternative of the image
	 */
	alt: string;

	/**
	 * optional: caption string for text caption of the image
	 */
	caption?: string;
};

/**
 * Controls for Image Component
 *
 * @param { string } src for image
 * @param { number } width for image
 * @param { number } height for image
 * @param { string } alt for image
 * @param { string } caption for image
 *
 * @example	<Image src="//picsum.photos/id/28/1600/1587/" alt="lemon tree" width="640" height="320" />
 */

export const Image: FC<TImage> = ({ src, alt = '', caption, ...props }) => {
	props = {
		...ImageService.imgAttr(props.width as number, props.height as number, src as string),
	};
	return (
		<figure className="bg-purple-200">
			<img className="block object-cover h-full w-full" src={src} alt={alt} {...props} />
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	);
};
