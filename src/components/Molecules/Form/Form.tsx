import React, { FC, ReactNode } from "react";

import { Button } from "../../Molecules/Button/Button";

type BaseProps = {
	cta?: string;
	children: ReactNode;
};



export const Form: FC<BaseProps> = ({ children, cta="Absenden", ...props }) => {
	return (
		<form {...props}>
			<div className="flex flex-col gap-3 mb-8">{children}</div>
			<Button
				as="button"
				size="L"
				type="submit"
				label={cta}
				color="gradient"
			/>
		</form>
	);
};
