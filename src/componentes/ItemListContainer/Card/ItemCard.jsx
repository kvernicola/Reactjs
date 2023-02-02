import "./card.css";
import { useState } from "react";
import Button from "../../Button/Button";

function ItemCard(props) {
	const { name, image, price, id, discount, stock } = props.product;
	const [isInFavorito, setIsInFavorito] = useState(false);

	function handleClickCard() {
		if (isInFavorito) {
			setIsInFavorito(false);
		} else {
			setIsInFavorito(true);
		}
	}

	return (
		<div onClick={handleClickCard} className="cardStyle mt-3">
			<img src={image} className="card-img-top imgCard" alt={name} />
			{isInFavorito && (
				<div className="lds-heart favorito">
					<div></div>
				</div>
			)}
			{discount > 0 && <span className="discount">Descuento {discount}%</span>}
			{stock <= 2 && <span className="disponibles">Ultimos disponibles</span>}
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
