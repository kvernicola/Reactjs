import { createContext } from "react";
import { useState, useEffect } from "react";

export const cartContext = createContext({});

function CartProvider(props) {
	const [inCart, setInCart] = useState([]);

	const [total, setTotal] = useState(0);

	const addToCart = (product) => {
		setInCart([...inCart, product]);
		setTotal(total + product.price);
	};
	const removeFromCart = (product) => {
		setInCart(inCart.filter((item) => item.id !== product.id));
		setTotal(total - product.price);
	};
	const clearCart = () => {
		setInCart([]);
		setTotal(0);
		localStorage.removeItem("inCart");
	};

	useEffect(() => {
		if (localStorage.getItem("inCart")) {
			setInCart(JSON.parse(localStorage.getItem("inCart")));
			setTotal(0);
		}
		localStorage.setItem("inCart", JSON.stringify(inCart));
		localStorage.setItem("total", JSON.stringify(total));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<cartContext.Provider value={{ inCart, user: "Denise", addToCart }}>
			{props.children}
		</cartContext.Provider>
	);
}

export { CartProvider };
