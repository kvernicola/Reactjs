import React from "react";
import "./button.css";

export default function ButtonBuscar(props) {
	//console.log(props);
	const styleButton = {
		//padding: props.padding,
		backgroundColor: props.color,
	};

	function handleClick(e) {
		e.preventDefault();
		console.log("Evento click");
	}

	return (
		<a href={props.href}>
			<button onClick={handleClick} style={styleButton} className={props.className}>
				{props.text}
			</button>
		</a>
	);
}
