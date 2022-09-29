import React from "react";
import "../styles/table.css";
import Button from "./Button";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import User from "./User";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import { AOS } from "aos";
import Swal from "sweetalert2";

const Table = () => {
  const [dataUser, setDataUser] = useState([]);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/user/get-users")
      .then((res) => {
        // console.log(res.data, "desde la table");
        setDataUser(res.data);
        // AOS.init()
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Busca por dni, setea el state con la nueva data de el user encontrado
  const Search = () => {
    axios
      .post("/api/user/get-user-dni", { dni: search })
      .then((res) => {
        setDataUser(res.data);
        if(res.data.length === 0){
          Swal.fire({
            title:"Usuario no encontrado",
            icon:"error",
            text:"El cliente no existe en la base de datos",
            confirmButtonText: "Ok",
          })
          .then(() => {
           navigate(0)
          })
          // console.log("usuario no encontrado")
        }
         
      })
      .catch((res) => {
        console.log(res, "usuario no encontrado");
      });
  };

  // Mapea el state (los usuarios)
  const listUsers = dataUser.map((user) => {
    return (
      <>
        <User user={user}></User>
      </>
    );
  });

  return (
    <div className="container-table">
      <div className="table">
        <h3>Listado de usuarios activos</h3>
        <div className="table__container-buttons-input">
          <Link to="/create-user">
            <Button className="btn primary" name="Crear usuario"></Button>
          </Link>
          <div>
            <Input
              className="input-search"
              placeholder="Bucar por DNI"
              type="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></Input>

            <Button
              className="btn primary"
              name="Buscar"
              onClick={Search}
            ></Button>
          </div>
        </div>
        <hr />
        <table>
          <thead className="thead">
            <tr>
              <th className="table__th">D.N.I</th>
              <th className="table__th">NOMBRE</th>
              <th className="table__th">APELLIDO</th>
              <th className="table__th">SEXO</th>
              <th className="table__th">TELÉFONO</th>
              <th className="table__th acciones">ACCIONES</th>
            </tr>
            {/* <hr/> */}
          </thead>
          <tbody>{listUsers}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
