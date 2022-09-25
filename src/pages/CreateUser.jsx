import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import "../styles/pages/createUser.css"
import Input from '../components/Input'

function CreateUser() {
  return (
    <div>
      <Title title="Crear usuario"></Title>
         <div className="container-form">
          <form className='form'>
          <div className="text-field">
          <label className='label-form'>DNI:</label>
          <Input className="input-form" placeholder="" type="text" name="" id="" />
          </div>
          <div className="text-field">
          <label className='label-form'>Nombre:</label>
          <Input className="input-form" placeholder="" type="text" name="" id="" />
          </div>
          <div className="text-field">
          <label className='label-form'>Apellido</label>
          <Input className="input-form" placeholder="" type="text" name="" id="" />
          </div>
          <div className="text-field">
          <label className='label-form'>Sexo:</label>
          <Input className="input-form" placeholder="" type="text" name="" id="" />
          </div>
          <div className="text-field">
          <label className='label-form'>Teléfono:</label>
          <Input className="input-form" type="text" placeholder="" name="" id="" />
          </div>
          </form>
          <div className="container-button">
          <Button className="btn primary btn-crear" name="Crear"></Button>
          <Button className="btn secondary btn-cancel" name="Cancelar"></Button>
          </div>
         </div>
    </div>
  )
}

export default CreateUser
