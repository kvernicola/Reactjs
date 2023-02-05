import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const cartContext = createContext({});

function toastNotify(mensaje, type) {
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
	//const [saveInLocalStorage, setSaveInLocalStorage] = useState([]);
	const [searchText, setSearchText] = useState(null);

	function saveInLocalStorage() {
		localStorage.setItem("inCart", JSON.stringify(inCart));
	}

	// RESOLVER EL GUARDADO EN EL LOCALSTORAGE
	useEffect(() => {
		/* if (localStorage.getItem("inCart")) {
			setInCart(JSON.parse(localStorage.getItem("inCart")));
		} */
		//localStorage.setItem("inCart", JSON.stringify(inCart));
		//console.log(JSON.parse(localStorage.getItem("inCart")));
	}, [inCart]);

	// agregar producto al carrito
	const addToCart = (product) => {
		const foundProduct = inCart.findIndex((item) => item.id === product.id);

		// si no existe lo agrega
		if (foundProduct === -1) {
			setInCart([...inCart, product]);
			const mensaje = `Agregaste: ${product.quantity} ${product.category} ${product.name} al carrito`;
			toastNotify(mensaje);
			// si existe le suma la cantidad al producto en el carrito
		} else {
			const addQuantity = structuredClone(inCart); // ej 1 deepcopy
			//const addQuantity = JSON.parse(JSON.stringify(inCart)); //ej 2 deepcopy
			addQuantity[foundProduct].quantity += product.quantity;
			setInCart(addQuantity);
			const mensaje = `Actualizaste el producto: ${product.category} ${product.name} en el carrito`;
			const type = "info";
			toastNotify(mensaje, type);
		}
		saveInLocalStorage();
	};

	// caclcular el precio total
	function getTotalPrice() {
		const pricePerQuantity = inCart.map((item) => item.price * item.quantity);
		const initialValue = 0;
		const total = pricePerQuantity.reduce(
			(acc, priceItem) => acc + priceItem,
			initialValue
		);
		return total;
	}

	// calcular la cantidad de items en carrito
	function getTotalItemsInCart() {
		const initialValue = 0;
		const itemsInCart = inCart.map((item) => item.quantity);
		const totalItems = itemsInCart.reduce(
			(acc, quantityItem) => acc + quantityItem,
			initialValue
		);
		return totalItems;
	}

	// eliminar el producto del carrito
	const removeFromCart = (product) => {
		const mensaje = `Eliminaste el producto: ${product.category} ${product.name} del carrito`;
		const type = "info";
		toastNotify(mensaje, type);
		setInCart(inCart.filter((item) => item.id !== product.id));
		localStorage.setItem("inCart", JSON.stringify(inCart));
	};

	// vaciar el carrito
	const clearCart = () => {
		setInCart([]);
		const mensaje = "El carrito ahora esta vacio";
		toastNotify(mensaje);
		//localStorage.removeItem("inCart");
	};

	// filtrar productos por texto - busca solo en la base, no en el carrito
	function search(text) {
		setSearchText(text);
		//console.log(searchText);
	}

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
				toastNotify,
				search,
				searchText,
			}}
		>
			{props.children}
		</cartContext.Provider>
	);
}

export { CartProvider };
