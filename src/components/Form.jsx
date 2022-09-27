import  {Link} from 'react-router-dom'
import {useForm} from "react-hook-form"
import "../styles/form.css"
import Input from './Input'
import Button from './Button'

const Form = () => {
    // hook personalizado
    const {register,formState:{errors}, handleSubmit} = useForm();

    const onSubmit = (data) => {
      console.log(data)
    }
  return (
    <>
      <div className="container-form">
        {/* pasa por el hook handleSubmit antes de ejecutar la funcion*/}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-field">
            <label className="label-form">DNI:</label>
            <input
              className="input-form"
              placeholder=""
              type="number"
              
              {...register("dni", {
                required: true,
              })}
            />
            {errors.dni?.type === "required" && <p>el campo DNI es requerido</p>}
          </div>
          <div className="text-field">
            <label className="label-form">Nombre:</label>
            <input
              className="input-form"
              placeholder=""
              type="text"
              
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <p>el campo nombre es requerido</p>
            )}
          </div>
          <div className="text-field">
            <label className="label-form">Apellido</label>
            <input
              className="input-form"
              placeholder=""
              type="text"
              name=""
              id=""
              {...register("lastName", {
                required: true,
              })}
            />
             {errors.lastName?.type === "required" && (
              <p>el campo apelldio es requerido</p>
            )}
          </div>
          <div className="text-field">
            <label className="label-form">Sexo:</label>
            <select
              {...register("sex", {
                required: true,
              })}
            >
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
            {/* {errors.sex?.type === "required" && (
              <p>el campo sexo es requerido</p>
            )} */}
          </div>
          <div className="text-field">
            <label className="label-form">Teléfono:</label>
            <input
              className="input-form"
              type="number"
              placeholder=""
              name=""
              id=""
              {...register("phone", {
                required: true,
              })}
            />
             {errors.phone?.type === "required" && (
              <p>el campo teléfono es requerido</p>
            )}
              {errors.phone?.type === "maxLength" && (
              <p>el campo teléfono debe tener menos de 10 caracteres</p>
            )}
          </div>
          <div className="container-button">
            <input type="submit" className="btn primary" value="Enviar" />
            {/* <Button className="btn primary btn-crear" name="Crear"></Button> */}
            <Link to="/">
              <Button
                className="btn secondary btn-cancel"
                name="Cancelar"
              ></Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form
