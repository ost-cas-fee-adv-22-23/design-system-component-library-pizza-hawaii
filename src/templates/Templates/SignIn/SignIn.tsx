import React, { FC } from 'react';

import { Headline } from '../../../components/Atoms/Headline/Headline';
import { Label } from '../../../components/Atoms/Label';
import { Link } from '../../../components/Atoms/Link';
import { Button } from '../../../components/Molecules/Button';
import { Form } from '../../../components/Molecules/Form';
import { FormInput } from '../../../components/Molecules/Form/FormInput';
import { SplitScreen } from '../../Snippets/SplitScreen/index';

type SignInType = object;

export const SignIn: FC<SignInType> = () => {
	return (
		<SplitScreen>
			<Headline level={2}>Anmelden</Headline>
			<Form>
				<FormInput label="E-Mail" type="email" />
				<FormInput label="Passwort" type="password" />
				<Button size="L" type="submit" colorScheme="gradient">
					Let’s mumble
				</Button>
			</Form>
			<div className="mt-3 text-center">
				<Label as="span" size="M">
					Noch kein Account? <Link href="/">Jetzt registrieren</Link>
				</Label>
			</div>
		</SplitScreen>
	);
};
