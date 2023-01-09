function NavBar(props) {
	const {title, url, classLi, classA} = props.navLinks;
	
	return (
		<li className={classLi}>
			<a className={classA} href={url}>{title}</a>
		</li>
	);
}

export default NavBar;
