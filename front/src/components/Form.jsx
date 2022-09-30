import { Link, useNavigate } from "react-router-dom";
import "../styles/form.css";
import Button from "./Button";
import { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import Swal from "sweetalert2";

const Form = (props) => {
  // hook personalizado

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    addUser();
    // console.log(data)
  };
  // hooks
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");

  const addUser = () => {
    const user = {
      dni: dni,
      name: name,
      lastName: lastName,
      sex: sex,
      phone: phone,
      userId: uniqid(),
    };
    // console.log("usersss", user)

    axios
      .post("https://telecom-challenge.herokuapp.com/api/user/create-user", user)
      .then(res => {
        console.log("usuario CREADO");
        Swal.fire({
          title: "¡Usuario creado exitosamente!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(resp => {
          if(resp.isConfirmed) {
            navigate("/")
              // El usuario hizo clic en el botón aceptar
          } else {
              // El usuario cerró la ventana modal sin hacer clic en el botón aceptar
          }
        })
        // Encadena la promesa para saber lo que pasó en la ventana modal
      })
      
  };
  return (
    <>
      <div className="container-form">
        {/* pasa por el hook handleSubmit antes de ejecutar la funcion*/}
        <form className="form" onSubmit={onSubmit}>
          <div className="text-field">
            <label className="label-form">DNI:</label>
            <input
              required
              className="input-form"
              placeholder=""
              type="number"
              value={dni}
              onChange={(e) => {
                setDni(e.target.value);
              }}
            />
          </div>
          <div className="text-field">
            <label className="label-form">Nombre:</label>
            <input
              required
              className="input-form"
              placeholder=""
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="text-field">
            <label className="label-form">Apellido</label>
            <input
              required
              className="input-form"
              placeholder=""
              type="text"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </div>
          <div className="text-field content-select">
            <label className="label-form">Sexo:</label>
            <select
              className="form__select-sex"
              required
              value={sex}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            >
              <option value="">Seleccione una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div className="text-field">
            <label className="label-form">Teléfono:</label>
            <input
              required
              className="input-form"
              type="number"
              placeholder=""
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="container-button">
            {/* <Button className="btn primary btn-crear" name="Crear"></Button> */}
            <Link to="/">
              <Button
                className="btn secondary btn-cancel"
                name="Volver"
              ></Button>
            </Link>
            <input type="submit" className="btn primary btn-crear" value="Crear" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
