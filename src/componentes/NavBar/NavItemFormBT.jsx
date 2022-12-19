import ButtonBT from "../Button/ButtonBT";

function NavItemFormBT() {
	return (
		<form className="d-flex" role="search">
			<input
				className="form-control me-2"
				type="Buscar"
				placeholder="Buscar"
				aria-label="Buscar"
			></input>
			<ButtonBT text="Buscar" />
		</form>
	);
}

export default NavItemFormBT;
