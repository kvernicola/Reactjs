import "./navbar.css";
import NavItemBT from "./NavItemBT";
import NavItemDropdownBT from "./NavItemDropdownBT";
import NavItemFormBT from "./NavItemFormBT";
import CartWidget from "../CartWidget/CartWidget";

function NavBarBT() {
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
							<NavItemDropdownBT />
						</li>
						<NavItemBT classNameLi="nav-item" classNameA="nav-link" href="/historia">
							Historia
						</NavItemBT>
						<NavItemBT classNameLi="nav-item" classNameA="nav-link" href="/contacto">
							Contacto
						</NavItemBT>
					</ul>
					<NavItemFormBT />
					<CartWidget>
						10
					</CartWidget>
				</div>
			</div>
		</nav>
	);
}

export default NavBarBT;
