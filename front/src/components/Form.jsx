import  {Link} from 'react-router-dom'
import {useForm} from "react-hook-form"
import "../styles/form.css"
import Input from './Input'
import Button from './Button'
import { useState } from 'react'
import uniqid from "uniqid"
import axios from "axios"

const Form = (props) => {
    // hook personalizado
    const {register,formState:{errors}, handleSubmit} = useForm();

    const onSubmit = (data) => {
      addUser()
      // console.log(data)
    }
     // hooks
    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [sex, setSex] = useState("")
    const [phone, setPhone] = useState("")

   const addUser = () => {
      const user = {
        dni: dni,
        name: name,
        lastName: lastName,
        sex: sex,
        phone:phone,
        userId: uniqid()
      }
      console.log("usersss", user)
      
      axios.post("/api/user/create-user", user)
      .then(res => {
        alert(res.data)
      })
      .then(err => {console.log(err)})
   }
   console.log(sex)
  return (
    <>
      <div className="container-form">
        {/* pasa por el hook handleSubmit antes de ejecutar la funcion*/}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-field">
            <label className="label-form">DNI:</label>
            <input
              required
              className="input-form"
              placeholder=""
              type="number"
              value={dni}
              onChange={(e) => {setDni(e.target.value)}}
              // {...register("dni", {
              //   required: true,
              // })}
            />
            {/* {errors.dni?.type === "required" && <p className='form__required-data'>* el campo DNI es requerido</p>} */}
          </div>
          <div className="text-field">
            <label className="label-form">Nombre:</label>
            <input
              required
              className="input-form"
              placeholder=""
              type="text"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
          </div>
          <div className="text-field">
            <label className="label-form">Apellido</label>
            <input
              required
              className="input-form"
              placeholder=""
              type="text"
              value={lastName}
              onChange={(e) => {setlastName(e.target.value)}}
              
            />
          </div>
          <div className="text-field">
            <label className="label-form">Sexo:</label>
            <select className="form__select-sex"
             required
             value={sex}
             onChange={(e) => {setSex(e.target.value)}}
            > 
              <option value="">Seleccione una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
           
          </div>
          <div className="text-field">
            <label className="label-form">Teléfono:</label>
            <input
              required
              className="input-form"
              type="number"
              placeholder=""
              value={phone}
              onChange={(e) => {setPhone(e.target.value)}}
              
            />
           
          </div>
          <div className="container-button">
            <input type="submit" className="btn primary" value="Crear"/>
            {/* <Button className="btn primary btn-crear" name="Crear"></Button> */}
            <Link to="/">
              <Button
                className="btn secondary btn-cancel"
                name="Volver"
              ></Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form
