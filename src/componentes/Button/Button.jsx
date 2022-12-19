import "./button.css";

const Button = ({ text, className, href }) => {
	return (
		<a href={href}>
			<button className={className}>{text}</button>
		</a>
	);
};

export default Button;