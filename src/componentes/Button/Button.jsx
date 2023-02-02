import { useState } from "react";
import { Link } from "react-router-dom";
import "./button.css";

export default function Button(props) {
	const colorBtn = props.color
	const [colorState, setColorState] = useState(colorBtn);

	let styleButton = {
		backgroundColor: colorState,
	};

	/* function handleClick(e) {
		e.preventDefault();
		setColorState("red");
	} */

	return (
		<Link to={props.href}>
			<button
				onClick={props.onClick}
				style={styleButton}
				className={props.className}
				type={props.type}
			>
				{props.children}
			</button>
		</Link>
	);
}
