import "./navbar.css";
import NavBarDropdown from "./NavBarDropdown";
import ItemNavBar from "./ItemNavBar";
import NavBarForm from "./NavBarForm";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

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
			title: "Login",
			url: "/login",
			classLi: "nav-item",
			classA: "nav-link",
		}, */
	];

	const { search } = useContext(cartContext);

	function handleSubmit(evt) {
		let text = evt.target.form[0].value;
		search(text);
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
						<CartWidget></CartWidget>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default NavBarContainer;
