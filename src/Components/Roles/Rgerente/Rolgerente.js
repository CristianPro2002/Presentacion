import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import "./Rolgerente.css";
import Cajeroimg from "../Imagenes_R/cajero.webp";
import Directorimg from "../Imagenes_R/director.webp";
import Gerenteimg from "../Imagenes_R/gerente.webp";
import Asesorimg from "../Imagenes_R/asesor.webp";
import Cajeropimg from "../Imagenes_R/CajeroP.webp";

const Rolgerente = () => {


  let History = useHistory();

  const Vasesor = (e) => {
    alert("Sin permisos para acceder a esta funcionalidad");
  };

  const Vcajero = (e) => {
    alert("Sin permisos para acceder a esta funcionalidad");
  };
  const Vdirector = (e) => {
    alert("Sin permisos para acceder a esta funcionalidad");
   
   };
   const Vcajerop = (e) => {
    alert("Sin permisos para acceder a esta funcionalidad");
   
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
            <div className="contmodoo">
              <input type="checkbox" id="input-dark-mode"></input>
            </div>
          </div>
          <div className="Croles">
            <div className="row" id="rows">
              <h3 className="regis">Registrado con: {"hola"} </h3>
              <h1 className="TituloR">Escoge tu rol</h1>
              <div className="colsito1" id="colsito">
                <div id="comuncss">
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
                      <button onClick={Vdirector} value="validar" className="button01">
                        <img
                          className=""
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
                <div id="EspecialGerente">
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
                <div id="comuncss">
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
                          id="Asesorvcp"
                          name="Asesorv"
                          disabled
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
                      <button onClick={Vasesor} value="validar3" className="button01">
                        <img
                          className=""
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
                <div id="comuncss">
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
                          id="cajerovcp"
                          name="cajerov"
                          disabled
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
                      <button onClick={Vcajero} value="validar4" className="button01">
                        <img
                          className=""
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
                <div id="comuncss">
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
                      <button onClick={Vcajerop} value="validar5" className="button01">
                        <img
                          className=""
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

export default Rolgerente;
