import { useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import Button from "../Button/Button";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";


function ItemDetail(props) {
	const { name, image, price, description, stock, category } = props.product;
	const [productItem, setProductItem] = useState(0);

	const {addToCart} = useContext(cartContext);

	const product = props.product;

	function handleOnAddToCart(count) {
		product.count = count;
		addToCart(product, count);
		setProductItem(count);

		//console.log("Copia de array en el context-->", productItem);
		//console.log(`Agregaste ${count} ${category} ${name} al carrito`);
	}

	return (
		<div className="cardStyleDetail mb-3">
			<img src={image} className="card-img-top imgDetail" alt={name} />
			<div className="favorito">{productItem}</div>
			<div className="card-body">
				<h4 className="card-titleDetail">{name}</h4>
				<span className="card-titleDetail">{category}</span>
				<p className="card-text">{description}</p>
				<h5 className="mb-1">$ {price}</h5>
				<ItemCounter onAddToCart={handleOnAddToCart} stock={stock} />
				{/* <Button
					onClick={handleOnAddToCart}
					className="btn btn-outline-success"
					color="black"
				>
					Añadir al carrito
				</Button> */}
				{/* {cart === 0 ? (<ItemCounter stock={stock} />) : <></>}
				
				{cart === 0 ? (
					<Button
					onClick={handleOnAddToCart}
					className="btn btn-outline-success"
					color="black"
				>
					Añadir al carrito
				</Button>
				) : (
					<Button href="/carrito" className="btn btn-outline-success mt-4" >Ir al carrito</Button>
				)} */}
			</div>
		</div>
	);
}

export default ItemDetail;
