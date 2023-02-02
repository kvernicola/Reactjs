import "../CartWidget/cartwidget.css";
import imgCarrito from "../../imgs/imgCarrito.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../storage/cartContext";
import ItemsCartWidget from "./ItemsCartWidget";
import FlexContainer from "../../FlexContainer/FlexContainer";
import Button from "../../Button/Button";

function CartWidget() {
	const { inCart, getTotalItemsInCart } = useContext(cartContext);

	return (
		<Link to={"/carrito"}>
			<img src={imgCarrito} className="navBarLogo m-3" alt={imgCarrito} />
			{inCart.length !== 0 && (
				<div className="itemsCarrito">{getTotalItemsInCart()}</div>
			)}
		</Link>
	);
}

function Cart() {
	const { inCart, getTotalItemsInCart, getTotalPrice, clearCart } =
		useContext(cartContext);

	function handleClearCart() {
		clearCart();
	}

	function handlePurchase() {
		window.location.href = "/carrito";
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
			<div className="col-12">
				{inCart.map((itemProduct) => {
					return <ItemsCartWidget product={itemProduct} key={itemProduct.id} />;
				})}
			</div>

			<FlexContainer className="flexContainer">
				<div className="col-6">
					{inCart.length === 0 ? (
						<FlexContainer className="flexContainer">
							<Button href="/productos" className="btn btn-danger">
								Ver todos los productos
							</Button>
						</FlexContainer>
					) : (
						<>
							<FlexContainer className="flexContainer">
								<Button href="/productos" className="btn btn-danger">
									Agregar mas productos
								</Button>
								<Button className="btn btn-danger" onClick={handleClearCart}>
									Vaciar Carrito
								</Button>
							</FlexContainer>
							<FlexContainer className="flexContainer"></FlexContainer>
						</>
					)}
				</div>
				<div className="col-6">
					<h4>Total del Carrito</h4>
					<div className="d-flex justify-content-between p-1 pe-5">
						<h6 className="d-flex justify-content-start">Cant. Productos:</h6>
						<span className="d-flex justify-content-end">
							{getTotalItemsInCart()}
						</span>
					</div>
					<div className="d-flex justify-content-between p-1 pe-5">
						<h6>
							<strong>Total:</strong>
						</h6>
						<strong className="d-flex justify-content-end">
							$ {getTotalPrice()}
						</strong>
					</div>
					<Button className="btn btn-danger" onClick={handlePurchase}>
						Finalizar Compra
					</Button>
				</div>
			</FlexContainer>
		</>
	);
}

export default CartWidget;
export { Cart };
