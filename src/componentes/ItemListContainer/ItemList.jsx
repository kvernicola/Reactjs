import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getProductsByCategory } from "../../services/dataBase";
import Loader from "../Loader/Loader";
import ItemCard from "./Card/ItemCard";
import { getProducts, getProductsByCategory } from "../../services/firebase";

function ItemList() {
	const [Products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let { category_id } = useParams();
	//console.log(useParams());
	//console.log("%cRenderizando ItemListContainer", "background-color: blue");

	useEffect(() => {
		if (!category_id) {
			getProducts()
				.then((resolveDB) => {
					setProducts(resolveDB);
					//console.log("Resultado ", resolveDB);
				})
				.catch((rejectDB) => {
					alert(rejectDB);
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			getProductsByCategory(category_id)
				.then((resolveDB) => {
					setProducts(resolveDB);
					//console.log("Resultado ", resolveDB);
				})
				.catch((rejectDB) => {
					alert(rejectDB);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}

		setTimeout(() => {
			//console.log("Iniciando consulta de productos disponibles");
		}, 1000);
	}, [category_id]);

	return (
		<>
			{isLoading ? (
				<Loader color={"orange"}/>
			) : (
				Products.map((itemProduct) => {
					return <ItemCard product={itemProduct} key={itemProduct.id} />;
				})
			)}
		</>
	);
}

export default ItemList;
