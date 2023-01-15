'use client';

import React, { FC, useState, ChangeEvent } from 'react';
import uid from '../../../utils/uid';

/*
 * Type
 */

type TSwitch = {
	options: Array<{ value: string; label: string }>;
	value: string;
	name: string;
	onChange: (value: string) => void;
};

/*
 * Style
 */

const fieldStyles = 'flex overflow-hidden bg-slate-200 rounded-lg p-1 w-fit';
const inputStyles = ' absolute overflow-hidden h-0 w-0 peer';
const labelStyles =
	'block hover:cursor-pointer hover:text-slate-800 bg-slate-200 first-of-type:rounded-tl-md first-of-type:rounded-bl-md last:rounded-tr-md last:rounded-br-md text-slate-600 text-base font-semibold text-center py-2 px-4 border-slate-600 transition-all ease-in duration-150 peer-checked:bg-white peer-checked:text-violet-600';

export const Switch: FC<TSwitch> = ({ options, value, name = uid('Switch'), onChange }) => {
	const [activeValue, setActiveValue] = useState(value);

	const changeValue = (event: ChangeEvent): void => {
		const target = event.target as HTMLInputElement;
		setActiveValue(target.value);
		onChange && onChange(target.value);
	};

	return (
		<div className={fieldStyles + ' M-input-checked'}>
			{options.map((option) => {
				const optionId = uid('switch-option');

				return (
					<div key={optionId}>
						<input
							className={inputStyles}
							type="radio"
							id={optionId}
							name={name}
							value={option.value}
							checked={activeValue === option.value}
							onChange={changeValue}
						/>
						<label className={labelStyles} htmlFor={optionId}>
							{option.label}
						</label>
					</div>
				);
			})}
		</div>
	);
};
