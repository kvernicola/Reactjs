import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/firebase";
import FlexContainer from "../FlexContainer/FlexContainer";
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function ItemDetailContainer() {
	const [product, setProduct] = useState([]);
	let { product_id } = useParams();
	const { inCart } = useContext(cartContext);

	function checkStock() {
		const isInCart = inCart.find((item) => item.id === product.id);
		let newStock = product.stock;
		if (isInCart) {
			newStock = product.stock - isInCart.quantity;
		}
		return newStock;
	}
	
	useEffect(() => {
		getProduct(product_id)
			.then((resolveDB) => {
				setProduct(resolveDB);
			})
			.catch((rejectDB) => {
				alert(rejectDB);
			});
		setTimeout(() => {}, 1000);
	}, [product_id]);

	return (
		<main>
			<FlexContainer className="flexContainer">
				{product.length === 0 ? (
					<Loader color={"orange"} />
				) : (
					<ItemDetail product={product} newStock={checkStock()} key={product.id} />
				)}
			</FlexContainer>
		</main>
	);
}

export default ItemDetailContainer;
