import { useEffect, useState } from "react";
import { listarProducto } from "../../services/dataBase";
import FlexContainer from "../FlexContainer/FlexContainer";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
	const [Producto, setProducto] = useState([]);

	console.log("%cRenderizando ItemDetailContainer", "background-color: green");

	useEffect(() => {
		listarProducto()
			.then((resolveDB) => {
				setProducto(resolveDB);
				console.log("Resultado ", resolveDB);
			})
			.catch((rejectDB) => {
				alert(rejectDB);
			});
		setTimeout(() => {
			console.log("consultando detalles del producto");
		}, 1000);
	}, []);
	return (
		<main>
			<FlexContainer>
            <ItemDetail producto={Producto} key={Producto.id} />
			</FlexContainer>
		</main>
	);
}

export default ItemDetailContainer;
