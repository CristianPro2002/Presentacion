import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Msolicitud = ({abrir, cerrar, abrir2, cerrar2,cerrarT}) => {
  let History = useHistory();
  return (
    <div>
      <div className="contemodal">
     
        <input type="checkbox" id="evento-click" />
        <div className="botnomodal">
         
        <i
          class="bi bi-arrow-left-circle-fill"
          id="cir"
          onClick={() => History.goBack()}
        ></i>
       
       
          <label
            for="evento-click"
            title="Abrir modal"
            className="btn__open-modal"
          >
            <p>Solicitudes</p>
          </label>
          
        </div>
        <div className="background__blur"></div>

        <div className="container__modal">
          <div className="header__modal">
            <label for="evento-click">X</label>
          </div>

          <div className="body__modal">
            <h1 className="title__modal">Solicitudes</h1>
            <ListGroup className="listassoli">
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #1-Asesor1</ListGroup.Item>
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #3-Asesor1</ListGroup.Item>
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #3-Asesor2</ListGroup.Item>
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #4-Asesor4</ListGroup.Item>
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #5-Asesor3</ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div class="container__modal2"id = "ventana_modal">
        <input type="checkbox" id="evento-click2" />
<div class="header__modal2">
    <label for="evento-click2" onClick={cerrar}>X</label>
</div>

<div class="body__modal2">
    <h1 class="title__modal2">Solicitud #-Asesor#</h1>
    <Table striped bordered hover>
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

<button  id="boton_modal_verde" className="btn btn-success" onClick={cerrar}>Aceptar</button>
<button  id="boton_modal_rojo" className="btn btn-danger"onClick={abrir2}>Cancelar</button>
</div>

</div>


<div class="container__modal3"id = "ventana_modal2">
        <input type="checkbox" id="evento-click3" />
<div class="header__modal3">
    <label for="evento-click3" onClick={cerrar2}>X</label>
</div>

<div class="body__modal3">
    <h1 class="title__modal3">Solicitud #-Asesor#</h1>
    <input type="text" className="contenedortext" />
    <button id="boton_Modal_2_0" className="btn btn-success" onClick={cerrarT}>Aceptar</button>
<button id="boton_Modal_2_1" className="btn btn-danger" onClick={cerrar2}>Cancelar</button>
    </div>

        
      </div>
      </div>
    </div>
  )
}

export default Msolicitud