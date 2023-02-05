import React from "react";
import Button from "../componentes/Button/Button";
import { loadProductsToFirestoreWithBatch } from "../services/firebase";

function HomePage() {
	function handleClick() {
		loadProductsToFirestoreWithBatch();
	}

	return (
		<div>
			<h1 className="m-5">Sweetvelvet by Paula</h1>
			<Button onClick={handleClick} className="btn btn-outline-primary mb-5">
				Subir Productos
			</Button>
		</div>
	);
}

export default HomePage;
