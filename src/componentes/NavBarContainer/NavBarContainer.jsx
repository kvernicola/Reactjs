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
	const context = useContext(cartContext)
	console.log("------>", context);

/* function handleSubmit(evt) {
	evt.preventDefault();
	let user = evt.target[0].value;
	props.onLogin(user);
	
	console.log(evt);
	console.log(evt.target[0].value);
} */

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
								return <ItemNavBar navLinks={navBarLink} key={navBarLink.title} />;
							})}
						</ul>
						<NavBarForm />
						<Button onClick={props.onLogout} className={"btn btn-danger"}>
							Log out: {context.user}
						</Button>
						{/* <form onSubmit={handleSubmit}>
							Iniciar sesion
							<input name="user" />
						</form> */}
						<CartWidget>{context.inCart.length}</CartWidget>
						{/* cambiar cantidad de objetos por cantidad de productos */}
					</div>
				</div>
			</nav>
		</header>
	);
}

export default NavBarContainer;
