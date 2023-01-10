import { useEffect, useState } from "react";
import "./itemcounter.css";

export default function ItemCounter(props) {
	const [counter, setCounter] = useState(1);
	const stock = props.stock;
    let displayMore = "btnCounter";
	let displayLess = "btnCounter";
	
    if (counter === props.stock) {
		displayMore = "d-none";
	}
	if (counter === 1) {
		displayLess = "d-none";
	}

	function handleCounterMore() {
		setCounter(counter + 1);
	}
	function handleCounterLess() {
		setCounter(counter - 1);
	}

	return (
		<div className="counter">
			<button onClick={handleCounterLess} className={displayLess}>
				-
			</button>
			<span>Cantidad: {counter}</span>

			<button onClick={handleCounterMore} className={displayMore}>
				+
			</button>
		</div>
	);
}


