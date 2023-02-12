type ImageServiceInterface = {
	width: number;
	height?: number;
	src?: string;
};

export type TImageServiceResult = {
	src: string;
	srcSet?: string;
	width: number;
	height?: number;
};

export const ImageService = {
	imgAttr(
		width: number,
		height: number,
		src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
	): ImageServiceResult {
		const options: string[] = [`url=${encodeURIComponent(src)}`, `w=${width}`, 'fit=cover'];
		
    if (height) {
			options.push(`h=${height}`);
		}
    
		if (['https://', 'http://', '//'].some((substr) => src.startsWith(substr))) {
			src = src.replace('https://', '').replace('http://', '').replace('//', '');
			const images = {
				x1: `//images.weserv.nl/?${options.join('&')}`,
				x2: `//images.weserv.nl/?${options.join('&')}&dpr=2`,
			};

			return {
				width,
				height,
				src: images.x1,
				srcSet: `${images.x1} 1x, ${images.x2} 2x`,
			};
		}

		return {
			src: src,
			width,
			height,
		};
	},
};
