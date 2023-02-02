import Button from "../../Button/Button";
import FlexContainer from "../../FlexContainer/FlexContainer";
import { useContext } from "react";
import { cartContext } from "../../../storage/cartContext";
import { Link } from "react-router-dom";

function ItemsCartWidget(props) {
	const { name, image, price, quantity, category, id } = props.product;

	function handleOnClick() {
		removeFromCart(props.product);
	}
	const { removeFromCart } = useContext(cartContext);
	return (
		<FlexContainer className="flexContainer itemCart">
			<div className="deleteCart col-1">
				<Button className="btn btn-danger" onClick={handleOnClick}>
					X
				</Button>
			</div>
			<div className="imgCart col-2">
				<Link to={`/detalle/${id}`}>
					<img src={image} className="img-fluid" alt={name} />
				</Link>
			</div>
			<div className="nameCart col-2">
				<Link to={`/detalle/${id}`}>
					{category} {name}
				</Link>
			</div>
			<div className="priceCart col-2">$ {price}</div>
			<div className="quantityCart col-2">{quantity}</div>
			<div className="subtotalCart col-2">$ {price * quantity}</div>
		</FlexContainer>
	);
}

export default ItemsCartWidget;
