import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form as Component } from './Form';

import { FormInput } from './FormInput/FormInput';
import { FormSelect } from './FormSelect/FormSelect';
import { FormTextarea } from './FormTextarea/FormTextarea';
import { FormUpload } from './FormUpload/FormUpload';

export default {
	title: 'Components/Molecules/Form/Form',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Form = Template.bind({});
Form.args = {
	children: (
		<>
			<FormInput label="Form Input" />
			<FormSelect
				label="Form Select"
				value="val2"
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
