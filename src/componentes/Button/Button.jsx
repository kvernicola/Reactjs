import { useState } from "react";
import { Link } from "react-router-dom";
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
		<Link to={props.href}>
			<button
				/* onClick={props.clickDetalle} */
				/* onClick={handleClick} */
				style={styleButton}
				className={props.className}
			>
				{props.text}
			</button>
		</Link>
	);
}
