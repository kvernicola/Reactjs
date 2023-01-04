import "./cartwidget.css";
import imgCarrito from "../imgs/imgCarrito.svg";


function CartWidget(props) {
	return (
		<div>
			<img src={imgCarrito} className="navBarLogo m-3" alt={imgCarrito} />
			<div className="itemsCarrito">{props.children}</div>
		</div>
	);
}

export default CartWidget;
