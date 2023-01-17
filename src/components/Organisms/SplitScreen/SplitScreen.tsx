import React, { FC, ReactNode } from 'react';
import { Headline } from '../../Atoms/Headline/Headline';

type BaseProps = {
	children: ReactNode;
};

export const SplitScreen: FC<BaseProps> = ({ children }) => {
	return (
		<div className="SplitScreen grid grid-rows-1 grid-cols-2 md:grid-cols-1 w-screen min-h-screen">
			<header className="column-start-1 column-span-1 row-start-1 row-span-1 flex items-center justify-center bg-gradient-to-tl from-violet-600 to-pink-500">
				<div className="w-8/12 text-pink-300 text-center">
					<svg
						className="inline-block mb-8"
						width="247"
						height="128"
						viewBox="0 0 247 128"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_437_1089)">
							<path
								d="M128.535 40H117.868C116.342 40 114.972 40.849 114.29 42.2135C113.607 43.5755 113.753 45.1823 114.667 46.3985L120.001 53.513C120.764 54.5287 121.93 55.112 123.201 55.112C124.472 55.112 125.639 54.5287 126.402 53.5104L131.735 46.401C132.649 45.1823 132.795 43.5755 132.113 42.2135C131.43 40.849 130.061 40 128.535 40Z"
								fill="white"
							/>
							<path
								d="M152.097 25.7214C151.389 23.8527 150.51 21.9657 149.49 20.1138C152.909 18.3183 155.201 14.7352 155.201 10.6667C155.201 4.78387 150.417 0 144.535 0C140.693 0 137.126 2.24267 135.192 5.5568C131.656 3.7544 127.661 2.66667 123.201 2.66667C118.741 2.66667 114.746 3.75456 111.211 5.5568C109.276 2.24267 105.709 0 101.868 0C95.985 0 91.2012 4.78387 91.2012 10.6667C91.2012 14.7347 93.4929 18.3177 96.9111 20.1133C95.891 21.9653 95.0114 23.8525 94.3027 25.7214C91.3106 33.625 88.9746 44.8281 94.8496 53.3359C99.735 60.4115 109.274 64 123.201 64C137.128 64 146.667 60.4115 151.553 53.3359C157.428 44.8281 155.089 33.625 152.097 25.7214ZM147.165 50.3047C143.334 55.8542 135.271 58.6667 123.201 58.6667C111.131 58.6667 103.068 55.8542 99.2376 50.3047C94.6777 43.7031 96.7506 34.3203 99.2897 27.612C100.532 24.3359 107.521 8 123.201 8C138.881 8 145.87 24.3359 147.113 27.612C149.652 34.3203 151.725 43.7031 147.165 50.3047Z"
								fill="white"
							/>
							<path
								d="M116.904 33.013C119.311 29.5911 119.519 28.2291 118.917 25.875C117.777 21.4089 114.933 20.4713 112.751 20.4713C107.329 20.4713 103.1 27.789 103.048 31.4479C103.016 33.6458 103.904 35.9349 105.37 37.4218C106.399 38.4635 107.607 39.0156 108.868 39.0156C112.235 39.0156 114.821 35.9818 116.904 33.013Z"
								fill="white"
							/>
							<path
								d="M133.652 20.4714C131.469 20.4714 128.626 21.4089 127.485 25.875C126.883 28.2292 127.092 29.5911 129.498 33.013C131.581 35.9818 134.167 39.0157 137.535 39.0157C138.795 39.0157 140.003 38.4636 141.032 37.4219C142.498 35.9349 143.386 33.6458 143.355 31.4505C143.303 27.7891 139.074 20.4714 133.652 20.4714Z"
								fill="white"
							/>
						</g>
						<path
							d="M50.88 82.432V127.36H39.936V100.416L29.888 127.36H21.056L10.944 100.352V127.36H0V82.432H12.928L25.536 113.536L38.016 82.432H50.88Z"
							fill="white"
						/>
						<path
							d="M90.174 91.648V127.36H79.23V122.496C78.1207 124.075 76.606 125.355 74.686 126.336C72.8087 127.275 70.718 127.744 68.414 127.744C65.6833 127.744 63.2727 127.147 61.182 125.952C59.0913 124.715 57.47 122.944 56.318 120.64C55.166 118.336 54.59 115.627 54.59 112.512V91.648H65.47V111.04C65.47 113.429 66.0887 115.285 67.326 116.608C68.5633 117.931 70.2273 118.592 72.318 118.592C74.4513 118.592 76.1367 117.931 77.374 116.608C78.6113 115.285 79.23 113.429 79.23 111.04V91.648H90.174Z"
							fill="white"
						/>
						<path
							d="M139.763 91.264C144.2 91.264 147.72 92.608 150.323 95.296C152.968 97.984 154.291 101.717 154.291 106.496V127.36H143.411V107.968C143.411 105.664 142.792 103.893 141.555 102.656C140.36 101.376 138.696 100.736 136.563 100.736C134.43 100.736 132.744 101.376 131.507 102.656C130.312 103.893 129.715 105.664 129.715 107.968V127.36H118.835V107.968C118.835 105.664 118.216 103.893 116.979 102.656C115.784 101.376 114.12 100.736 111.987 100.736C109.854 100.736 108.168 101.376 106.931 102.656C105.736 103.893 105.139 105.664 105.139 107.968V127.36H94.195V91.648H105.139V96.128C106.248 94.6347 107.699 93.4613 109.491 92.608C111.283 91.712 113.31 91.264 115.571 91.264C118.259 91.264 120.648 91.84 122.739 92.992C124.872 94.144 126.536 95.7867 127.731 97.92C128.968 95.9573 130.654 94.3573 132.787 93.12C134.92 91.8827 137.246 91.264 139.763 91.264Z"
							fill="white"
						/>
						<path
							d="M169.049 96.704C170.073 95.04 171.545 93.696 173.465 92.672C175.385 91.648 177.582 91.136 180.057 91.136C183.001 91.136 185.668 91.8827 188.057 93.376C190.446 94.8693 192.324 97.0027 193.689 99.776C195.097 102.549 195.801 105.771 195.801 109.44C195.801 113.109 195.097 116.352 193.689 119.168C192.324 121.941 190.446 124.096 188.057 125.632C185.668 127.125 183.001 127.872 180.057 127.872C177.54 127.872 175.342 127.381 173.465 126.4C171.588 125.376 170.116 124.032 169.049 122.368V127.36H158.105V80H169.049V96.704ZM184.665 109.44C184.665 106.709 183.897 104.576 182.361 103.04C180.868 101.461 179.012 100.672 176.793 100.672C174.617 100.672 172.761 101.461 171.225 103.04C169.732 104.619 168.985 106.773 168.985 109.504C168.985 112.235 169.732 114.389 171.225 115.968C172.761 117.547 174.617 118.336 176.793 118.336C178.969 118.336 180.825 117.547 182.361 115.968C183.897 114.347 184.665 112.171 184.665 109.44Z"
							fill="white"
						/>
						<path d="M208.646 80V127.36H197.702V80H208.646Z" fill="white" />
						<path
							d="M246.402 108.928C246.402 109.952 246.337 111.019 246.21 112.128H221.441C221.612 114.347 222.316 116.053 223.553 117.248C224.833 118.4 226.391 118.976 228.226 118.976C230.956 118.976 232.855 117.824 233.922 115.52H245.57C244.972 117.867 243.884 119.979 242.306 121.856C240.77 123.733 238.828 125.205 236.482 126.272C234.135 127.339 231.511 127.872 228.609 127.872C225.111 127.872 221.996 127.125 219.266 125.632C216.535 124.139 214.402 122.005 212.866 119.232C211.33 116.459 210.562 113.216 210.562 109.504C210.562 105.792 211.308 102.549 212.801 99.776C214.337 97.0027 216.471 94.8693 219.202 93.376C221.932 91.8827 225.068 91.136 228.609 91.136C232.065 91.136 235.137 91.8613 237.826 93.312C240.514 94.7627 242.604 96.832 244.098 99.52C245.633 102.208 246.402 105.344 246.402 108.928ZM235.202 106.048C235.202 104.171 234.562 102.677 233.282 101.568C232.002 100.459 230.402 99.904 228.482 99.904C226.647 99.904 225.09 100.437 223.81 101.504C222.572 102.571 221.804 104.085 221.506 106.048H235.202Z"
							fill="white"
						/>
						<defs>
							<clipPath id="clip0_437_1089">
								<rect width="64" height="64" fill="white" transform="translate(91.2012)" />
							</clipPath>
						</defs>
					</svg>

					<Headline level={1}>
						Find out what’s new in{' '}
						<a href="#fashion" className="text-white">
							#fashion
						</a>
						.
					</Headline>
				</div>
			</header>
			<div className="column-start-2 column-span-1 row-start-1 row-span-1 md:column-start-1 md:row-start-2 flex items-center justify-center">
				<section className="w-6/12">{children}</section>
			</div>
		</div>
	);
};
