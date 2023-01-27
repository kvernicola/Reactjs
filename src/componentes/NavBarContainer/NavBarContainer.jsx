import "./navbar.css";
import NavBarDropdown from "./NavBarDropdown";
import ItemNavBar from "./ItemNavBar";
import NavBarForm from "./NavBarForm";
import CartWidget from "./CartWidget/CartWidget";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";

function NavBarContainer(props) {
	const navBarLinks = [
		{
			id: 1,
			title: "Historia",
			url: "/historia",
			classLi: "nav-item",
			classA: "nav-link",
		},
		{
			id: 2,
			title: "Contacto",
			url: "/contacto",
			classLi: "nav-item",
			classA: "nav-link",
		},
		/* {
			id: 3,
			title: "Detalle",
			url: "/detalle",
			classLi: "nav-item",
			classA: "nav-link",
		}, */
	];
	//const context = useContext(cartContext);
	const { user, inCart, } = useContext(cartContext);
	
	// El inCart.length no va, hay que hacer  la suma de la cantidad de items
	if (inCart.length === 0) {
		console.log("No hay items en el carrito");
	} else {
		console.log("Elementos en el carrito------>", inCart);
    }
	
	function handleSubmit(evt) {
		evt.preventDefault();
		let user = evt.target.form[0].value;
		props.onLogin(user);
		console.log(evt.target.form[0].value);
	}

	return (
		<header className="App-header">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<Link className="navbar-brand me-5 logoName" to={"/"}>
						Sweetvelvet <br /> By Paula
					</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									to={"/"}
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Productos
								</Link>
								<NavBarDropdown />
							</li>
							{navBarLinks.map((navBarLink) => {
								return (
									<ItemNavBar navLinks={navBarLink} key={navBarLink.title} />
								);
							})}
						</ul>
						<NavBarForm onSubmit={handleSubmit} />
						<Button onClick={props.onLogout} className={"btn btn-danger"}>
							Log out: {user}
						</Button>
						{/* cambiar cantidad de objetos por cantidad de productos */}
						<CartWidget></CartWidget>
						{/* <form onSubmit={handleSubmit}>
							Iniciar sesion
							<input name="user" />
						</form> */}
					</div>
				</div>
			</nav>
		</header>
	);
}

export default NavBarContainer;

// 0 + 1 + 2 + 3 + 4

/* const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	initialValue
);
console.log(sumWithInitial); */

// Expected output: 10
