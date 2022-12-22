import uid from '../../../utils/uid';

export type ImageServiceType = {
	[fn: string]: (ImageServiceInterface) => ImageServiceMockResult;
};
export type ImageServiceMockInterface = {
	width: number;
	height: number;
	id?: string;
};
export type ImageServiceMockResult = {
	src: string;
	srcSet: string;
};

export const ImageServiceMock = {
	imgAttr(width: number, height: number, id: string = uid()): ImageServiceMockResult {
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
