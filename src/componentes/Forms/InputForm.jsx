import React from "react";

function InputForm(props) {
	return (
		<div className="inputContainer">
			
			<input
				className="inputForm"
				value={props.value}
				name={props.name}
				type="text"
                placeholder={props.placeholder}
				onChange={props.onChange}
			/>
		</div>
	);
}

export default InputForm;
