import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBarContainer from "./componentes/NavBarContainer/NavBarContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./pages/PageNotFound";
import { CartProvider } from "./storage/cartContext";
import HomePage from "./pages/HomePage";
import Form from "./componentes/Forms/Form";
import { Cart } from "./componentes/NavBarContainer/CartWidget/CartWidget";
import { getProducts } from "./services/firebase";
import CartSold from "./componentes/NavBarContainer/CartWidget/CartSold";
import FormBuyer from "./componentes/Forms/FormBuyer";


function App() {


	return (
		<div className="App">
			<BrowserRouter>
				<CartProvider>
					<NavBarContainer/>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/historia"
							element={
								<FormBuyer/>
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
						<Route path="/carrito/venta/:venta_id" element={<CartSold/>} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
					<ToastContainer />
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
