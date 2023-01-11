const ProductsDB = [
	{
		id: 1,
		name: "CheeseCakeFrutilla",
		image: "https://imageup.me/images/e8f6d4b0-84cf-478f-a867-72d1221abe6a.png",
		price: 310,
		category: "pasteleria",
		description: "Descripcion del producto 1",
		stock: 8,
	},
	{
		id: 2,
		name: "CheeseCakeFrutosRojos",
		image: "https://imageup.me/images/6817a397-a917-4a2a-ae9a-d7b203311f6b.png",
		price: 320,
		category: "pasteleria",
		description: "Descripcion del producto 2",
		stock: 6,
	},
	{
		id: 3,
		name: "CheeseCakeOreo",
		image: "https://imageup.me/images/d00e60c8-2bf6-4e72-b81a-a2d7684b9623.png",
		price: 330,
		category: "pasteleria",
		description: "Descripcion del producto 3",
		stock: 11,
	},
	{
		id: 4,
		name: "CheeseCakeFrutilla",
		image: "https://imageup.me/images/e8f6d4b0-84cf-478f-a867-72d1221abe6a.png",
		price: 310,
		category: "pasteleria",
		description: "Descripcion del producto 4",
		stock: 8,
	},
	{
		id: 5,
		name: "CheeseCakeFrutosRojos",
		image: "https://imageup.me/images/6817a397-a917-4a2a-ae9a-d7b203311f6b.png",
		price: 320,
		category: "panaderia",
		description: "Descripcion del producto 5",
		stock: 14,
	},
	{
		id: 6,
		name: "CheeseCakeOreo",
		image: "https://imageup.me/images/d00e60c8-2bf6-4e72-b81a-a2d7684b9623.png",
		price: 330,
		category: "panaderia",
		description: "Descripcion del producto 6",
		stock: 13,
	},
];

function listarProductos() {
	return new Promise((resolve, reject) => {
		console.log("Conectando a la DB");
		let error = false;
		setTimeout(() => {
			if (error) reject("No se pudo realizar la consulta");
			else resolve(ProductsDB);
		}, 2000);
	});
}

function listarProducto(product_id) {
	return new Promise((resolve, reject) => {
		const found = ProductsDB.find((itemProduct) => {
			console.log("%cBuscando producto", "background-color: red");
			console.log(itemProduct.id, product_id);
			return itemProduct.id === parseInt(product_id);
		});

		setTimeout(() => {
			if (!found) reject(`Producto ${product_id} no encontrado`);
			else resolve(found);
		}, 2000);
	});
}

function listarProductoPorCategoria(category_id) {
	return new Promise((resolve, reject) => {
		const found = ProductsDB.filter((itemProduct) => {
			console.log("%cFiltrando producto", "background-color: orange");
			console.log(itemProduct.category, category_id);
			return itemProduct.category === category_id;
		});

		setTimeout(() => {
			if (!found) reject(`Categoria ${category_id} no encontrado`);
			else resolve(found);
		}, 2000);
	});
}

export default listarProductos;
export { listarProducto, listarProductoPorCategoria };
