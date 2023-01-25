function Form() {
	const blockKey = "ñ-+?¡¿'";

	function handleSubmit(evt) {
		evt.preventDefault();
		alert("Se ha enviado el formulario");
	}

	function handleKeyDown(evt) {
		let key = evt.key.toLowerCase();
		console.log(key);
		if (blockKey.includes(key)) {
			evt.preventDefault();
			console.log("Bloqueado");
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<input
					className="inputTxt"
					onKeyDown={handleKeyDown}
					type="text"
					placeholder="Ingresa el texto"
				/>
				<button type="submit">Enviar</button>
			</div>
		</form>
	);
}

export default Form;
