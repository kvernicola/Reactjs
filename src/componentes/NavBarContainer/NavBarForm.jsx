import ButtonBuscar from "../Button/ButtonBuscar";

function NavBarForm(props) {
	return (
		<form className="d-flex" role="search">
			<input
				name="Buscar"
				className="form-control me-3"
				type="Buscar"
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
