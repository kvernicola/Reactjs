import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBarContainer from "./componentes/NavBarContainer/NavBarContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NotFoundPage from "./pages/NotFoundPage";
import { CartProvider } from "./storage/cartContext";
import HomePage from "./pages/HomePage";
import Form from "./componentes/Forms/Form";
import { Cart } from "./componentes/NavBarContainer/CartWidget/CartWidget";
import { getProducts } from "./services/firebase";


function App() {
	getProducts();
	function find(paramBuscar) {
		alert(`No!, por ahi no vas a encontrar... ${paramBuscar} por ahora`);
	}

	return (
		<div className="App">
			<BrowserRouter>
				<CartProvider>
					<NavBarContainer onFind={find} />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/historia"
							element={
								<div>
									<h1>Proximamente</h1>
								</div>
							}
						/>
						<Route
							path="/contacto"
							element={<Form />}
						/>
						<Route path="/productos" element={<ItemListContainer />} />
						<Route
							path="/categoria/:category_id"
							element={<ItemListContainer />}
						/>
						<Route
							path="/detalle/:product_id"
							element={<ItemDetailContainer />}
						/>
						<Route path="/carrito" element={<Cart />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
					<ToastContainer />
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
