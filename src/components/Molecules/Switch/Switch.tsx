import React, { FC, ChangeEvent, InputHTMLAttributes } from 'react';
import uid from '../../../utils/uid';

/*
 * Type
 */

export type TSwitchOption = InputHTMLAttributes<HTMLInputElement> & { label: string };

type TSwitch = {
	label: string;
	options: TSwitchOption[];
	value: string;
	name: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

/*
 * Style Switch
 */

const fieldsetStyles = 'flex overflow-hidden bg-slate-200 rounded-lg p-1 w-fit';

export const Switch: FC<TSwitch> = ({ options, name = uid('Switch'), label, value, onChange }) => {
	return (
		<fieldset className={fieldsetStyles}>
			<legend className="sr-only">{label}</legend>
			{options.map((option: TSwitchOption, index) => (
				<SwitchButton
					key={index}
					name={name}
					defaultChecked={value === option.value || index === 0}
					onChange={onChange}
					{...option}
				/>
			))}
		</fieldset>
	);
};

/*
 * Style SwitchButton
 */

const labelStyles =
	'block hover:cursor-pointer hover:text-slate-800 bg-slate-200 first-of-type:rounded-tl-md first-of-type:rounded-bl-md last:rounded-tr-md last:rounded-br-md text-slate-600 text-base font-semibold text-center py-2 px-4 border-slate-600 transition-all ease-in duration-150 peer-checked:bg-white peer-checked:text-violet-600';

const SwitchButton: FC<TSwitchOption> = ({ label, ...rest }) => {
	const inputProps = {
		className: 'sr-only peer',
		type: 'radio',
		...rest,
	};

	return (
		<label>
			<input {...inputProps} />
			<span className={labelStyles}>{label}</span>
		</label>
	);
};
