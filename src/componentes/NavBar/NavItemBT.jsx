function NavItemBT(props) {
	const {id, title, url, classLi, classA} = props.itemNavLink;
	
	return (
		<li className={classLi}>
			<a className={classA} href={url}>{title}</a>
		</li>
	);
}

export default NavItemBT;
