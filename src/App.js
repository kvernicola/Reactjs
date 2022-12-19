import "./App.css";
import NavBarBT from "./componentes/NavBar/NavBarBT";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Card from "./componentes/Card/Card";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBarBT />
			</header>
			<main>
				<ItemListContainer />
			</main>
		</div>
	);
}

export default App;
