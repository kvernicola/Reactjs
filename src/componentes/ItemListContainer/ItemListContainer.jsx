import Flex from "../Flex/Flex";
import Card from "../Card/Card";
import imgCheeseFrutilla from "../imgs/CheeseFrutilla.png";
import imgCheeseFR from "../imgs/CheeseFR.png";
import imgCheeseOreo from "../imgs/CheeseOreo.png";

const Productos = [
	{
		id: 1,
		nombre: "CheeseCakeFrutilla",
		img: "../imgs/CheeseFrutilla.png",
		precio: 310,
		descripcion: "",
	},
	{
		id: 2,
		nombre: "CheeseFR",
		img: "../imgs/CheeseFR.png",
		precio: 320,
		descripcion: "",
	},
	{
		id: 3,
		nombre: "CheeseOreo",
		img: "../imgs/CheeseOreo.png",
		precio: 330,
		descripcion: "",
	},
];

const [item1, item2, item3] = Productos;
//console.log(id1);



function ItemListContainer() {
    return(
        <Flex>
        <Card nombre={item1.nombre} precio={item1.precio} img={imgCheeseFrutilla} />
        <Card nombre={item2.nombre} precio={item2.precio} img={imgCheeseFR} />
        <Card nombre={item3.nombre} precio={item3.precio} img={imgCheeseOreo} />
        </Flex>
        );
}

export default ItemListContainer;
