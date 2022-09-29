import { NavLink, useNavigate, useParams } from "react-router-dom";
import SubTitle from "../components/SubTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Swal from "sweetalert2";

const EditUser = () => {
  const params = useParams();

  const onSubmit = (e) => {
    e.preventDefault()
  }
  // hooks
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  // console.log(params)

  const navigate = useNavigate();
  // Obtiene el usuario que se eligió para editar y setea el state con los valores que trajo
  useEffect(() => {
    axios
      .post("/api/user/get-user", { userId: params.id })
      .then((res) => {
        console.log(res.data[0]);
        const dataUser = res.data[0]; // obtiene el user
        setDni(dataUser.dni); // setea el state con la data obtenida
        setName(dataUser.name);
        setlastName(dataUser.lastName);
        setSex(dataUser.sex);
        setPhone(dataUser.phone);
      })
      .catch((err) => {
        console.log(err, `error al obtener data del user ${params.id}`);
      });
  }, []);

  // Nuevo objeto para actualizar el user
  const editDataUser = () => {
    const upDateUser = {
      dni: dni,
      name: name,
      lastName: lastName,
      sex: sex,
      phone: phone,
      userId: params.id,
    };

    // Petición usando axios, se pasa el usuario editado a la api
    axios
      .post("/api/user/edit-user", upDateUser)
      .then(res => {
        Swal.fire({
          title: "¡Usuario editado exitosamente!",
          icon: "success",
          confirmButtonText: "OK",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/");
          }
        });
      })
      .catch((err) =>
        Swal.fire({
          title: "Error al editar usuario, intente nuevamente por favor",
          confirmButtonText: "Aceptar",
        })
      );
  };
  return (
    <div>
      <SubTitle subTitle="Editar usuario"></SubTitle>
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
          <div className="text-field">
            <label className="label-form">Sexo:</label>
            <select
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
            <input
              type="submit"
              className="btn primary"
              value="Editar usuario"
              onClick={editDataUser}
            />
            {/* <Button className="btn primary btn-crear" name="Crear"></Button> */}
            <Link to="/">
              <Button
                className="btn secondary btn-cancel"
                name="Volver"
              ></Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
