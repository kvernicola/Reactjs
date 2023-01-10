const ProductDB = [
	{
		id: 1,
		name: "CheeseCakeFrutilla",
		image: "https://imageup.me/images/e8f6d4b0-84cf-478f-a867-72d1221abe6a.png",
		price: 310,
		description: "Descripcion del producto 1",
		stock: 8,
	},
	{
		id: 2,
		name: "CheeseCakeFrutosRojos",
		image: "https://imageup.me/images/6817a397-a917-4a2a-ae9a-d7b203311f6b.png",
		price: 320,
		description: "Descripcion del producto 2",
		stock: 14,
	},
	{
		id: 3,
		name: "CheeseCakeOreo",
		image: "https://imageup.me/images/d00e60c8-2bf6-4e72-b81a-a2d7684b9623.png",
		price: 330,
		description: "Descripcion del producto 3",
		stock: 13,
	},
	{
		id: 4,
		name: "CheeseCakeFrutilla",
		image: "https://imageup.me/images/e8f6d4b0-84cf-478f-a867-72d1221abe6a.png",
		price: 310,
		description: "Descripcion del producto 1",
		stock: 8,
	},
	{
		id: 5,
		name: "CheeseCakeFrutosRojos",
		image: "https://imageup.me/images/6817a397-a917-4a2a-ae9a-d7b203311f6b.png",
		price: 320,
		description: "Descripcion del producto 2",
		stock: 14,
	},
	{
		id: 6,
		name: "CheeseCakeOreo",
		image: "https://imageup.me/images/d00e60c8-2bf6-4e72-b81a-a2d7684b9623.png",
		price: 330,
		description: "Descripcion del producto 3",
		stock: 13,
	},
];

function listarProductos() {
	return new Promise((resolve, reject) => {
		console.log("Conectando a la BD");
		let error = false;
		setTimeout(() => {
			if (error) reject("No se pudo realizar la consulta");
			else resolve(ProductDB);
		}, 2000);
	});
}

function listarProducto(id) {
	return new Promise((resolve, reject) => {
		console.log("Conectando a la BD");
		let error = false;
		setTimeout(() => {
			if (error) reject("No se pudo realizar la consulta");
			else resolve(ProductDB[1]);
		}, 2000);
	});
}

export default listarProductos;
export { listarProducto };
