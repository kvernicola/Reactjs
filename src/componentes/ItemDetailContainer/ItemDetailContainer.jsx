import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getProduct } from "../../services/dataBase";
import { getProduct } from "../../services/firebase";
import FlexContainer from "../FlexContainer/FlexContainer";
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
	const [product, setProduct] = useState([]);
	let { product_id } = useParams();
	//console.log("%cRenderizando ItemDetailContainer", "background-color: green");
	console.log(product_id);

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
					<ItemDetail product={product} key={product.id} />
				)}
			</FlexContainer>
		</main>
	);
}

export default ItemDetailContainer;
