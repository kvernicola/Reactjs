import "./App.css";
import NavBarContainer from "./componentes/NavBarContainer/NavBarContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBarContainer />
			</header>
			<main>
				<ItemListContainer />
			</main>
		</div>
	);
}

export default App;
