import React, { FC, ReactNode } from 'react';

import { Grid } from '../../Atoms/Grid/Grid';

/*
 * Type
 */

type TNavi = {
	/**
	 * Children: React Node: here `NaviButton` Component.
	 */
	children: ReactNode;
};

export const Navi: FC<TNavi> = ({ children }) => {
	return (
		<Grid as="ul" variant="row" gap="S" centered={true}>
			{children}
		</Grid>
	);
};
