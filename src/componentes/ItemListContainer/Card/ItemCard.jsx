import "./card.css";
import { useState } from "react";
import Button from "../../Button/Button";


function ItemCard(props) {
	const [texto, setTexto] = useState("");
	const { nombre, imagen, precio, descripcion, stock } = props.producto;

	function handleClickCard() {
		setTexto("Agregado a favoritos");
	}
	return (
		<div onClick={handleClickCard} className="cardStyle mt-3">
			<img src={imagen} className="card-img-top" alt={nombre} />
			<div className="favorito">{texto}</div>
			<div className="card-body">
				<h4 className="card-title mb-3">{nombre}</h4>
				
				<h5 className="mb-3">$ {precio}</h5>
				
				<Button
					text="Comprar"
					href="/comprar"
					className="btn btn-outline-success"
					color="black"
				/>
			</div>
		</div>
	);
}

export default ItemCard;
