import "./navbar.css";
import NavBarDropdown from "./NavBarDropdown";
import ItemNavBar from "./ItemNavBar";
import NavBarForm from "./NavBarForm";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBarContainer() {
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
		{
			id: 3,
			title: "Detalle",
			url: "/detail",
			classLi: "nav-item",
			classA: "nav-link",
		},
	];
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
						<CartWidget>10</CartWidget>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default NavBarContainer;
