import React, { FC, ImgHTMLAttributes } from 'react';
import { ImageService } from './ImageService';

/*
 * Type
 */

export type TImage = {
	/**
	 * src of the image
	 */
	src?: string;

	/**
	 * width of the displayed image in px
	 */
	width: number;

	/**
	 * optional: height of the displayed image in px (if set, the image will be cropped to fit the aspect ratio)
	 */
	height?: number;

	/**
	 * alt string for text alternative of the image
	 */
	alt: string;

	/**
	 * optional: caption string for text caption of the image11
	 */
	caption?: string;
} & ImgHTMLAttributes<HTMLImageElement>;


/**
 * Controls for Image Component
 *
 * @param { string } src for image
 * @param { number } width display width for image
 * @param { number } height display height for image (optional)
 * @param { string } alt alternative text for image
 * @param { string } caption caption text for image (optional)
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
