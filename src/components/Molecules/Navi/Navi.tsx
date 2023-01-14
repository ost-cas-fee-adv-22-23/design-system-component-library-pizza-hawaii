import React, { FC, ReactNode } from 'react';

import { Grid } from '../../Atoms/Grid/Grid';

/*
 * Type
 */

type TNavi = {
	children: ReactNode;
};

export const Navi: FC<TNavi> = ({ children }) => {
	return (
		<Grid as="ul" variant="row" gap="S" centerd={true}>
			{children}
		</Grid>
	);
};
