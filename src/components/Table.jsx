import React from 'react'
import "../styles/table.css"
import Button from './Button'
import {Link} from "react-router-dom"
const Table = () => {
  return (
    <div className='container-table'>
       <div className='table'>
        <h3>Listado de usuarios</h3>
        <Link to="/create-user">
        <Button className="btn primary" name="Crear usuario"></Button>
        </Link>
        <hr/>
      <table>
        <thead className='thead'>
            <tr>
                <th className='table__th'>D.N.I</th>
                <th className='table__th'>NOMBRE</th>
                <th className='table__th'>APELLIDO</th>
                <th className='table__th'>SEXO</th>
                <th className='table__th'>TELÉFONO</th>
            </tr>
          {/* <hr/> */}
        </thead>
        <tbody>
            <tr>
                <td className='table__td'>01</td>
                <td className='table__td'>Carlos</td>
                <td className='table__td'>Torres</td>
                <td className='table__td'>Masculino</td>
                <td className='table__td'>1157485829</td>
                <td><Link to="edit-user">
                  <Button className="btn secondary" name="Editar"></Button>
                  </Link></td>
                <td><Button className="btn danger" name="Eliminar"></Button></td>
            </tr>
            <tr>
                <td className='table__td'>01</td>
                <td className='table__td'>Carlos</td>
                <td className='table__td'>Torres</td>
                <td className='table__td'>Masculino</td>
                <td className='table__td'>1157485829</td>
                <td><Button className="btn secondary" name="Editar"></Button></td>
                <td><Button className="btn danger" name="Eliminar"></Button></td>
            </tr>
            <tr>
                <td className='table__td'>01</td>
                <td className='table__td'>Carlos</td>
                <td className='table__td'>Torres</td>
                <td className='table__td'>Masculino</td>
                <td className='table__td'>1157485829</td>
                <td><Button className="btn secondary" name="Editar"></Button></td>
                <td><Button className="btn danger" name="Eliminar"></Button></td>
            </tr>
        </tbody>
      </table>
      </div> 
    </div>
  )
}

export default Table;
