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

	useEffect(() => {
		if (searchText) {
			getProductsBySearchText(searchText)
				.then((resolveDB) => {
					setProducts(resolveDB);
				})
				.catch((rejectDB) => {
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
				})
				.catch((rejectDB) => {
					alert(rejectDB);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
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