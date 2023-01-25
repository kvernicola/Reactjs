import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts, {
	getProductsByCategory,
} from "../../services/dataBase";
import ItemCard from "./Card/ItemCard";

function ItemList() {
	const [Products, setProducts] = useState([]);
	let params = useParams();
	//console.log(useParams());
	//console.log("%cRenderizando ItemListContainer", "background-color: blue");

	useEffect(() => {
		if (!params.category_id) {
			getProducts()
				.then((resolveDB) => {
					setProducts(resolveDB);
					//console.log("Resultado ", resolveDB);
				})
				.catch((rejectDB) => {
					alert(rejectDB);
				});
		} else {
			getProductsByCategory(params.category_id)
				.then((resolveDB) => {
					setProducts(resolveDB);
					//console.log("Resultado ", resolveDB);
				})
				.catch((rejectDB) => {
					alert(rejectDB);
				});
		}

		setTimeout(() => {
			//console.log("Iniciando consulta de productos disponibles");
		}, 1000);
	}, [params]);

	return (
		<>
			{Products.map((itemProduct) => {
				return <ItemCard product={itemProduct} key={itemProduct.id} />;
			})}
		</>
	);
}

export default ItemList;
