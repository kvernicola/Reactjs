import "./formbuyer.css";
import InputForm from "./InputForm";
import { useState } from "react";
import FlexContainer from "../FlexContainer/FlexContainer";
import Button from "../Button/Button";

function FormBuyer(props) {
	const onPurchase = props.onPurchase;
	const [userData, setUserData] = useState({
		name: "",
		lastname: "",
		phone: "",
		email: "",
		address: "",
	});

	function onInputChange(evt) {
		let value = evt.target.value;
		let inputName = evt.target.name;
		let newData = { ...userData };
		newData[inputName] = value;
		setUserData(newData);
	}

	function formIsValid() {
		return !(
			userData.name !== "" &&
			userData.lastname !== "" &&
			userData.phone !== "" &&
			userData.email !== ""
		);
	}

	return (
		<form onSubmit={props.onClick} className="formbuyer">
			<h3 className="formTitle">
				Completa el formulario para finalizar la compra
			</h3>
			<InputForm
				value={userData.name}
				name="name"
				onChange={onInputChange}
				userData={userData}
				placeholder="Nombre"
			/>
			<InputForm
				value={userData.lastname}
				name="lastname"
				onChange={onInputChange}
				userData={userData}
				placeholder="Apellido"
			/>
			<InputForm
				value={userData.phone}
				name="phone"
				onChange={onInputChange}
				userData={userData}
				placeholder="Telefono"
			/>
			<InputForm
				value={userData.email}
				name="email"
				onChange={onInputChange}
				userData={userData}
				placeholder="Email"
			/>
			<InputForm
				value={userData.address}
				name="address"
				onChange={onInputChange}
				userData={userData}
				placeholder="Direccion"
			/>
			<FlexContainer>
				{!formIsValid() && (
				<Button
					className="btn btn-danger"
					onClick={()=> onPurchase(userData)}
					
				>
					Finalizar Compra
				</Button>

				)}
				<button
					onClick={(evt) => {
						evt.preventDefault();
						setUserData({
							name: "",
							lastname: "",
							phone: "",
							email: "",
							address: "",
						});
					}}
					className="btn btn-danger btnForm"
				>
					Borrar Formulario
				</button>
			</FlexContainer>
		</form>
	);
}

export default FormBuyer;
