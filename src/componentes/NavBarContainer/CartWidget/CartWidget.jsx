import "../CartWidget/cartwidget.css";
import imgCarrito from "../../imgs/imgCarrito.svg";
import { Link } from "react-router-dom";

function CartWidget(props) {
	return (
		<Link to={"/cart"}>
			<img src={imgCarrito} className="navBarLogo m-3" alt={imgCarrito} />
			<div className="itemsCarrito">{props.children}</div>
		</Link>
	);
}

export default CartWidget;
