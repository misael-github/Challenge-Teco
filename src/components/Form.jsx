import  {Link} from 'react-router-dom'
import { useFormAction } from 'react-router-dom'
import "../styles/form.css"
import Input from './Input'
import Button from './Button'

const Form = () => {
    // const {register, handleSubmit} = useForm()
    const handleSubmit = () => {
   
    }
  return (
    <>
         
         <div className="container-form">
          <form className='form' onSubmit={handleSubmit}>
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
          <Link to="/">
          <Button className="btn secondary btn-cancel" name="Cancelar"></Button>
          </Link>
          </div>
         </div>
    </>
  )
}

export default Form
