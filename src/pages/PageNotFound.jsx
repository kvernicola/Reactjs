import React from "react";
import "./page.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
	const navigateTo = useNavigate();

	setTimeout(() => {
		navigateTo("/productos");
	}, 5000);

	return (
		<div className="notFound">
			<h1>Pagina no encontrada</h1>
			<div>
				<span>Redireccionando a seccion productos</span>
			</div>
			<img
				className="imgNotFound"
				src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"
				alt="pagina no encontrada"
			/>
		</div>
	);
}

export default PageNotFound;
