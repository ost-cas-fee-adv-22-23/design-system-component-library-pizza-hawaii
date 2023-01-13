import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon as Component, IconSizeMap } from './Icon';
import { IconNames } from './IconLib';

export default {
	title: 'Components/Atoms/Icon',
	component: Component,
	argTypes: {
		name: {
			options: IconNames,
			control: { type: 'select' },
		},
		size: {
			control: {
				type: 'radio',
				options: Object.keys(IconSizeMap),
			},
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Icon = Template.bind({});
Icon.args = {
	name: 'mumble',
};

export const ListAll: ComponentStory<typeof Component> = (): JSX.Element => (
	<div>
		{IconNames.map((iconName) => {
			return (
				<div className="flex flex-center mb-2">
					<Icon name={iconName} />
					<span className="ml-2">{iconName}</span>
				</div>
			);
		})}
	</div>
);
ListAll.parameters = { controls: { include: ['size'] } };
