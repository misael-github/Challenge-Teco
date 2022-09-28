import React from 'react'
import "../styles/table.css"
import Button from './Button'
import Input from './Input'
import {Link} from "react-router-dom"
import User from './User'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "aos/dist/aos.css"
import { AOS } from 'aos'

const Table = () => {
 
const [dataUser, setDataUser] = useState([])

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

// Mapear los usuarios en objeto usuario
const listUsers = dataUser.map(user => {
  return(
     <>
        <User user={user} ></User>
     </>
  )
})

  return (
    <div className="container-table">
      <div className="table">
        <h3>Listado de usuarios activos</h3>
        <div className="table__container-buttons-input">
          <Link to="/create-user">
            <Button className="btn primary" name="Crear usuario"></Button>
          </Link>
          <Input className="input-search" placeholder="Bucar por DNI" type="search"></Input>
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
          <tbody>
               {listUsers}
            </tbody>
             {/* <tr>
              <td className="table__td">01</td>
              <td className="table__td">Carlos</td>
              <td className="table__td">Torres</td>
              <td className="table__td">Masculino</td>
              <td className="table__td">1157485829</td>
              <td className="table__td">
                <Button className="btn secondary" name="Editar"></Button>
              </td>
              <td className="table__td">
                <Button className="btn danger" name="Eliminar"></Button>
              </td>
            </tr> */}
         
        </table>
      </div>
    </div>
  );
}

export default Table;
