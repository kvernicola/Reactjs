import { useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";

function ItemDetail(props) {
	const { name, image, price, description, stock, category } = props.product;
	const product = props.product;
	const { addToCart } = useContext(cartContext);

	const [newQuantity, setNewQuantity] = useState(0);

	function handleOnAddToCart(quantity) {
		product.quantity = quantity;
		//console.log(`Recibe cantidad: ${product.quantity} de itemCounter`);
		setNewQuantity(quantity);
		addToCart(product);
		//console.log(product);

		//console.log(`Agregaste ${newQuantity} ${category} ${name} al carrito`);
	}
	//console.log(`Estado newQuantity ${newQuantity}`);

	return (
		<div className="cardStyleDetail mb-3">
			<img src={image} className="card-img-top imgDetail" alt={name} />
			<div className="favorito">{newQuantity}</div>
			<div className="card-body">
				<h4 className="card-titleDetail">{name}</h4>
				<span className="card-titleDetail">{category}</span>
				<p className="card-text">{description}</p>
				<h5 className="mb-1">$ {price}</h5>
				{/* <ItemCounter onAddToCart={handleOnAddToCart} stock={stock} /> */}
				{/* <Button
					onClick={handleOnAddToCart}
					className="btn btn-outline-success"
					color="black"
				>
					Añadir al carrito
				</Button> */}

				{/* {newQuantity === 0 ? (<ItemCounter stock={stock} />) : <></>} */}
				
				{newQuantity === 0 ? (
					<ItemCounter onAddToCart={handleOnAddToCart} stock={stock} />
				) : (
					<Button href="/carrito" color="black" className="btn btn-outline-success mt-4" >Ir al carrito</Button>
				)}
			</div>
		</div>
	);
}


export default ItemDetail;
