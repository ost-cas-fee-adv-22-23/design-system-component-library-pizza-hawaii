import React, { FC } from 'react';
import { Grid } from '../Grid/Grid';

export type TColors = {
	/**
	 * choose one of of these colorPalette Names:
	 */
	paletteName: 'pink' | 'violet' | 'slate';
};

const ColorPaletteMap: Record<string, string[]> = {
	pink: [
		'bg-pink-50',
		'bg-pink-100',
		'bg-pink-200',
		'bg-pink-300',
		'bg-pink-400',
		'bg-pink-500',
		'bg-pink-600',
		'bg-pink-700',
		'bg-pink-800',
		'bg-pink-900',
	],
	violet: [
		'bg-violet-50',
		'bg-violet-100',
		'bg-violet-200',
		'bg-violet-300',
		'bg-violet-400',
		'bg-violet-500',
		'bg-violet-600',
		'bg-violet-700',
		'bg-violet-800',
		'bg-violet-900',
	],
	slate: [
		'bg-slate-50',
		'bg-slate-100',
		'bg-slate-200',
		'bg-slate-300',
		'bg-slate-400',
		'bg-slate-500',
		'bg-slate-600',
		'bg-slate-700',
		'bg-slate-800',
		'bg-slate-900',
	],
};

export const Colors: FC<TColors> = ({ paletteName }) => {
	return (
		<Grid variant="row" gap="S" centered>
			{ColorPaletteMap[paletteName].map((colorClass: string, index: number) => (
				<div key={index} className={colorClass + ' w-24 h-24 text-center'} title={colorClass.replace('bg-', '')}>
					<span className={index >= 5 ? 'text-white' : ''}>{colorClass.replace('bg-', '')}</span>
				</div>
			))}
		</Grid>
	);
};
