import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

export default function ButtonBuscar(props) {
	const styleButton = {
		backgroundColor: props.color,
	};

	function handleClick(e) {
		e.preventDefault();
		console.log("Evento click");
	}

	return (
		<Link to={props.href}>
			<button onClick={handleClick} style={styleButton} className={props.className}>
				{props.text}
			</button>
		</Link>
	);
}
