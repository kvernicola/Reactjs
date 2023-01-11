import "./App.css";
import NavBarContainer from "./componentes/NavBarContainer/NavBarContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBarContainer />
				<Routes>
					<Route path="/" element={<h1>HomePage SweetVelvet</h1>} />
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
					<Route path="/categoria/:category_id" element={<ItemListContainer />} />
					<Route path="/detalle/:product_id" element={<ItemDetailContainer />} />
					<Route path="/carrito" element={<h1>Falta hacer el carrito</h1>} />
					<Route path="*" element={<h1>Page not found</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
