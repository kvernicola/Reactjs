const ProductDB = [
	{
		id: 1,
		nombre: "CheeseCakeFrutilla",
		imagen:
			"https://imageup.me/images/e8f6d4b0-84cf-478f-a867-72d1221abe6a.png",
		precio: 310,
		descripcion: "Descripcion del producto 1",
		stock: 8,
	},
	{
		id: 2,
		nombre: "CheeseCakeFrutosRojos",
		imagen:
			"https://imageup.me/images/6817a397-a917-4a2a-ae9a-d7b203311f6b.png",
		precio: 320,
		descripcion: "Descripcion del producto 2",
		stock: 14,
	},
	{
		id: 3,
		nombre: "CheeseCakeOreo",
		imagen:
			"https://imageup.me/images/d00e60c8-2bf6-4e72-b81a-a2d7684b9623.png",
		precio: 330,
		descripcion: "Descripcion del producto 3",
		stock: 13,
	},
	{
		id: 4,
		nombre: "CheeseCakeFrutilla",
		imagen:
			"https://imageup.me/images/e8f6d4b0-84cf-478f-a867-72d1221abe6a.png",
		precio: 310,
		descripcion: "Descripcion del producto 1",
		stock: 8,
	},
	{
		id: 5,
		nombre: "CheeseCakeFrutosRojos",
		imagen:
			"https://imageup.me/images/6817a397-a917-4a2a-ae9a-d7b203311f6b.png",
		precio: 320,
		descripcion: "Descripcion del producto 2",
		stock: 14,
	},
	{
		id: 6,
		nombre: "CheeseCakeOreo",
		imagen:
			"https://imageup.me/images/d00e60c8-2bf6-4e72-b81a-a2d7684b9623.png",
		precio: 330,
		descripcion: "Descripcion del producto 3",
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
			else resolve(ProductDB[4]);
		}, 2000);
	});
}

export default listarProductos
export {listarProducto};

