const NavItemBT = ({ classNameLi, classNameA, href, children }) => {
	//destructurando

	return (
		<li className={classNameLi}>
			<a className={classNameA} href={href}>{children}</a>
		</li>
	);
};

export default NavItemBT;
