
//modificar con props y destructurar props.xxxx 
const NavItemBT = ({ classNameLi, classNameA, href, children }) => {


	return (
		<li className={classNameLi}>
			<a className={classNameA} href={href}>{children}</a>
		</li>
	);
};

export default NavItemBT;
