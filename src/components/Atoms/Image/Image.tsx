import React, { FC, ImgHTMLAttributes } from 'react';

/*
 * Type
 */

type TImage<T> = {
	/**
	 * optional: HTML tag to render an image (e.g. NextImage)
	 */
	imageComponent?: FC<T>;

	/**
	 * src of the image
	 */
	src?: string;

	/**
	 * optional width of the displayed image in px
	 */
	width?: number;

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
} & Omit<T, 'className' | 'src' | 'alt'>;

/**
 * Controls for Image Component
 *
 * @param { string } imageComponent - HTML tag to render an image (e.g. NextImage)
 * @param { string } src for image
 * @param { number } optional: width display width for image
 * @param { number } optional: height display height for image (optional)
 * @param { string } alt alternative text for image
 * @param { string } caption caption text for image (optional)
 *
 * @example	<Image src="//picsum.photos/id/28/1600/1587/" alt="lemon tree" width="640" height="320" />
 */
export function Image<T = ImgHTMLAttributes<HTMLImageElement>>({
	imageComponent,
	src,
	alt,
	caption,
	...props
}: Omit<TImage<T>, 'className'>): JSX.Element {
	const ImageComponent = imageComponent || 'img';
	return (
		<figure className="grid bg-purple-200 overflow-hidden">
			<ImageComponent
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				{...(props as any)}
				className="block object-cover h-full w-full"
				src={src}
				alt={alt}
			/>
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	);
}
