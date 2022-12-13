import React, { FC } from "react";

import { Headline } from "../../components/Atoms/Headline/Headline";
import { Label } from "../../components/Atoms/Label/Label";
import { Link } from "../../components/Atoms/Link/Link";
import { Form } from "../../components/Molecules/Form/Form";
import { FormInput } from "../../components/Molecules/Form/FormInput/FormInput";
import { SplitScreen } from "../../components/Organisms/SplitScreen/SplitScreen";

type BaseProps = {};

export const SignIn: FC<BaseProps> = () => {
	return (
		<SplitScreen>
			<Headline level="2">Anmelden</Headline>
			<Form cta="Let’s mumble">
				<FormInput label="E-Mail" type="email" />
				<FormInput label="Passwort" type="password" />
			</Form>
			<div className="mt-3 text-center">
				<Label>
					Noch kein Account? <Link href="/">Jetzt registrieren</Link>
				</Label>
			</div>
		</SplitScreen>
	);
};
