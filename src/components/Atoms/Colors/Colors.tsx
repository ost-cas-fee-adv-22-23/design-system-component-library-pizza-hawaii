import React, { FC } from 'react';
import { Grid } from '../Grid/Grid';
type TColors = {
	paletteName: string;
};

export const ColorPaletteMap: Record<string, string> = {
	pink: 'bg-pink',
	violet: 'bg-violet',
	slate: 'bg-slate',
};

export const ColorShadesArray: Record<string, string> = {
	'100': '-100',
	'200': '-200',
	'300': '-300',
	'400': '-400',
	'500': '-500',
	'600': '-600',
	'700': '-700',
	'800': '-800',
};
// TODO make them work dynamicly
export const Colors: FC<TColors> = (props) => {
	// const styles = [`bg-${props.paletteName}${ColorShadesArray[props.shade]} ` + 'w-64 h-64'].join(' ');
	{
		/* <div className={[styles].join(' ')}>{styles}</div> */
	}

	return (
		<Grid variant="row" gap="M" centerd>
			<div className={`bg-${props.paletteName}-50` + ' w-20 h-20'}>{props.paletteName}-50</div>
			<div className={`bg-${props.paletteName}-100` + ' w-20 h-20'}>{props.paletteName}-100</div>
			<div className={`bg-${props.paletteName}-200` + ' w-20 h-20'}> {props.paletteName}-200</div>
			<div className={`bg-${props.paletteName}-300` + ' w-20 h-20'}> {props.paletteName}-300</div>
			<div className={`bg-${props.paletteName}-400` + ' w-20 h-20'}> {props.paletteName}-400</div>
			<div className={`bg-${props.paletteName}-500` + ' w-20 h-20'}> {props.paletteName}-500</div>
			<div className={`bg-${props.paletteName}-600` + ' w-20 h-20'}> {props.paletteName}-600</div>
			<div className={`bg-${props.paletteName}-700` + ' w-20 h-20'}> {props.paletteName}-700</div>
			<div className={`bg-${props.paletteName}-800` + ' w-20 h-20'}> {props.paletteName}-800</div>
			<div className={`bg-${props.paletteName}-900` + ' w-20 h-20'}> {props.paletteName}-900</div>
		</Grid>
	);
};
