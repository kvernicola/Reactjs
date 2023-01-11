import {useState} from 'react'
import ItemCounter from '../ItemCounter/ItemCounter';
import Button from '../Button/Button';

function ItemDetail(props) {
    const [cart, setCart] = useState("");
	const { name, image, price, description, stock } = props.producto;

	function handleClickCard() {
		setCart(`Agregaste ${name} al carrito`);
	}
  return (
    <div onClick={handleClickCard} className="cardStyleDetail mb-3">
    <img src={image} className="card-img-top imgDetail" alt={name} />
    <div className="favorito">{cart}</div>
    <div className="card-body">
        <h4 className="card-titleDetail mb-3">{name}</h4>
        <p className="card-text">{description}</p>
        <h5 className="mb-3">$ {price}</h5>
        <ItemCounter stock={stock}/>
        <Button
            text="Añadir al carrito"
            href="/carrito"
            className="btn btn-outline-success"
            color="black"
        />
    </div>
</div>
  )
}

export default ItemDetail