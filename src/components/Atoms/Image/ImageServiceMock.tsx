import uid from '../../../utils/uid';

type ImageServiceType = {
	[fn: string]: (width: number, height: number, id: string) => { src: string; srcset: string };
};

export const ImageService: ImageServiceType = {
	exampleImg(width: number, height: number, id: string = uid()): { src: string; srcset: string } {
		const images = {
			x1: `//picsum.photos/id/${id}/${width}/${height}/`,
			x2: `//picsum.photos/id/${id}/${width * 2}/${height * 2}/`,
		};

		return {
			src: images.x1,
			srcset: `${images.x1} 1x, ${images.x2} 2x`,
		};
	},
};
