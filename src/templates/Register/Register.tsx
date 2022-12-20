import React, { FC } from 'react';

import { Headline } from '../../components/Atoms/Headline/Headline';
import { Label } from '../../components/Atoms/Label/Label';
import { Link } from '../../components/Atoms/Link/Link';
import { Button } from '../../components/Molecules/Button/Button';
import { Form } from '../../components/Molecules/Form/Form';
import { FormInput } from '../../components/Molecules/Form/FormInput/FormInput';
import { SplitScreen } from '../../components/Organisms/SplitScreen/SplitScreen';

type BaseProps = object;

export const Register: FC<BaseProps> = () => {
	return (
		<SplitScreen>
			<Headline level="2">Registrieren</Headline>
			<Form>
				<FormInput label="Vorname Name" type="text" />
				<FormInput label="User Name" type="text" />
				<FormInput label="E-Mail" type="email" />
				<FormInput label="Passwort" type="password" />
				<Button as="button" size="L" type="submit" label="Let’s mumble" color="gradient" />
			</Form>
			<div className="mt-3 text-center">
				<Label size="M">
					Bereits registriert? <Link href="/">Jetzt anmelden</Link>
				</Label>
			</div>
		</SplitScreen>
	);
};
