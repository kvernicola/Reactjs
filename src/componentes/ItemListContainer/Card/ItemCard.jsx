import "./card.css";
import { useState } from "react";
import Button from "../../Button/Button";

function ItemCard(props) {
	const [text, setText] = useState("");
	const { name, image, price, id } = props.product;
	//console.log("props---->", props);

	function handleClickCard() {
		setText("Agregado a favoritos");
	}

	return (
		<div onClick={handleClickCard} className="cardStyle mt-3">
			<img src={image} className="card-img-top imgCard" alt={name} />
			<div className="favorito">{text}</div>
			<div className="card-body">
				<h4 className="card-title mb-3">{name}</h4>
				<h5 className="mb-3">$ {price}</h5>
				<Button
					href={`/detalle/${id}`}
					className="btn btn-outline-success"
					color="black"
				>
					Detalle
				</Button>
			</div>
		</div>
	);
}

export default ItemCard;
