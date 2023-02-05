import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductSoldByID } from "../../../services/firebase";


function CartSold() {
	const [productID, setProductID] = useState("");
	const { buyer, date, items, total } = productID;

	let { venta_id } = useParams();
	//console.log(venta_id);

	useEffect(() => {
		getProductSoldByID(venta_id).then((product) => {
			const productById = product.data();
			//const { buyer, date, items, total } = product.data();
			console.log(productById);
			setProductID(productById); // al setear productID entra en bucle
			//console.log(productID);
		});
	}, [venta_id]);

	return (
		<div>
			<h1>Gracias por su compra</h1>
			<h4>El Id de su compra es: {venta_id}</h4>
            <span>"NO SE MUESTRAN TODOS LOS PRODUCTOS"</span>
            <br />
			{productID && (
				<>
					<span>
						Comprador: {buyer.name} {buyer.lastname}
					</span>
					<br />
					<span>Email: {buyer.email}</span>
					<br />
					<span>Telefono: {buyer.phone}</span>
					<br />
					<span>Producto: {items[0].name}</span>
					<br />
					<span>Cantidad: {items[0].quantity}</span>
					<br />
					<strong>Total: $ {total}</strong>
				</>
			)}
		</div>
	);
}

export default CartSold;
