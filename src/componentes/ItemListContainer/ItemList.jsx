import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import listarProductos, {
	listarProductoPorCategoria,
} from "../../services/dataBase";
import ItemCard from "./Card/ItemCard";

function ItemList() {
	const [Productos, setProductos] = useState([]);
	let params = useParams();
	console.log(useParams());
	console.log("%cRenderizando ItemListContainer", "background-color: blue");

	useEffect(() => {
		if (!params.category_id) {
			listarProductos()
				.then((resolveDB) => {
					setProductos(resolveDB);
					console.log("Resultado ", resolveDB);
				})
				.catch((rejectDB) => {
					alert(rejectDB);
				});
		} else {
			listarProductoPorCategoria(params.category_id)
				.then((resolveDB) => {
					setProductos(resolveDB);
					console.log("Resultado ", resolveDB);
				})
				.catch((rejectDB) => {
					alert(rejectDB);
				});
		}

		setTimeout(() => {
			console.log("Iniciando consulta de productos disponibles");
		}, 1000);
	}, [params]);

	return (
		<>
			{Productos.map((itemProducto) => {
				return <ItemCard producto={itemProducto} key={itemProducto.id} />;
			})}
		</>
	);
}

export default ItemList;
