import React, { FC } from 'react';
import { Grid } from '../Grid/Grid';

export type TColors = {
	/**
	 * choose one of of these colorPalette Names:
	 */
	paletteName: 'pink' | 'violet' | 'slate';
};

export const ColorPaletteMap: Record<string, string> = {
	pink: 'bg-pink-50 bg-pink-100 bg-pink-200 bg-pink-300 bg-pink-400 bg-pink-500 bg-pink-600 bg-pink-700 bg-pink-800 bg-pink-900',
	violet: 'bg-violet-50 bg-violet-100 bg-violet-200 bg-violet-300 bg-violet-400 bg-violet-500 bg-violet-600 bg-violet-700 bg-violet-800 bg-violet-900',
	slate: 'bg-slate-50 bg-slate-100 bg-slate-200 bg-slate-300 bg-slate-400 bg-slate-500 bg-slate-600 bg-slate-700 bg-slate-800 bg-slate-900',
};

export const Colors: FC<TColors> = (props) => {
	const { paletteName } = props;

	return (
		<Grid variant="row" gap="S" centered>
			<div className={`bg-${paletteName}-50` + '  w-24 h-24'}> {props.paletteName}-50</div>
			<div className={`bg-${paletteName}-100` + ' w-24 h-24'}> {props.paletteName}-100</div>
			<div className={`bg-${paletteName}-200` + ' w-24 h-24'}> {props.paletteName}-200</div>
			<div className={`bg-${paletteName}-300` + ' w-24 h-24'}> {props.paletteName}-300</div>
			<div className={`bg-${paletteName}-400` + ' w-24 h-24'}> {props.paletteName}-400</div>
			<div className={`bg-${paletteName}-500` + ' w-24 h-24'}> {props.paletteName}-500</div>
			<div className={`bg-${paletteName}-600` + ' w-24 h-24 text-white'}> {props.paletteName}-600</div>
			<div className={`bg-${paletteName}-700` + ' w-24 h-24 text-white'}> {props.paletteName}-700</div>
			<div className={`bg-${paletteName}-800` + ' w-24 h-24 text-white'}> {props.paletteName}-800</div>
			<div className={`bg-${paletteName}-900` + ' w-24 h-24 text-white'}> {props.paletteName}-900</div>
		</Grid>
	);
};
