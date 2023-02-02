import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	doc,
	query,
	where,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCSfBdmNtefOFpe8ySeudyUJlPYVhqNrHU",
	authDomain: "react-sweetvelvet-ecomerse.firebaseapp.com",
	projectId: "react-sweetvelvet-ecomerse",
	storageBucket: "react-sweetvelvet-ecomerse.appspot.com",
	messagingSenderId: "107510616695",
	appId: "1:107510616695:web:2e40d1a96749e7fa442c72",
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export async function getProducts() {
	const productsRef = collection(firestoreDB, "ProductsDB");
	const snapshot = await getDocs(productsRef);

	const ProductsDB = snapshot.docs.map((doc) => {
		let Products = doc.data();
		Products.id = doc.id;
		return Products;
	});
	console.log(ProductsDB);
	return ProductsDB;
}

export async function getProduct(product_id) {
	const productsRef = collection(firestoreDB, "ProductsDB");
	const docRef = doc(productsRef, product_id);

	const snapshot = await getDoc(docRef);
	return { ...snapshot.data(), id: snapshot.id };
}

export async function getProductsByCategory(category_id) {
	const productsRef = collection(firestoreDB, "ProductsDB");

	const q = query(productsRef, where("category", "==", category_id));

	const querySnapshot = await getDocs(q);

	const ProductsDB = querySnapshot.docs.map((doc) => {
		let Products = doc.data();
		Products.id = doc.id;
		return Products;
	});
	return ProductsDB;
}

export default firestoreDB;
