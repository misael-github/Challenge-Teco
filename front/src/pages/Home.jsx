import React from 'react'
import Table from '../components/Table'
import Title from '../components/Title'
import "../styles/pages/home.css"
const Home = () => {
  //hook
  // const [isOpenLoginModal,openLoginModal, closeLoginModal ] = UseModal()
 

  return (
    <>
      <Title title="App usuarios"></Title>
      <Table></Table>
    </>
  )
}

export default Home
