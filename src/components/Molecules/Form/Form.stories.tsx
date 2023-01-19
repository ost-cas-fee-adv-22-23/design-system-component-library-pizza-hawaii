import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form as Component } from './Form';

import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormTextarea } from './FormTextarea';
import { FormUpload } from './FormUpload';
import { FormPassword } from './FormPassword';

export default {
	title: 'Components/Molecules/Form',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Form = Template.bind({});
Form.args = {
	children: (
		<>
			<FormInput label="Form Input" />
			<FormInput label="Form Input and Error" errorMessage="Ohhh noo. Hier gab es einen gewaltigen Fehler." />
			<FormPassword label="Form Password" />
			<FormSelect
				label="Form Select"
				defaultValue="val2"
				options={[
					{ value: 'val1', label: 'Value 1' },
					{ value: 'val2', label: 'Value 2' },
					{ value: 'val3', label: 'Value 3' },
				]}
			/>
			<FormTextarea label="Form Textarea" />
			<FormUpload label="Form Upload" />
		</>
	),
};
