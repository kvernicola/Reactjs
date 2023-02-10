import { useState } from "react";
import "./itemcounter.css";
import Button from "../Button/Button";

export default function ItemCounter(props) {
	const [counter, setCounter] = useState(1);
	const onAddToCart = props.onAddToCart;
	let displayMore = "btnCounter";
	let displayLess = "btnCounter";

	if (counter === props.stock) {
		displayMore = "d-none";
	}
	if (counter === 1) {
		displayLess = "d-none";
	}

	function handleCounterMore() {
		if (counter !== props.stock) {
			setCounter(counter + 1);
		}
	}
	function handleCounterLess() {
		if (counter !== 1) {
			setCounter(counter - 1);
		}
	}
	return (
		<>
			{props.stock !== 0 ? (
				<div className="counter">
					<Button
						onClick={handleCounterLess}
						color="black"
						className={`btn btn-outline-success ${displayLess}`}
					>
						-
					</Button>
					<span>Cantidad: {counter}</span>
					<Button
						onClick={handleCounterMore}
						color="black"
						className={`btn btn-outline-success ${displayMore}`}
					>
						+
					</Button>
					<br />
					<Button
						onClick={() => onAddToCart(counter)}
						className="btn btn-outline-success"
						color="black"
					>
						Añadir al carrito
					</Button>
				</div>
			) : (
				<>
				<h5 className="">No hay stock disponible</h5>
				<Button
					href="/carrito"
					color="black"
					className="btn btn-outline-success mt-4"
				>
					Ir al carrito
				</Button>
				</>
			)}
		</>
	);
}
