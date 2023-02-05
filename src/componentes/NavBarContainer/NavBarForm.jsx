import ButtonBuscar from "../Button/ButtonBuscar";

function NavBarForm(props) {

	return (
		<form className="d-flex" role="search">
			<input
				name="Search"
				className="form-control me-3"
				type="Search"
				placeholder="Buscar"
				aria-label="Buscar"
			></input>
			<ButtonBuscar
				onSubmit={props.onSubmit}
				text="Buscar"
				className="btn btn-outline-success me-3"
			/>
		</form>
	);
}

export default NavBarForm;
