import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ItemCard from "./Card/ItemCard";
import { getProducts, getProductsByCategory, getProductsBySearchText } from "../../services/firebase";
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";

function ItemList() {
	const [Products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { searchText } = useContext(cartContext);

	let { category_id } = useParams();
	//console.log(useParams());
	//console.log("%cRenderizando ItemListContainer", "background-color: blue");

	useEffect(() => {
		if (searchText) {
			getProductsBySearchText(searchText)
				.then((resolveDB) => {
					setProducts(resolveDB);
					console.log("Resultado ", resolveDB);
				})
				.catch((rejectDB) => {
					/* const mensaje = `No se pudo realizar la consulta: Respuesta  ${rejectDB}`;
					const type = "info";
					toastNotify(mensaje, type); */
					alert(rejectDB);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}

		else if (!category_id) {
			getProducts()
				.then((resolveDB) => {
					setProducts(resolveDB);
					//console.log("Resultado ", resolveDB);
				})
				.catch((rejectDB) => {
					/* const mensaje = `No se pudo realizar la consulta: Respuesta  ${rejectDB}`;
					const type = "info";
					toastNotify(mensaje, type); */
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
					/* const mensaje = `No se pudo realizar la consulta: Respuesta  ${rejectDB}`;
					const type = "info";
					toastNotify(mensaje, type); */
					alert(rejectDB);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}

		setTimeout(() => {
			//console.log("Iniciando consulta de productos disponibles");
		}, 1000);
	}, [category_id, searchText]);

	return (
		<>
			{isLoading ? (
				<Loader color={"orange"} />
			) : (
				Products.map((itemProduct) => {
					return <ItemCard product={itemProduct} key={itemProduct.id} />;
				})
			)}
		</>
	);
}

export default ItemList;
//export { searchItems };
