import React, { FC, ReactNode } from 'react';

type NaviProps = {
	children: ReactNode | ReactNode[];
};

export const Navi: FC<NaviProps> = ({ children }) => {
	return <ul className="flex gap-8">{children}</ul>;
};
