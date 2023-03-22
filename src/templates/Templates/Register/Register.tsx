import React, { FC } from 'react';

import { Headline } from '../../../components/Atoms/Headline/Headline';
import { Label } from '../../../components/Atoms/Label';
import { Link } from '../../../components/Atoms/Link';
import { Button } from '../../../components/Molecules/Button';
import { Form } from '../../../components/Molecules/Form';
import { FormInput } from '../../../components/Molecules/Form/FormInput';
import { SplitScreen } from '../../Snippets/SplitScreen/index';

type RegisterType = object;

export const Register: FC<RegisterType> = () => {
	return (
		<SplitScreen>
			<Headline level={2}>Registrieren</Headline>
			<Form>
				<FormInput label="Vorname Name" type="text" />
				<FormInput label="User Name" type="text" />
				<FormInput label="E-Mail" type="email" />
				<FormInput label="Passwort" type="password" />
				<Button as="button" size="L" type="submit" colorScheme="gradient">
					Let’s mumble
				</Button>
			</Form>
			<div className="mt-3 text-center">
				<Label as="span" size="M">
					Bereits registriert? <Link href="/">Jetzt anmelden</Link>
				</Label>
			</div>
		</SplitScreen>
	);
};
