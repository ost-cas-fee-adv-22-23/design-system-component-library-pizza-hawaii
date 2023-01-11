import React, { FC } from 'react';
import { Icon } from '../../Atoms/Icon/Icon';
import { Image } from '../../Atoms/Image/Image';

type BaseProps = {
	icon: string;
	overlayStyles: string;
	src: string;
};

export const ImageOverlay: FC<BaseProps> = (props) => {
	const baseOverlay = [
		'absolute',
		'bg-opacity-0',
		'top-0',
		'bottom-0',
		'left-0',
		'right-0',
		'transition-all',
		'duration-300',
		'hover:bg-opacity-50',
		'hover: bg-violet-600',
		'z-10',
	];

	return (
		<a href="#">
			<div className="relative w-max">
				<div className={[...baseOverlay, props.overlayStyles].join(' ')}>
					<div className="relative top-1/2 left-1/2 -translate-y-2/4 text-white">
						<Icon name={props.icon} size="M" />
					</div>
				</div>
				<Image preset="post" src={props.src} />
			</div>
		</a>
	);
};
