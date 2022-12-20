import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import uid from '../../../../utils/uid';

type BaseProps = {
	label: string;
	children: ReactNode;
	errorMessage?: string;
	className?: string;
	id?: string;
};

export const FormItem: FC<BaseProps> = ({ label, children, errorMessage, className, id = uid('FormItem'), ...props }) => {
	return (
		<div className={['FormItem flex flex-col', className].join(' ')} {...props}>
			<label className="FormItem--label M-FormItem-Label mb-xxs" htmlFor={id}>
				{label}
			</label>
			{children}
			{errorMessage ? <span className="FormItem--error M-FormItem-Error mt-xxs self-end">{errorMessage}</span> : null}
		</div>
	);
};

FormItem.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	errorMessage: PropTypes.string,
};

FormItem.defaultProps = {
	label: 'Text Input',
	children: <span>...</span>,
};
