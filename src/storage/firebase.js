import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



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
