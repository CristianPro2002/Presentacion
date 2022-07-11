import React, {useState} from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Msolicitud = ({
  abrir,
  cerrar,
  abrir2,
  cerrar2,
  cerrarT,
  cerrarp,
  abrirp,
  solicitud,
  setSolicitud
}) => {
  let History = useHistory();

  const baseUrl = "http://localhost:8080/Banca/bd_crud/index.php";
  const [detalle, setDetalle] = useState([])

  const Detalleid = async(value) => {
    const No_ide = value;
    var f = new FormData();
    f.append("No_ide", No_ide);
    f.append("METHOD", "CONSULTAID3");
    await axios.post(baseUrl, f).then((response)=>{
      setDetalle(response.data)
      abrir()
    }) 
  }

  const peticionDeleteSoli = async (value) => {
    const eliminarSoli = value;
    var f = new FormData();
    f.append("METHOD", "DELETESOLI");
    await axios
      .post(baseUrl, f, { params: { No_ide: eliminarSoli } })
      .then((response) => {
        setSolicitud(
          solicitud.filter((Usuario) => Usuario.No_ide !== eliminarSoli)
        );
        document
          .getElementById("ventana_modal")
          .setAttribute("style", "display:none;");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                    <th>No identificacion</th>
                    <th>Nombre del cliente</th>
                    <th>Apellido del cliente</th>
                    <th>Telefono</th>
                    <th>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  {solicitud.map((Data)=>( 
                    <tr key={Data.No_ide}>
                      <td>{Data.Id_reg}</td>
                    <td>{Data.No_ide}</td>
                    <td>{Data.Pri_nom}</td>
                    <td>{Data.Pri_ape}</td>
                    <td>{Data.Telef}</td>
                    <td>
                      <button onClick={()=> Detalleid(Data.No_ide)} className="btn btn-danger">
                        Detalle
                      </button>
                    </td>
                  </tr>
                    )
                  )} 
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
            <h1 class="title__modal2">Solicitud de <b style={{textTransform: "capitalize"}}>{detalle.Pri_nom}</b> </h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Numero de documento</th>
                  <th>Primer Nombre</th>
                  <th>Segundo Nombre</th>
                  <th>Primer Apellido</th>
                  <th>Segundo Apellido</th>
                  <th>Ciudad</th>
                  <th>Barrio</th>
                  <th>Ingresos Mensuales</th>
                </tr>
              </thead>
              <tbody>
           
                <tr key={detalle.No_ide}>
                  <td>{detalle.No_ide}</td>
                  <td>{detalle.Pri_nom}</td>
                  <td>{detalle.Seg_nom}</td>
                  <td>{detalle.Pri_ape}</td>
                  <td>{detalle.Seg_ape}</td>
                  <td>{detalle.Ciu_mu}</td>
                  <td>{detalle.Barrio}</td>
                  <td>{detalle.Ing_men}</td>
                </tr>
              </tbody>
            </Table>

            <button
              id="boton_modal_verde"
              className="btn btn-success"
              onClick={()=> peticionDeleteSoli(detalle.No_ide)}
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
