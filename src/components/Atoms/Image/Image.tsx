import React, { FC } from "react";
import ProjectSettings from "../../../utils/ProjectSettings.json";
import { ImageService } from "./ImageServiceMock";


type ImageProps = {
	src: string;
	alt: string;
	preset: string;
	caption: string;
};

type ImagePresetType = {
	img: any;
	styleClasses: string;
};

type ImagePresetListType = {
	[profileName: string]: ImagePresetType;
};


const ImagePreset: ImagePresetListType = {
	profile: {
		img: ImageService.exampleImg(64, 64),
		styleClasses: "rounded-full",
	},
	header: {
		img: ImageService.exampleImg(
			ProjectSettings.content.width,
			Math.floor(ProjectSettings.content.width / 16 * 9)
		),
		styleClasses: "rounded-2xl",
	},
	post: {
		img: ImageService.exampleImg(
			ProjectSettings.content.width - ProjectSettings.content.padding * 2,
			Math.floor((ProjectSettings.content.width - ProjectSettings.content.padding * 2) / 16 * 9)
		),
		styleClasses: "rounded-2xl",
	},
};




export const Image: FC<ImageProps> = ({
	src,
	alt = "",
	caption,
	preset,
	...props
}) => {
	let styleClasses = "";
	if (preset) {
		const imageSettings = ImagePreset[preset];
		const { srcFromPreset, ...imgAttr } = imageSettings.img;
		props = {
			...imgAttr,
		};
		src = srcFromPreset;
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
	src: "",
	preset: "profile",
	alt: "A good description in needed!",
};

