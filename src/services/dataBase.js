const ProductsDB = [
	{
		id: 1,
		name: "Frutilla",
		image: "https://i.ibb.co/ZBrCgR2/Cheese-Frutilla.jpg",
		price: 920,
		category: "Cheesecake",
		description: "Base de biscuit de vainilla, queso crema y mermelada de frutilla.",
		stock: 8,
	},
	{
		id: 2,
		name: "Frutos Rojos",
		image: "https://i.ibb.co/0QMb196/CheeseFR.jpg",
		price: 980,
		category: "Cheesecake",
		description: "Base de galletita crocante, queso crema y frutos rojos.",
		stock: 6,
	},
	{
		id: 3,
		name: "Oreo",
		image: "https://i.ibb.co/JB3k39t/Cheese-Oreo.jpg",
		price: 930,
		category: "Cheesecake",
		description: "Base de galletitas oreo, dulce de leche y crema oreo.",
		stock: 11,
	},
	{
		id: 4,
		name: "Frutos Rojos Cocido",
		image: "https://i.ibb.co/WfPYq2s/Cheese-Cocido-FR.jpg",
		price: 920,
		category: "Cheesecake",
		description: "Base de galletita crocante, queso crema y frutos rojos.",
		stock: 8,
	},
	{
		id: 5,
		name: "Balcarce",
		image: "https://i.ibb.co/JxJmH9G/Lingote-Balcarce.jpg",
		price: 980,
		category: "Lingote",
		description: "Pionono, cacao, dulce de leche, nuces, merengue seco y crema chantilly.",
		stock: 14,
	},
	{
		id: 6,
		name: "Brownie Merengue",
		image: "https://i.ibb.co/LNC4zYs/lingote-Brownie-Merengue.jpg",
		price: 960,
		category: "Lingote",
		description: "Brownie con nuez, dulce de leche y merengue italiano.",
		stock: 13,
	},
	{
		id: 7,
		name: "Brownie Mousse",
		image: "https://i.ibb.co/5RvkhWr/Lingote-Brownie-Mousse.jpg",
		price: 960,
		category: "Lingote",
		description: "Base brownie, mousse de chocolate con crocante y ganache de chocolate semi amargo.",
		stock: 10,
	},
	{
		id: 8,
		name: "Brownie Nuez",
		image: "https://i.ibb.co/vHzLfkN/lingote-Brownie-Nuez.jpg",
		price: 960,
		category: "Lingote",
		description: "Brownie con nuez, copos de dulce de leche e hilos de chocolate.",
		stock: 8,
	},
	{
		id: 9,
		name: "Carrot Cake",
		image: "https://i.ibb.co/8zndXY0/Lingote-Carrot-Cake.jpg",
		price: 970,
		category: "Lingote",
		description: "Biscuit humedo a base de zanahoria, pasas de uvas y nueces, con frosting de naranja.",
		stock: 5,
	},
	{
		id: 10,
		name: "Chaja",
		image: "https://i.ibb.co/cFBNQZ8/Lingote-Chaja.jpg",
		price: 950,
		category: "Lingote",
		description: "Biscuit de vainilla, dulce de leche, merengue seco, crema chantilly y duraznos en almibar.",
		stock: 14,
	},
	{
		id: 11,
		name: "Chocotorta",
		image: "https://i.ibb.co/GxpqVW9/Lingote-Chocotorta.jpg",
		price: 920,
		category: "Lingote",
		description: "Capas de galletitas chocolinas humedecidas con cafe intercaladas con crema chocotorta.",
		stock: 6,
	},
	{
		id: 12,
		name: "Lemon Curd",
		image: "https://i.ibb.co/LdSSH5v/Lingote-Lemon.jpg",
		price: 940,
		category: "Lingote",
		description: "Base de galletitas crocantes de vainilla, lemon curd y merengue italiano bruleado.",
		stock: 4,
	},
	{
		id: 13,
		name: "Brownie",
		image: "https://i.ibb.co/m5qK8vh/torta-Brownie.jpg",
		price: 1660,
		category: "Torta",
		description: "Base de brownie, dulce de leche y merengue italiano.",
		stock: 3,
	},
	{
		id: 14,
		name: "Lemon Pie",
		image: "https://i.ibb.co/Z2VMm96/torta-Lemon-Pie.jpg",
		price: 1530,
		category: "Torta",
		description: "Masa sablee, crema de limon y merengue suizo.",
		stock: 3,
	},
	{
		id: 15,
		name: "New York",
		image: "https://i.ibb.co/Vx6n76f/torta-New-York.jpg",
		price: 1930,
		category: "Torta",
		description: "Base de galletita crocante, queso crema y frutos rojos.",
		stock: 3,
	},
	{
		id: 16,
		name: "Rogel",
		image: "https://i.ibb.co/pbQ49tJ/torta-Rogel.jpg",
		price: 1830,
		category: "Torta",
		description: "Finas capas de masa crocante, dulce de leche y merengue italiano.",
		stock: 3,
	},
];

function getProducts() {
	return new Promise((resolve, reject) => {
		//console.log("Conectando a la DB");
		let error = false;
		setTimeout(() => {
			if (error) reject("No se pudo realizar la consulta");
			else resolve(ProductsDB);
		}, 1000);
	});
}

function getProduct(product_id) {
	return new Promise((resolve, reject) => {
		const found = ProductsDB.find((itemProduct) => {
			//console.log("%cBuscando producto", "background-color: red");
			//console.log(itemProduct.id, product_id);
			return itemProduct.id === parseInt(product_id);
		});

		setTimeout(() => {
			if (!found) reject(`Producto ${product_id} no encontrado`);
			else resolve(found);
		}, 1000);
	});
}

function getProductsByCategory(category_id) {
	return new Promise((resolve, reject) => {
		const found = ProductsDB.filter((itemProduct) => {
			//console.log("%cFiltrando producto", "background-color: orange");
			//console.log(itemProduct.category, category_id);
			return itemProduct.category === category_id;
		});

		setTimeout(() => {
			if (!found) reject(`Categoria ${category_id} no encontrado`);
			else resolve(found);
		}, 2000);
	});
}

export default getProducts;
export { getProduct, getProductsByCategory };
