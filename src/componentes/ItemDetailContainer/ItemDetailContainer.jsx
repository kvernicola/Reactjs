import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/dataBase";
import FlexContainer from "../FlexContainer/FlexContainer";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
	const [Product, setProduct] = useState([]);
	let params = useParams();
	//console.log("%cRenderizando ItemDetailContainer", "background-color: green");
	//console.log(params);
	
	
	//function handleAddToCart() {}
	

	useEffect(() => {
		getProduct(params.product_id)
			.then((resolveDB) => {
				setProduct(resolveDB);
				//console.log("Resultado ", resolveDB);
			})
			.catch((rejectDB) => {
				alert(rejectDB);
			});
		setTimeout(() => {
			//console.log("consultando detalles del producto");
		}, 1000);
	}, []);
	
	return (
		<main>
			<FlexContainer>
				<ItemDetail product={Product} key={Product.id} />
			</FlexContainer>
		</main>
	);
}

export default ItemDetailContainer;
