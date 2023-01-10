import { useEffect, useState } from "react";
import listarProductos from "../../services/dataBase";
import ItemCard from "./Card/ItemCard";

function ItemList() {
	const [Productos, setProductos] = useState([]);

	console.log("%cRenderizando ItemListContainer", "background-color: blue");

	useEffect(() => {
		listarProductos()
			.then((resolveDB) => {
				setProductos(resolveDB);
				console.log("Resultado ", resolveDB);
			})
			.catch((rejectDB) => {
				alert(rejectDB);
			});
		setTimeout(() => {
			console.log("Iniciando consulta de productos disponibles");
		}, 1000);
	}, []);

	return (
		<>
			{Productos.map((itemProducto) => {
				return <ItemCard producto={itemProducto} key={itemProducto.id} />;
			})}
			
		</>
	);
}

export default ItemList;
