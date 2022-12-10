import React from 'react';
import PropTypes from 'prop-types';
import uid from '/utils/uid';

export const FormItem = ({
	label,
	inputField,
	errorMessage,
	className,
	id = uid("FormItem"),
	...props
}) => {
	return (
		<div className={["FormItem flex flex-col", className].join(" ")}>
			<label className="FormItem--label M-FormItem-Label mb-xxs" htmlFor={id}>
				{label}
			</label>
			{inputField}
			{errorMessage ? (
				<span className="FormItem--error M-FormItem-Error mt-xxs self-end">
					{errorMessage}
				</span>
			) : null}
		</div>
	);
};


FormItem.propTypes = {
	label: PropTypes.string.isRequired,
	inputField: PropTypes.node.isRequired,
	errorMessage: PropTypes.string,
};


FormItem.defaultProps = {
	label: "Text Input",
	inputField: <span>...</span>,
};
