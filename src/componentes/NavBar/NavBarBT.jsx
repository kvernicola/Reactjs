import "./navbar.css";
import NavItemBT from "./NavItemBT";
import NavItemDropdownBT from "./NavItemDropdownBT";
import NavItemFormBT from "./NavItemFormBT";
import imgCarrito from "../imgs/imgCarrito.svg"

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
					<img src={imgCarrito} className="App-logo m-3" alt={imgCarrito} />
				</div>
			</div>
		</nav>
	);
}

export default NavBarBT;
