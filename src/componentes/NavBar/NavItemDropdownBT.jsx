import NavItemBT from "./NavItemBT";

function NavItemDropdownBT() {
	return (
		<ul className="dropdown-menu">
			<a className="dropdown-item" href="/pasteleria">
				Pastelería
			</a>
			<a className="dropdown-item" href="/panaderia">
				Panadería
			</a>
		</ul>
	);
}

export default NavItemDropdownBT;
