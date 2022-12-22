import uid from '../../../utils/uid';

export type ImageServiceType = {
	[fn: string]: (ImageServiceInterface) => ImageServiceResult;
};
export type ImageServiceInterface = {
	width: number;
	height: number;
	id?: string;
};
export type ImageServiceResult = {
	src: string;
	srcSet: string;
};

export const ImageService = {
	exampleImg(width: number, height: number, id: string = uid()): ImageServiceResult {
		const images = {
			x1: `//picsum.photos/id/${id}/${width}/${height}/`,
			x2: `//picsum.photos/id/${id}/${width * 2}/${height * 2}/`,
		};

		return {
			src: images.x1,
			srcSet: `${images.x1} 1x, ${images.x2} 2x`,
		};
	},
};
