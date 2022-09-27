import React from 'react'
import Table from '../components/Table'
import Title from '../components/Title'
// import "../styles/table.css"
import Modal from '../components/Modal'
import Button from '../components/Button'
import UseModal from '../hooks/UseModal'
import Input from '../components/Input'
import "../styles/pages/home.css"
const Home = () => {
  //hook
  // const [isOpenLoginModal,openLoginModal, closeLoginModal ] = UseModal()
 

  return (
    <>
      
      <Title title="App usuarios"></Title>
    
      <Table></Table>
      {/* <Button className="btn secondary" name="Open Modal" onClick={openLoginModal}></Button> */}
      {/* <Button className="btn primary" name="Confirm Modal" onClick={openLoginConfirmModal}></Button> */}
       
      {/* <Modal isOpen={isOpenLoginModal}
      closeModal={closeLoginModal}
      title="login"
      >
       <form>
        <Input type="email" placeholder="Correo"></Input>
        <Input type="password" placeholder="Password"></Input>
       </form>
      </Modal> */}
     
    
    </>
  )
}

export default Home
