import React from "react";
import PropTypes from "prop-types";
import { FormItem } from "/src/components/Molecules/Form/FormItem/FormItem";

import uid from "/utils/uid";


export const FormTextarea = ({
	type,
	name,
	label,
	errorMessage,
	id = uid("FormTextarea"),
	className,
	...props
}) => {
	return (
		<FormItem
			className="FormTextarea"
			id={id}
			label={label}
			errorMessage={errorMessage}
			inputField={
				<textarea
					className={[
						"FormTextarea",
						"M-FormItem-Input",
						errorMessage && "M-FormItem-Input-error",
					].join(" ")}
					name={name}
					id={id}
					{...props}
				/>
			}
		/>
	);
};

FormTextarea.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	errorMessage: PropTypes.string,
};

FormTextarea.defaultProps = {
	type: "text",
	name: "text-input",
	label: "Text Input"
};

