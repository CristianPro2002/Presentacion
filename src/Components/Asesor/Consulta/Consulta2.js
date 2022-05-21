import React from 'react'
import './Consulta2.css'
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table'

const Consulta2 = () => {
    let History = useHistory();
  return (
    <div><button  onClick={() => History.goBack()}>salir</button>
      <button variant="primary" type="submit" size="lg" active>
    Actualizar
  </button>{' '}
    <div className='contenT'>
        <h1>Registros de persona natural: 1192719887</h1>
    </div>
    <div className='Tabla2'>
<Table striped bordered hover >
  <thead>
    <tr>
      <th>Id</th>
      <th>Primer Nombre</th>
      <th>Segundo Nombre</th>
      <th>Primer Apellido</th>
      <th>Segundo Apellido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Cristian</td>
      <td>Andres</td>
      <td>Castaño</td>
      <td>Salas</td>
    </tr>
  </tbody>
</Table>
</div>

<div className='Tabla2'>
<Table striped bordered hover >
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>

<div className='Tabla2'>
<Table striped bordered hover >
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
    </div>
  )
}

export default Consulta2