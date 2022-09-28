
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import SubTitle from '../components/SubTitle'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Swal from 'sweetalert2'
 
const EditUser = () => {
    const params = useParams()
      // hooks
      const [dni, setDni] = useState("")
      const [name, setName] = useState("")
      const [lastName, setlastName] = useState("")
      const [sex, setSex] = useState("")
      const [phone, setPhone] = useState("")
    // console.log(params)

    const navigate = useNavigate()

    useEffect(() =>{
      axios.post("/api/user/get-user", {userId: params.id})
      .then(res => {
        console.log(res.data[0])
        const dataUser = res.data[0]
        setDni(dataUser.dni)
        setName(dataUser.name)
        setlastName(dataUser.lastName)
        setSex(dataUser.sex)
        setPhone(dataUser.phone)
      })
      .catch(err => {
        console.log(err,`error al obtener data del user ${params.id}`)
      })
}, [])
  

   const editDataUser = () => {
    // Nuevo objeto para actualizar el user
     const upDateUser = {
        dni: dni,
        name: name,
        lastName: lastName,
        sex: sex,
        phone:phone,
        userId: params.id
     }
     // Modal
//  const Modal = () => {
//   Swal.fire({
//     title:"¡Usuario actualizado exitosamente!",
//     confirmButtonText:"Aceptar"
//   }).then(res => {
//     if(res.isConfirmed){

//       // navigate(0)
//       // deleteUser(user.userId)
//     }else{
//     Swal.fire({
//       title:"Error al editar usuario, intente nuevamente por favor"
//     })
//     }
//   })
// }

     // Petición usando axios
     axios.post("/api/user/edit-user", upDateUser)
      .then(res => {
        Swal.fire({
          title: '¡Usuario editado exitosamente!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(res => {
           if(res.isConfirmed){
            navigate(0)
           }
        })
      })
       .catch(err => 
        Swal.fire({
          title:"Error al editar usuario, intente nuevamente por favor",
          confirmButtonText:"Aceptar",
      })
      )
   }
  return (
    <div>
       <SubTitle subTitle="Editar usuario"></SubTitle>
       <div className="container-form">
        {/* pasa por el hook handleSubmit antes de ejecutar la funcion*/}
        <form className="form" >
          <div className="text-field">
            <label className="label-form">DNI:</label>
            <input
              required
              className="input-form"
              placeholder=""
              type="number"
              value={dni}
              onChange={(e) => {setDni(e.target.value)}}
            />
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
            <select 
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
            <input type="submit" className="btn primary" value="Editar usuario" onClick={editDataUser}/>
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
    </div>
  )
}

export default EditUser
