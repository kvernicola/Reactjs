import NavItemBT from "./NavItemBT";

function NavItemDropdownBT() {

	return (
		<ul className="dropdown-menu">
			<NavItemBT classNameA="dropdown-item" href="/pasteleria">
				Pastelería
			</NavItemBT>
			<NavItemBT classNameA="dropdown-item" href="/panaderia">
				Panadería
			</NavItemBT>
		</ul>
	);
};

export default NavItemDropdownBT;

