import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Modal from './Modal'
import UseModal from '../hooks/UseModal'

const User = ({user, key}) => {
     // custom hook
  const [isOpenConfirmModal,openLoginConfirmModal, closeLoginConfirmModal ] = UseModal()
  console.log(user.userId)
  return (
    <>
          <tr>
              <td className="table__td">{user.dni}</td>
              <td className="table__td">{user.name}</td>
              <td className="table__td">{user.lastName}</td>
              <td className="table__td">{user.sex}</td>
              <td className="table__td">{user.phone}</td>
              <td className="table__td">
                <Link to={`/edit-user/${user.userId}`}>
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
                  <b>¿Desea eliminar el usuario?</b>
                </p>
              </Modal>
            </tr> 
    </>
  )
}

export default User
