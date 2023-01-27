import { createContext } from "react";
import { useState, useEffect } from "react";

export const cartContext = createContext({});

function CartProvider(props) {
	const [inCart, setInCart] = useState([]);
	const [total, setTotal] = useState(0);

	const addToCart = (product) => {
		const foundProduct = inCart.findIndex((item) => item.id === product.id);
		if (foundProduct === -1) {
			console.log("Producto agregado");
			setInCart([...inCart, product]);
			/* setInCart(inCart.map((item) => {
				if (item.id === product.id) {
					return {...item, quantity: item.quantity + 1 };
                } else {
					return item;
                } */
		} else {
			console.log(
				"El producto ya existe en el carrito y no se agrego ni actualizo"
			);
		}
		console.log("Encontrado en la posicion:", foundProduct);
	};

	function getTotalPrice() {
		const pricePerQuantity = inCart.map((item) => item.price * item.count);
		console.log("Subtotal por producto", pricePerQuantity);
		const initialValue = 0;
		const total = pricePerQuantity.reduce(
			(acc, priceItem) => acc + priceItem,
			initialValue
		);
		console.log("$", total);
		return total
	}

	function getTotalItemsInCart() {
		const initialValue = 0;
		const itemsInCart = inCart.map((item) => item.count);
		const totalItems = itemsInCart.reduce(
			(acc, quantityItem) => acc + quantityItem,
			initialValue
		);
		console.log("TotalItemsInCart", totalItems);
		return totalItems;
	}

	const removeFromCart = (product) => {
		setInCart(inCart.filter((item) => item.id !== product.id));
		setTotal(total - product.price);
	};

	const clearCart = () => {
		setInCart([]);
		setTotal(0);
		localStorage.removeItem("inCart");
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
			value={{ inCart, user: "Denise", addToCart, getTotalItemsInCart, getTotalPrice }}
		>
			{props.children}
		</cartContext.Provider>
	);
}

export { CartProvider };
