import React, { FC, ReactNode } from 'react';

/*
 * Type
 */

type TNavi = {
	children: ReactNode;
};

export const Navi: FC<TNavi> = ({ children }) => {
	return <ul className="flex gap-8">{children}</ul>;
};
