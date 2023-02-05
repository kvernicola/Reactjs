import "./formbuyer.css";
import React from "react";
import InputForm from "./InputForm";
import { useState } from "react";
import FlexContainer from "../FlexContainer/FlexContainer";

function FormBuyer(props) {
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
				<button
					className="btn btn-danger btnForm"
					disabled={formIsValid()}
					type="submit"
				>
					Realizar compra
				</button>
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
