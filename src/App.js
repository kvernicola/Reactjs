import "./App.css";
import NavBarContainer from "./componentes/NavBarContainer/NavBarContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NotFoundPage from "./pages/NotFoundPage";
import { CartProvider } from "./storage/cartContext";
import HomePage from "./pages/HomePage";
import Form from "./componentes/Forms/Form";

function App() {
	function logOutSessions() {
		console.log("logout");
	}
	function logInSessions(username) {
		alert(`Bienvenido el usuario... ${username}`);
	}

	return (
		<div className="App">
			<BrowserRouter>
				<CartProvider>
					<NavBarContainer onLogin={logInSessions} onLogout={logOutSessions} />
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
						<Route path="/carrito" element={<h1>Falta hacer el carrito</h1>} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
