import React, { FC } from 'react';

import { Headline } from '../../components/Atoms/Headline/Headline';
import { Label } from '../../components/Atoms/Label/Label';
import { Link } from '../../components/Atoms/Link/Link';
import { Button } from '../../components/Molecules/Button/Button';
import { Form } from '../../components/Molecules/Form/Form';
import { FormInput } from '../../components/Molecules/Form/FormInput/FormInput';
import { SplitScreen } from '../../components/Organisms/SplitScreen/SplitScreen';

type SignInType = object;

export const SignIn: FC<SignInType> = () => {
	return (
		<SplitScreen>
			<Headline level={2}>Anmelden</Headline>
			<Form>
				<FormInput label="E-Mail" type="email" />
				<FormInput label="Passwort" type="password" />
				<Button as="button" size="L" type="submit" color="gradient">
					Let’s mumble
				</Button>
			</Form>
			<div className="mt-3 text-center">
				<Label as="span" size="M">
					Noch kein Account?{' '}
					<Link as="a" href="/">
						Jetzt registrieren
					</Link>
				</Label>
			</div>
		</SplitScreen>
	);
};
