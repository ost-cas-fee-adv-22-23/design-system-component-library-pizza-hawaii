
type ImageServiceType = {
	[fn: string]: Function;
};


export const ImageService: ImageServiceType = {
	exampleImg(
		width: number,
		height: number,
		id: number = Math.floor(Math.random() * 100)
	): { src: string; srcset: string } {
		const images = {
			x1: `//images.weserv.nl/?url=picsum.photos/id/${id}/${width}/${height}/`,
			x2: `//images.weserv.nl/?url=picsum.photos/id/${id}/${width * 2}/${height * 2}/`,
		};

		return {
			src: images.x1,
			srcset: `${images.x1} 1x, ${images.x2} 2x`,
		};
	},
};



