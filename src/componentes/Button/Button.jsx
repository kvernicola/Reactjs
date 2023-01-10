import { useState } from "react";
import "./button.css";

export default function Button(props) {
	const [colorState, setColorState] = useState("black");

	let styleButton = {
		backgroundColor: colorState,
	};

	function handleClick(e) {
		e.preventDefault();
		setColorState("red");
	}

	return (
		<a href={props.href}>
			<button
				onClick={handleClick}
				style={styleButton}
				className={props.className}
			>
				{props.text}
			</button>
		</a>
	);
}
