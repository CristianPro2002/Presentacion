import React, {useContext} from 'react'
import './Consulta2.css'
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import {AppContext} from '../../application/provider'

const Consulta2 = () => {

  const [data, setData] = useContext(AppContext);
    let History = useHistory();
    console.log(data);
  return (
    <div><button  onClick={() => History.goBack()}>salir</button>
      <button variant="primary" type="submit" size="lg" active>
    Actualizar
  </button>{' '}
    <div className='contenT'>
        <h1>Registros de persona natural: {data.No_ide}</h1>
    </div>
    <div className='Tabla2'>
      <div>
        <label><h3>Tipo de solicitud:</h3>{data.Nom_sol}</label>
      </div>
      <center><label><h2>Datos Personales</h2></label></center>
<Table  striped bordered hover responsive="sm">
  <thead>
    <tr>
      <th>Identificacion</th>
      <th>Primer Nombre</th>
      <th>Segundo Nombre</th>
      <th>Primer Apellido</th>
      <th>Segundo Apellido</th>
      <th>Tipo de Documento</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.No_ide}</td>
      <td>{data.Pri_nom}</td>
      <td>{data.Seg_nom}</td>
      <td>{data.Pri_ape}</td>
      <td>{data.Seg_ape}</td>
      <td>{data.Nom_doc}</td>
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