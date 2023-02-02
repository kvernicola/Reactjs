import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const cartContext = createContext({});

/* Swal.fire({
				title: "Success",
				text: "El producto fue agregado al carrito",
				icon: "success",
				confirmButtonText: "ok",
			}); */

function toastNofify(mensaje, type) {
	switch (type) {
		case "info":
			toast.info(mensaje, {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			break;
		case "error":
			toast.error(mensaje, {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			break;
		case "warn":
			toast.warn(mensaje, {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			break;
		default:
			toast.success(mensaje, {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
	}
}

function CartProvider(props) {
	const [inCart, setInCart] = useState([]);

	const addToCart = (product) => {
		const foundProduct = inCart.findIndex((item) => item.id === product.id);
		console.log("Producto con Index:--->", foundProduct, inCart); //retorna la posicion

		if (foundProduct === -1) {
			setInCart([...inCart, product]); //agrego el producto al carrito
			const mensaje = `Agregaste: ${product.quantity} ${product.category} ${product.name} al carrito`;
			toastNofify(mensaje);
		} else {
			//removeFromCart(product);
			const updateProduct = [...inCart]
			updateProduct[foundProduct].quantity += product.quantity

			setInCart(updateProduct);
			const mensaje = `Actualizaste el producto: ${product.category} ${product.name} en el carrito`;
			const type = "info"
			toastNofify(mensaje, type);
		}
	};

	function getTotalPrice() {
		const pricePerQuantity = inCart.map((item) => item.price * item.quantity);
		const initialValue = 0;
		const total = pricePerQuantity.reduce(
			(acc, priceItem) => acc + priceItem,
			initialValue
		);
		return total;
	}

	function getTotalItemsInCart() {
		const initialValue = 0;
		const itemsInCart = inCart.map((item) => item.quantity);
		const totalItems = itemsInCart.reduce(
			(acc, quantityItem) => acc + quantityItem,
			initialValue
		);
		return totalItems;
	}

	const removeFromCart = (product) => {
		const mensaje = `Eliminaste el producto: ${product.category} ${product.name} del carrito`;
		const type = "info";
		toastNofify(mensaje, type);
		setInCart(inCart.filter((item) => item.id !== product.id));
	};

	const clearCart = () => {
		setInCart([]);
		const mensaje = "Vaciaste el carrito";
		toastNofify(mensaje);
		//localStorage.removeItem("inCart");
	};

	/* useEffect(() => {
		if (localStorage.getItem("inCart")) {
			setInCart(JSON.parse(localStorage.getItem("inCart")));
			setTotal(JSON.parse(localStorage.getItem("total")));
		}
		localStorage.setItem("inCart", JSON.stringify(inCart));
		localStorage.setItem("total", JSON.stringify(total));
	}, []); */

	return (
		<cartContext.Provider
			value={{
				inCart,
				user: "Invitado",
				addToCart,
				getTotalItemsInCart,
				getTotalPrice,
				removeFromCart,
				clearCart,
			}}
		>
			{props.children}
		</cartContext.Provider>
	);
}

export { CartProvider };
