import React, { FC } from 'react';
import { Icon } from '../../Atoms/Icon/Icon';
import { Image } from '../../Atoms/Image/Image';

type BaseProps = {
	icon: string;
	overlayStyles: string;
	src: string;
};

export const ImageOverlay: FC<BaseProps> = (props) => {
	console.log('ImageOverlay.tsx', props);
	const centerThis = ['inset-0', 'flex', 'items-center', 'justify-center'];
	return (
		<a href="#">
			<div className="relative w-max">
				<div className="absolute bg-opacity-0 top-0 bottom-0 left-0 right-0 transition-all duration-300 hover:bg-opacity-50 hover: bg-violet-600 z-10">
					<div className={[centerThis].join(' ')}>
						<Icon name={props.icon} />
					</div>
				</div>
				<Image preset="post" src={props.src} />
			</div>
		</a>
	);
};
