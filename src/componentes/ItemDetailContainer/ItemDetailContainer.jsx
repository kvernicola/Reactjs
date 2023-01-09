import "./card.css";
import { useState } from "react";
import ItemCounter from "../../ItemCounter/ItemCounter";
import Button from "../../Button/Button";


function ItemDetailContainer(props) {
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
				<h4 className="card-title">{nombre}</h4>
				<p className="card-text">{descripcion}</p>
				<h5>$ {precio}</h5>
				<ItemCounter stock={stock} />
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

export default ItemDetailContainer;
