import ButtonBuscar from "../Button/ButtonBuscar";

function NavBarForm() {
	return (
		<form className="d-flex" role="search">
			<input
				className="form-control me-3"
				type="Buscar"
				placeholder="Buscar"
				aria-label="Buscar"
			></input>
			<ButtonBuscar text="Buscar" className="btn btn-outline-success me-3"/>
		</form>
	);
}

export default NavBarForm;
