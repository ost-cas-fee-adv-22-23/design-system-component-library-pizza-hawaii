import React, { FC } from 'react';

import { Headline } from '../../components/Atoms/Headline/Headline';
import { Label } from '../../components/Atoms/Label/Label';
import { Link } from '../../components/Atoms/Link/Link';
import { Button } from '../../components/Molecules/Button/Button';
import { Form } from '../../components/Molecules/Form/Form';
import { FormInput } from '../../components/Molecules/Form/FormInput/FormInput';
import { SplitScreen } from '../../components/Organisms/SplitScreen/SplitScreen';

type BaseProps = object;

export const SignIn: FC<BaseProps> = () => {
	return (
		<SplitScreen>
			<Headline level="2">Anmelden</Headline>
			<Form>
				<FormInput label="E-Mail" type="email" />
				<FormInput label="Passwort" type="password" />
				<Button as="button" size="L" type="submit" label="Let’s mumble" color="gradient" />
			</Form>
			<div className="mt-3 text-center">
				<Label size="M">
					Noch kein Account? <Link href="/">Jetzt registrieren</Link>
				</Label>
			</div>
		</SplitScreen>
	);
};
