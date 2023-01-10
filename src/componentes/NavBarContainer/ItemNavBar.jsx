import { Link } from "react-router-dom";

function ItemNavBar(props) {
	const { title, url, classLi, classA } = props.navLinks;

	return (
		<li className={classLi}>
			<Link className={classA} to={url}>
				{title}
			</Link>
		</li>
	);
}

export default ItemNavBar;
