import { useState } from "react";
import "./button.css";

export default function ButtonBT(props) {
	const [colorState, setColorState] = useState("black");
	//console.log("--->", colorState);

	let styleButton = {
		backgroundColor: colorState,
	};

	function handleClick(e) {
		e.preventDefault();
		//console.log("Evento click");
		setColorState("red")
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
