import Button from "../Button/Button";
import "./form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
	const blockKey = "ñ-+?¡¿'";

	function handleSubmit(evt) {
		evt.preventDefault();
		toast.success("Se ha enviado el formulario !", {
			position: toast.POSITION.TOP_CENTER,
		});
	}

	function handleKeyDown(evt) {
		let key = evt.key.toLowerCase();
		console.log(key);
		if (blockKey.includes(key)) {
			evt.preventDefault();
			toast.error("No se puede usar ñ-+?¡¿' !", {
				position: toast.POSITION.TOP_CENTER,
			});
			console.log("Bloqueado");
		}
	}

	return (
		<div className="parallax">
			<div className="container">
				<div className="front side">
					<div className="content">
						<h1>Sweetvelvet By Paula</h1>
						<p>
							I am a graphic designer and art director. I am as well specialised
							in front end web design, user experience and creating identities.
							Throughout my career, I have worked with companies of all shapes
							and sizes that enriched my experience
						</p>
					</div>
				</div>
				<div className="back side">
					<div className="content">
						<h1>Contactanos</h1>
						<form onSubmit={handleSubmit}>
							<label>Nombre :</label>
							<input type="text" placeholder="Tu nombre" />
							<label>E-mail :</label>
							<input onKeyDown={handleKeyDown} type="text" placeholder="ejemplo@mail.com" />
							<label>Mensaje :</label>
							<textarea placeholder="Dejanos tu mensaje"></textarea>
							<input type="submit" value="Enviar" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;

/* function Form() {
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

export default Form; */
