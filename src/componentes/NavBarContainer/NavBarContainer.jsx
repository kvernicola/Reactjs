import "./navbar.css";
import NavBarDropdown from "./NavBarDropdown";
import NavBar from "./NavBar";
import NavBarForm from "./NavBarForm";
import CartWidget from "../CartWidget/CartWidget";

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
		/* {
			id: 3,
			title: "Login",
			url: "/login",
			classLi: "nav-item",
			classA: "nav-link",
		}, */
	];
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand me-5 logoName" href="/">
					Sweetvelvet <br /> By Paula
				</a>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="/"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Productos
							</a>
							<NavBarDropdown />
						</li>
						{navBarLinks.map((navBarLink) => {
							return <NavBar navLinks={navBarLink} key={navBarLink.title} />;
						})}
					</ul>
					<NavBarForm />
					<CartWidget>10</CartWidget>
				</div>
			</div>
		</nav>
	);
}

export default NavBarContainer;
