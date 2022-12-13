import React from "react";
import PropTypes from "prop-types";
import { FormItem } from "/src/components/Molecules/Form/FormItem/FormItem";

import uid from "/src/utils/uid";


export const FormInput = ({
	type,
	name,
	label,
	errorMessage,
	id = uid("FormInput"),
	className,
	...props
}) => {
	return (
		<FormItem
			className="FormInput"
			id={id}
			label={label}
			errorMessage={errorMessage}
			inputField={
				<input
					className={[
						"FormInput",
						"M-FormItem-Input",
						(errorMessage &&
							"M-FormItem-Input-error"),
					].join(" ")}
					type={type}
					name={name}
					id={id}
					{...props}
				/>
			}
		/>
	);
};

FormInput.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	errorMessage: PropTypes.string,
};

FormInput.defaultProps = {
	type: "text",
	name: "text-input",
	label: "Text Input",
};

