import React from 'react'
import "../styles/table.css"
import Button from './Button'
import Input from './Input'
import {Link} from "react-router-dom"
import UseModal from '../hooks/UseModal'
import Modal from './Modal'
const Table = () => {
  const [isOpenConfirmModal,openLoginConfirmModal, closeLoginConfirmModal ] = UseModal()
  return (
    <div className="container-table">
      <div className="table">
        <h3>Listado de empleados activos</h3>
        <div className="table__container-buttons-input">
          <Link to="/create-user">
            <Button className="btn primary" name="Crear usuario"></Button>
          </Link>
          <Input className="input-search" placeholder="Bucar por DNI"></Input>
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
            <tr>
              <td className="table__td">01</td>
              <td className="table__td">Carlos</td>
              <td className="table__td">Torres</td>
              <td className="table__td">Masculino</td>
              <td className="table__td">1157485829</td>
              <td className="table__td">
                <Link to="edit-user">
                  <Button className=" btn secondary" name="Editar"></Button>
                </Link>
              </td>
              <td className="table__td">
                <Button
                  className="btn danger"
                  name="Eliminar"
                  onClick={openLoginConfirmModal}
                ></Button>
              </td>
              <Modal
                isOpen={isOpenConfirmModal}
                closeModal={closeLoginConfirmModal}
                title="Confirm"
              >
                <p>
                  <b>Desea eliminar el usuario?</b>
                </p>
              </Modal>
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
