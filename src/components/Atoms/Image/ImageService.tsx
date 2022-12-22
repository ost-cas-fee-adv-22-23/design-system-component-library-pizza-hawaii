import uid from '../../../utils/uid';

export type ImageServiceType = {
	[fn: string]: (ImageServiceInterface) => ImageServiceResult;
};
export type ImageServiceInterface = {
	width: number;
	height?: number;
	src: string;
};
export type ImageServiceResult = {
	src: string;
	srcSet: string;
};

export const ImageService = {
	imgAttr(width: number, height: number, src: string): ImageServiceResult {
		src = src.replace('https://', '').replace('http://', '').replace('//', '');
		const options: string[] = [`url=${src}`, `w=${width}`, 'fit=cover'];

		if (height) {
			options.push(`h=${height}`);
		}

		const images = {
			x1: `//images.weserv.nl/?${options.join('&')}`,
			x2: `, //images.weserv.nl/?${options.join('&')}&dpr=2`,
		};

		return {
			src: images.x1,
			srcSet: `${images.x1} 1x, ${images.x2} 2x`,
		};
	},
};
