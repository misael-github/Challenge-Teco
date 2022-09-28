import React from 'react'
import "../styles/modal.css"
import Button from './Button'

const Modal = ({isOpen, closeModal, children, title, deleteUser}) => {

    const  handleModalDialogClick = (e) => {
        e.stopPropagation()
     
    }
   
  return (
    <>
    <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
        <div className="modal__dialog" onClick={handleModalDialogClick}>

        <h1>{title}</h1>
        {/* Recibe los elementos html que le pase al padre */}
        {children} 
        <Button  className="btn secondary" name="Eliminar" onClick={() => {
          closeModal();
          deleteUser()}}></Button>
        </div>
    </div>

    </>
  )
}

export default Modal
