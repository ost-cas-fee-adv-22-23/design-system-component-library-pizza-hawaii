import React, { FC, ReactNode } from 'react';
import { NaviButton } from './NaviButton';

type NaviProps = {
	children: ReactNode;
};

const defaultProps: Partial<NaviProps> = {
	children: <NaviButton icon="settings">Settings</NaviButton>,
};

export const Navi: FC<NaviProps> = ({ children }) => {
	return <ul className="flex gap-8">{children}</ul>;
};

Navi.defaultProps = defaultProps;
