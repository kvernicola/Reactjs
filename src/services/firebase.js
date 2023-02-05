import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	doc,
	setDoc,
	query,
	where,
	addDoc,
	writeBatch,
} from "firebase/firestore";

const ProductsDB = [
	{
		id: 1,
		name: "Frutilla",
		image: "https://i.ibb.co/ZBrCgR2/Cheese-Frutilla.jpg",
		price: 920,
		category: "Cheesecake",
		description:
			"Base de biscuit de vainilla, queso crema y mermelada de frutilla.",
		stock: 18,
	},
	{
		id: 2,
		name: "Frutos Rojos",
		image: "https://i.ibb.co/0QMb196/CheeseFR.jpg",
		price: 980,
		category: "Cheesecake",
		description: "Base de galletita crocante, queso crema y frutos rojos.",
		stock: 2,
	},
	{
		id: 3,
		name: "Oreo",
		image: "https://i.ibb.co/JB3k39t/Cheese-Oreo.jpg",
		price: 930,
		category: "Cheesecake",
		description: "Base de galletitas oreo, dulce de leche y crema oreo.",
		stock: 11,
		discount: 20,
	},
	{
		id: 4,
		name: "Frutos Rojos Cocido",
		image: "https://i.ibb.co/WfPYq2s/Cheese-Cocido-FR.jpg",
		price: 920,
		category: "Cheesecake",
		description: "Base de galletita crocante, queso crema y frutos rojos.",
		stock: 2,
	},
	{
		id: 5,
		name: "Balcarce",
		image: "https://i.ibb.co/JxJmH9G/Lingote-Balcarce.jpg",
		price: 980,
		category: "Lingote",
		description:
			"Pionono, cacao, dulce de leche, nuces, merengue seco y crema chantilly.",
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
		description:
			"Base brownie, mousse de chocolate con crocante y ganache de chocolate semi amargo.",
		stock: 10,
		discount: 15,
	},
	{
		id: 8,
		name: "Brownie Nuez",
		image: "https://i.ibb.co/vHzLfkN/lingote-Brownie-Nuez.jpg",
		price: 960,
		category: "Lingote",
		description:
			"Brownie con nuez, copos de dulce de leche e hilos de chocolate.",
		stock: 8,
	},
	{
		id: 9,
		name: "Carrot Cake",
		image: "https://i.ibb.co/8zndXY0/Lingote-Carrot-Cake.jpg",
		price: 970,
		category: "Lingote",
		description:
			"Biscuit humedo a base de zanahoria, pasas de uvas y nueces, con frosting de naranja.",
		stock: 5,
	},
	{
		id: 10,
		name: "Chaja",
		image: "https://i.ibb.co/cFBNQZ8/Lingote-Chaja.jpg",
		price: 950,
		category: "Lingote",
		description:
			"Biscuit de vainilla, dulce de leche, merengue seco, crema chantilly y duraznos en almibar.",
		stock: 14,
	},
	{
		id: 11,
		name: "Chocotorta",
		image: "https://i.ibb.co/GxpqVW9/Lingote-Chocotorta.jpg",
		price: 920,
		category: "Lingote",
		description:
			"Capas de galletitas chocolinas humedecidas con cafe intercaladas con crema chocotorta.",
		stock: 6,
	},
	{
		id: 12,
		name: "Lemon Curd",
		image: "https://i.ibb.co/LdSSH5v/Lingote-Lemon.jpg",
		price: 940,
		category: "Lingote",
		description:
			"Base de galletitas crocantes de vainilla, lemon curd y merengue italiano bruleado.",
		stock: 4,
	},
	{
		id: 13,
		name: "Brownie",
		image: "https://i.ibb.co/m5qK8vh/torta-Brownie.jpg",
		price: 1660,
		category: "Torta",
		description: "Base de brownie, dulce de leche y merengue italiano.",
		stock: 5,
	},
	{
		id: 14,
		name: "Lemon Pie",
		image: "https://i.ibb.co/Z2VMm96/torta-Lemon-Pie.jpg",
		price: 1530,
		category: "Torta",
		description: "Masa sablee, crema de limon y merengue suizo.",
		stock: 2,
	},
	{
		id: 15,
		name: "New York",
		image: "https://i.ibb.co/Vx6n76f/torta-New-York.jpg",
		price: 1930,
		category: "Torta",
		description: "Base de galletita crocante, queso crema y frutos rojos.",
		stock: 4,
		discount: 30,
	},
	{
		id: 16,
		name: "Rogel",
		image: "https://i.ibb.co/pbQ49tJ/torta-Rogel.jpg",
		price: 1830,
		category: "Torta",
		description:
			"Finas capas de masa crocante, dulce de leche y merengue italiano.",
		stock: 2,
	},
];

const firebaseConfig = {
	apiKey: "AIzaSyCSfBdmNtefOFpe8ySeudyUJlPYVhqNrHU",
	authDomain: "react-sweetvelvet-ecomerse.firebaseapp.com",
	projectId: "react-sweetvelvet-ecomerse",
	storageBucket: "react-sweetvelvet-ecomerse.appspot.com",
	messagingSenderId: "107510616695",
	appId: "1:107510616695:web:2e40d1a96749e7fa442c72",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//obtener todos los productos
export async function getProducts() {
	const productsRef = collection(db, "ProductsDB");
	const snapshot = await getDocs(productsRef);

	const ProductsDB = snapshot.docs.map((doc) => {
		let Products = doc.data();
		Products.id = doc.id;
		return Products;
	});
	//console.log(ProductsDB);
	return ProductsDB;
}

//obtener producto por id
export async function getProduct(product_id) {
	const productsRef = collection(db, "ProductsDB");
	const docRef = doc(productsRef, product_id);

	const snapshot = await getDoc(docRef);
	return { ...snapshot.data(), id: snapshot.id };
}

//obtener productos filtrado por categoria
export async function getProductsByCategory(category_id) {
	const productsRef = collection(db, "ProductsDB");

	const q = query(productsRef, where("category", "==", category_id));

	const querySnapshot = await getDocs(q);

	const ProductsDB = querySnapshot.docs.map((doc) => {
		let Products = doc.data();
		Products.id = doc.id;
		return Products;
	});
	return ProductsDB;
}

//obtener productos filtrado por busqueda -- Si no borro el imput y busco vacio queda siempre el producto buscado
export async function getProductsBySearchText(searchText) {
	const productsRef = collection(db, "ProductsDB");

	const snapshot = await getDocs(productsRef);

	const ProductsDB = snapshot.docs.map((doc) => {
		let Products = doc.data();
		Products.id = doc.id;
		return Products;
	});
	const toLowerCase = ProductsDB.map((item) => ({
		...item,
		name: item.name.toLowerCase(),
	}));
	console.log(toLowerCase);
	const ProductsSearch = toLowerCase.filter((elem) =>
		elem.name.includes(searchText)
	);
	console.log();
	return ProductsSearch;
}

//envio la orden a firestore
export async function sendOrder(order) {
	const orderRef = collection(db, "OrdersDB");

	//TODO: 1- obtener todos los productos del carrito desde firestore
	//2- validar que no excedan el stock disponible
	//3- actualizar el stock en firebase despues de la compra
	// Implica primero armar un batch para actualizar todo junto

	const resolve = await addDoc(orderRef, order);
	console.log(resolve);
	/* .then((resolve)=> {
		console.log(resolve);
		console.log(resolve.id);
	})*/

	return resolve.id;
}

//obtener producto comprado por id
export async function getProductSoldByID(venta_id) {
	const productsRef = collection(db, "OrdersDB");
	const docRef = doc(productsRef, venta_id);

	const snapshot = await getDoc(docRef);
	return snapshot;
	//return { ...snapshot.data(), id: snapshot.id };
}

// Funcion para cargar los productos con el btn item x item
export async function loadProductsToFirestore() {
	for (let item of ProductsDB) {
		item.index = item.id;
		delete item.id;
		await addDoc(collection(db, "ProductsDB"), item).then((resolve) => {
			console.log("Subiendo Producto", resolve.id);
		});
	}
}

// Funcion para cargar los productos con el btn todos juntos con un batch
export async function loadProductsToFirestoreWithBatch() {
	const batch = writeBatch(db);

	for (let item of ProductsDB) {
		item.index = item.id;
		delete item.id;
		// envio id arbitrario - 
		//De este modo no duplica los doc- (si modifico las props del array que subo--->actualiza la base en firestore)
		const itemRef = doc(db, "ProductsDB", `${item.index}`);
		batch.set(itemRef, item);
	}
	batch.commit().then(()=>console.log("Finalizo el batch"))
}


export default db;

