import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import "./Roles.css";
import Cajeroimg from "./Imagenes_R/cajero.webp";
import Directorimg from "./Imagenes_R/director.webp";
import Gerenteimg from "./Imagenes_R/gerente.webp";
import Asesorimg from "./Imagenes_R/asesor.webp";
import Cajeropimg from "./Imagenes_R/CajeroP.webp";
import Usuariecito from "./Imagenes_R/usuario.webp";

const Roles = () => {


  let History = useHistory();

  const validar3 = (e) => {
    var validacion = document.getElementById("Asesorv");
    if (validacion.value == 1 || validacion.value == "") {
      History.push("/AsesorD1");
      validacion.focus();
    } else if (validacion.value == 2 || validacion.value == "") {
      History.push("/AsesorD2");
      validacion.focus();
    } else if (validacion.value == 3 || validacion.value == "") {
      History.push("/AsesorD3");
      validacion.focus();
    } else if (validacion.value == 4 || validacion.value == "") {
      History.push("/AsesorD4");
      validacion.focus();
    } else if (validacion.value == 5 || validacion.value == "") {
      History.push("/AsesorD5");
      validacion.focus();
    } else alert("Por favor seleccione una opcion");
    validacion.focus();
  };

  const validar4 = (e) => {
    var validacion = document.getElementById("cajerov");
    if (validacion.value == 1 || validacion.value == "") {
      History.push("/Cajero1");
      validacion.focus();
    } else if (validacion.value == 2 || validacion.value == "") {
      History.push("/Cajero2");
      validacion.focus();
    } else if (validacion.value == 3 || validacion.value == "") {
      History.push("/Cajero3");
      validacion.focus();
    } else if (validacion.value == 4 || validacion.value == "") {
      History.push("/Cajero4");
      validacion.focus();
    } else if (validacion.value == 5 || validacion.value == "") {
      History.push("/Cajero5");
      validacion.focus();
    } else alert("Por favor seleccione una opcion");
    validacion.focus();
  };


  return (
    <div className="principal2">
      <div className="fondo" id="dark-mode">
        <div className="fondo2">
          <div className="f2">
            <i
              class="bi bi-arrow-left-circle-fill"
              id="cir"
              onClick={() => History.push("/")}
            ></i>
            <div class="dropdown">
  <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img
                    className="imagen01"
                    alt=""
                    src={Usuariecito}
                  />
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Cerrar Sesi??n</a></li>
  </ul>
</div>
          </div>
          <div className="Croles">
            <div className="row" id="rows">
              <h3 className="regis">Registrado con: {"hola"} </h3>
              <h1 className="TituloR">Escoge tu rol</h1>
              <div className="colsito1" id="colsito">
                <div className="Fl">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Directorimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Director</b>
                    </li>
                    <div className="Formu">
                      <li>
                        <input
                          type="text"
                          className="form-control"
                          value="Director Operativo"
                          id="inputsdisables"
                          readonly
                          disabled
                        ></input>
                      </li>
                    </div>
                    <br />
                    <li>
                      <button onClick={() => History.push("/Tabla_director")} value="validar" className="button01">
                        <img
                          className="ImagenF"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* column2 */}
              <div className="colsito2" id="colsito">
                <div className="Fl">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Gerenteimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Gerente</b>
                    </li>
                    <div className="Formu">
                      <li>
                        <li>
                          <input
                            type="text"
                            className="form-control"
                            value="Gerente"
                            id="inputsdisables"
                            readonly
                            disabled
                          ></input>
                        </li>
                      </li>
                    </div>
                    <br />
                    <li>
                      <button onClick={()=> History.push("/Gerente")} value="validar2" className="button01">
                        <img
                          className="ImagenF"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* column3 */}
              <div className="colsito3" id="colsito">
                <div className="Fl">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Asesorimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Asesor</b>
                    </li>
                    <div className="Formu">
                      <li>
                        <Form.Select
                          aria-label="Default select example"
                          id="Asesorv"
                          name="Asesorv"
                        >
                          <option value="0" className="Lform">
                            Selecciona el # de rol
                          </option>
                          <option value="1">Asesor #1</option>
                          <option value="2">Asesor #2</option>
                          <option value="3">Asesor #3</option>
                          <option value="4">Asesor #4</option>
                          <option value="5">Asesor #5</option>
                        </Form.Select>
                      </li>
                    </div>
                    <br />
                    <li>
                      <button onClick={validar3} value="validar3" className="button01">
                        <img
                          className="ImagenF"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="colsito4" id="colsito">
                <div className="Fl">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Cajeroimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Cajero</b>
                    </li>
                    <div className="Formu">
                      <li>
                        <Form.Select
                          aria-label="Default select example"
                          id="cajerov"
                          name="cajerov"
                        >
                          <option value="0" className="Lform">
                            Selecciona el # de rol
                          </option>
                          <option value="1">Cajero #1</option>
                          <option value="2">Cajero #2</option>
                          <option value="3">Cajero #3</option>
                          <option value="4">Cajero #4</option>
                          <option value="5">Cajero #5</option>
                        </Form.Select>
                      </li>
                    </div>
                    <br />
                    <li>
                      <button onClick={validar4} value="validar4" className="button01">
                        <img
                          className="ImagenF"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="colsito5" id="colsito">
                <div className="Fl">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Cajeropimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Cajero Principal</b>
                    </li>
                    <div className="Formu">
                      <li>
                        <input
                          type="text"
                          className="form-control"
                          value="Cajero Principal"
                          id="inputsdisables"
                          readonly
                          disabled
                        ></input>
                      </li>
                    </div>
                    <br />
                    <li>
                      <button onClick={()=> History.push("/CajeroP")} value="validar5" className="button01">
                        <img
                          className="ImagenF2"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
