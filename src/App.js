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

function App() {
	function find(param) {
		alert(`No!, por ahi no vas a encontrar... ${param} por ahora`);
	}

	return (
		<div className="App">
			<BrowserRouter>
				<CartProvider>
					<NavBarContainer onFind={find} />
					<Routes>
						<Route path="/" element={<Form />} />
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
							element={
								<div>
									<h1>En construccion</h1>
								</div>
							}
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
