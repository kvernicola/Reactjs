import { Link } from "react-router-dom";

function NavBarDropdown() {
	return (
		<ul className="dropdown-menu" style={{margin: 0}}>
			<Link className="dropdown-item" to={"/productos"}>
				Todos los Productos
			</Link>
			<Link className="dropdown-item" to={"/categoria/Cheesecake"}>
				CheeseCakes
			</Link>
			<Link className="dropdown-item" to={"/categoria/Lingotes"}>
				Lingotes
			</Link>
			<Link className="dropdown-item" to={"/categoria/Tortas"}>
				Tortas
			</Link>
		</ul>
	);
}

export default NavBarDropdown;