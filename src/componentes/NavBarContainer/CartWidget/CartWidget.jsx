import "../CartWidget/cartwidget.css";
import imgCarrito from "../../imgs/imgCarrito.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../storage/cartContext";

function CartWidget(props) {
	const { inCart, getTotalItemsInCart, getTotalPrice } = useContext(cartContext);
	
	return (
		<Link to={"/carrito"}>
			<img src={imgCarrito} className="navBarLogo m-3" alt={imgCarrito} />
			<div className="itemsCarrito">Producto/s: {inCart.length} Cant: {getTotalItemsInCart()} Total: ${getTotalPrice()}</div>
		</Link>
	);
}

export default CartWidget;
