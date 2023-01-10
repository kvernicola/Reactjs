function NavBarDropdown() {
	return (
		<ul className="dropdown-menu" style={{margin: 0}}>
			<a className="dropdown-item" href="/pasteleria">
				Pastelería
			</a>
			<a className="dropdown-item" href="/panaderia">
				Panadería
			</a>
		</ul>
	);
}

export default NavBarDropdown;
