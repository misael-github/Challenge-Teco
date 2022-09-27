import {useState} from 'react'

const UseModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => {
     setIsOpenModal(true)
    }
    const closeModal = () => {
      setIsOpenModal(false)
     }
  
  return [isOpenModal,openModal, closeModal ]
    
  
}

export default UseModal
