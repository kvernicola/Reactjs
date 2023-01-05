import "./card.css";
import { useState } from "react";
import ButtonBT from "../Button/ButtonBT";
import ItemCounter from "../ItemCounter/ItemCounter";

function Card(props) {
	const [texto, setTexto] = useState("");
	const { id, nombre, imagen, precio, descripcion, stock } = props.producto;

	function handleClickCard() {
		setTexto("Agregado a favoritos");
	}
	return (
		<div onClick={handleClickCard} className="cardStyle mt-3">
			<img src={imagen} className="card-img-top" alt={nombre} />
			<div className="favorito">{texto}</div>
			<div className="card-body">
				<h4 className="card-title">{nombre}</h4>
				<p className="card-text">{descripcion}</p>
				<h5>$ {precio}</h5>
				<ItemCounter stock={stock} />
				<ButtonBT
					text="Comprar"
					href="/comprar"
					className="btn btn-outline-success"
					color="black"
				/>
			</div>
		</div>
	);
}

export default Card;

