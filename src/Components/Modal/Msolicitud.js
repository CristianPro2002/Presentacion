import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Msolicitud = ({
  abrir,
  cerrar,
  abrir2,
  cerrar2,
  cerrarT,
  cerrarp,
  abrirp,
}) => {
  let History = useHistory();
  return (
    <div>
      <div className="contbtns">
        <div className="congoback">
        <i
          class="bi bi-arrow-left-circle-fill"
          id="cir"
          onClick={() => History.goBack()}
        ></i>
        </div>
        <div className="contabrir">
        <button className="btn btn-danger" onClick={abrirp} style={{height:"60%", margin:"5px"}}>
          Solicitudes
        </button>
        </div>
      </div>
      <div className="background__blur"></div>
      <div className="contemodal">
        <div className="container__modal" id="ventana_modalp">
          <div className="header__modal">
            <label for="evento-click" onClick={cerrarp}>
              X
            </label>
          </div>

          <div className="body__modal">
            <h1 className="title__modal">Solicitudes</h1>
            <div>
              <Table striped bordered hover variant="dark" responsive="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre del cliente</th>
                    <th>Tipo de solicitud</th>
                    <th>Producto</th>
                    <th>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Cristian</td>
                    <td>Apertura de cuenta</td>
                    <td>Cuenta de ahorro</td>
                    <td>
                      <button onClick={abrir} className="btn btn-danger">
                        Detalle
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div class="container__modal2" id="ventana_modal">
          <input type="checkbox" id="evento-click2" />
          <div class="header__modal2">
            <label for="evento-click2" onClick={cerrar}>
              X
            </label>
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

            <button
              id="boton_modal_verde"
              className="btn btn-success"
              onClick={cerrar}
            >
              Aceptar
            </button>
            <button
              id="boton_modal_rojo"
              className="btn btn-danger"
              onClick={abrir2}
            >
              Cancelar
            </button>
          </div>
        </div>

        <div class="container__modal3" id="ventana_modal2">
          <input type="checkbox" id="evento-click3" />
          <div class="header__modal3">
            <label for="evento-click3" onClick={cerrar2}>
              X
            </label>
          </div>

          <div class="body__modal3">
            <h1 class="title__modal3">Solicitud #-Asesor#</h1>
            <input type="text" className="contenedortext" />
            <button
              id="boton_Modal_2_0"
              className="btn btn-success"
              onClick={cerrarT}
            >
              Aceptar
            </button>
            <button
              id="boton_Modal_2_1"
              className="btn btn-danger"
              onClick={cerrar2}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Msolicitud;
