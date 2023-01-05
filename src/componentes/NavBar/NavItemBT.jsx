//modificar con props y destructurar props.xxxx

function NavItemBT(props) {
	const {id, title, url, classLi, classA} = props.itemNavLink;
	
	return (
		<li className={classLi}>
			<a className={classA} href={url}>{title}</a>
		</li>
	);
}

/* const NavItemBT = ({ classNameLi, classNameA, href, children }) => {


	return (
		<li className={classNameLi}>
			<a className={classNameA} href={href}>{children}</a>
		</li>
	);
}; */

export default NavItemBT;
