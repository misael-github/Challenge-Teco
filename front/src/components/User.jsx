import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import Modal from './Modal'
import UseModal from '../hooks/UseModal'
import axios from 'axios'

const User = ({user, key}) => {
     // custom hook
  const [isOpenConfirmModal,openLoginConfirmModal, closeLoginConfirmModal ] = UseModal()
  console.log(user.userId)

  const url = useNavigate()

  // Delete user
  const deleteUser = (userId) => {
    axios.post("/api/user/delete-user", {userId:userId})
    .then(res => {
      console.log(res.data)
      url(0)
    })
    .catch(err => {
      console.log(err,`error al eliminar el user ${user.id}`)
    })
  }
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
                deleteUser={deleteUser}
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
