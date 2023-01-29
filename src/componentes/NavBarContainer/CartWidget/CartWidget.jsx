import "../CartWidget/cartwidget.css";
import imgCarrito from "../../imgs/imgCarrito.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../storage/cartContext";
import ItemCart from "./ItemCart";
import FlexContainer from "../../FlexContainer/FlexContainer";
import Button from "../../Button/Button";

function CartWidget() {
	const { getTotalItemsInCart } = useContext(cartContext);

	return (
		<Link to={"/carrito"}>
			<img src={imgCarrito} className="navBarLogo m-3" alt={imgCarrito} />
			<div className="itemsCarrito">{getTotalItemsInCart()}</div>
		</Link>
	);
}

function Cart() {
	const { inCart, getTotalItemsInCart, getTotalPrice, clearCart } =
		useContext(cartContext);
	
	function handleOnClick() {
		clearCart();
	}

	return (
		<>
			<h1 className="m-3">Carrito</h1>
			<FlexContainer className="flexContainer">
				<FlexContainer className="flexContainer navCart">
					<div className="deleteCart col-1"></div>
					<div className="imgCart col-2"></div>
					<div className="nameCart col-2">
						<h6>NOMBRE</h6>
					</div>
					<div className="priceCart col-2">
						<h6>PRECIO</h6>
					</div>
					<div className="quantityCart col-2">
						<h6>CANTIDAD</h6>
					</div>
					<div className="subtotalCart col-2">
						<h6>SUBTOTAL</h6>
					</div>
				</FlexContainer>
			</FlexContainer>
			{inCart.map((itemProduct) => {
				return <ItemCart product={itemProduct} key={itemProduct.id} />;
			})}
			<FlexContainer className="flexContainer">
				<div className="col-6">
					{inCart.length === 0 ? (
						<FlexContainer className="flexContainer">
							<Button
								href="/productos"
								className="btn btn-danger"
							>
								Ver todos los productos
							</Button>
						</FlexContainer>
					) : (
						<FlexContainer className="flexContainer">
							<Button className="btn btn-danger" onClick={handleOnClick}>
								Vaciar Carrito
							</Button>
						</FlexContainer>
					)}
				</div>
				<div className="col-6">
					<h4>Total del carrito</h4>
					<div className="d-flex justify-content-between p-1 pe-5">
						<h6 className="d-flex justify-content-start">Cant. Productos:</h6>
						<span className="d-flex justify-content-end">
							{getTotalItemsInCart()}
						</span>
					</div>
					<div className="d-flex justify-content-between p-1 pe-5">
						<h6><strong>Total:</strong></h6>
						<strong className="d-flex justify-content-end">
							$ {getTotalPrice()}
						</strong>
					</div>
				</div>
			</FlexContainer>
		</>
	);
}

export default CartWidget;
export { Cart };
