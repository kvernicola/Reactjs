import { Link } from "react-router-dom";

function NavBarDropdown() {
	return (
		<ul className="dropdown-menu" style={{margin: 0}}>
			<Link className="dropdown-item" to={"/productos"}>
				Todos los Productos
			</Link>
			<Link className="dropdown-item" to={"/categoria/pasteleria"}>
				Pastelería
			</Link>
			<Link className="dropdown-item" to={"/categoria/panaderia"}>
				Panadería
			</Link>
		</ul>
	);
}

export default NavBarDropdown;
