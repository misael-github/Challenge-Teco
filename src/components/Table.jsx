import React from 'react'
import "../styles/table.css"
import Button from './Button'
const Table = () => {
  return (
    <div className='container-table'>
       <div className='table'>
        <h3>Listado de usuarios</h3>
        <hr/>
      <table>
        <Button name="Crear usuario"></Button>
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
            </tr>
            <tr>
                <td className='table__td'>01</td>
                <td className='table__td'>Carlos</td>
                <td className='table__td'>Torres</td>
                <td className='table__td'>Masculino</td>
                <td className='table__td'>1157485829</td>
            </tr>
            <tr>
                <td className='table__td'>01</td>
                <td className='table__td'>Carlos</td>
                <td className='table__td'>Torres</td>
                <td className='table__td'>Masculino</td>
                <td className='table__td'>1157485829</td>
            </tr>
        </tbody>
      </table>
      </div> 
    </div>
  )
}

export default Table;
