import "./flex.css";

function FlexContainer(props) {
	return <div className={props.className}>{props.children}</div>;
}

export default FlexContainer;
