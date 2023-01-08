import React, { FC } from 'react';
import { default as IconLib, IconNames as IcoNames } from './IconLib';
import './Icon.css';

type IconProps = {
	size?: 'S' | 'M' | 'L';
	name: string;
};

const sizeStyle = {
	S: ['w-3'],
	M: ['w-s'],
	L: ['w-[28px]'],
};

const counter: Record<string, boolean> = IcoNames.reduce((acc, name) => ({ ...acc, [name]: false }), {});

export const Icon: FC<IconProps> = ({ size = 'M', name = IcoNames[0], ...props }) => {
	const style = [...(sizeStyle[size] || sizeStyle.M)];

	let svgIcon = IconLib[name];

	if (!counter[name]) {
		const svgCode = svgIcon.replace(`<svg`, `<svg id="${name}"`);

		let p = `svg-container-${name}` && document.getElementById(`svg-container-${name}`);
		if (!p) {
			p = document.createElement('div');
			p.id = `svg-container-${name}`;
			p.innerHTML = svgCode;
			p.style.display = 'none';
			document.body.appendChild(p);
		}
		counter[name] = true;
	}
	svgIcon = svgIcon.replace(/<svg([^>]*)>([\s\S]*?)<\/svg>/gi, `<svg$1><use xlink:href="#${name}"></use></svg>`);


	return (
		<span
			className={['Icon', 'inline-flex', ...style].join(' ')}
			{...props}
			dangerouslySetInnerHTML={{ __html: svgIcon }}
		></span>
	);
};
