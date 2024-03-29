import FlexContainer from "../FlexContainer/FlexContainer";
import ItemList from "./ItemList";

//--------------------------------------------------------

function ItemListContainer() {
	return (
		<main>
			<FlexContainer className="flexContainer">
				<ItemList />
			</FlexContainer>
		</main>
	);
}

export default ItemListContainer;
