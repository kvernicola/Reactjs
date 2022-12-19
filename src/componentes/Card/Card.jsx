import Button from "../Button/Button";

const Card = ({ nombre, img, precio, descripcion }) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={img} className="card-img-top" alt={nombre} />
			<div className="card-body">
				<h4 className="card-title">{nombre}</h4>
				<p className="card-text">Descripcion del producto {descripcion}</p>
				<h5>${precio}</h5>
				<Button text="Comprar" href="/comprar" className="btn btn-primary" />
			</div>
		</div>
	);
};

export default Card;


