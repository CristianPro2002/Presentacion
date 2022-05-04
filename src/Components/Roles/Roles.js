import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import "./Roles.css";
import { useAuth } from "../firebase";
import Cajeroimg from './Imagenes_R/cajero.webp'
import Directorimg from './Imagenes_R/director.webp'
import Gerenteimg from './Imagenes_R/gerente.webp'
import Asesorimg from './Imagenes_R/asesor.webp'
import Cajeropimg from './Imagenes_R/CajeroP.webp'
const Roles = () => {
  let History = useHistory();

  const currentUser = useAuth();

  const validar = (e) => {
      var validacion = document.getElementById('directorv');
      if(validacion.value==0 || validacion.value=="")
      {
          alert("Selecciona una opcion para continuar");
          validacion.focus();
      } else
      History.push("/Tabla_director");
      validacion.focus();
  }

  const validar2 = (e) => {
    var validacion = document.getElementById('gerentev');
    if(validacion.value==0 || validacion.value=="")
    {
        alert("Selecciona una opcion para continuar");
        validacion.focus();
    } else
    History.push("/Gerente");
    validacion.focus();
}

const validar3 = (e) => {
    var validacion = document.getElementById('Asesorv');
    if(validacion.value==1 || validacion.value=="")
    {
      History.push("/Asesor");
      validacion.focus();
    } else if (validacion.value==2 || validacion.value=="")
          { History.push("/Asesor2");
            validacion.focus();}
    else if (validacion.value==3 || validacion.value=="")
    { History.push("/Asesor3");
            validacion.focus();}
            else if (validacion.value==4 || validacion.value=="")
    { History.push("/Asesor4");
            validacion.focus();}
            else if (validacion.value==5 || validacion.value=="")
    { History.push("/Asesor5");
            validacion.focus();}
           else 
           alert("Por favor seleccione una opcion"); 
           validacion.focus();
}

const validar4 = (e) => {
    var validacion = document.getElementById('cajerov');
    if(validacion.value==0 || validacion.value=="")
    {
        alert("Selecciona una opcion para continuar");
        validacion.focus();
    } else
    History.push("/Cajero");
    validacion.focus();
}

const validar5 = (e) => {
  var validacion = document.getElementById('CajeroP');
  if(validacion.value==0 || validacion.value=="")
  {
      alert("Selecciona una opcion para continuar");
      validacion.focus();
  } else
  History.push("/CajeroP");
  validacion.focus();
}


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
              <h3 className="regis">Registrado con: {currentUser?.email} </h3>
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
                        <Form.Select aria-label="Default select example" id="directorv" name="directorv">
                          <option value="0" className="Lform">
                            Selecciona el # de rol
                          </option>
                          <option value="1">Director #1</option>
                          <option value="2">Director #2</option>
                          <option value="3">Director #3</option>
                          <option value="4">Director #4</option>
                          <option value="5">Director #5</option>
                        </Form.Select>
                      </li>
                    </div>
                    <br />
                    <li>
                      <a onClick={validar} value="validar">
                        <img
                          className="ImagenF"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </a>
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
                        <Form.Select aria-label="Default select example" id="gerentev" name="gerentov">
                          <option value="0" className="Lform">
                            Selecciona el # de rol
                          </option>
                          <option value="1">Gerente #1</option>
                          <option value="2">Gerente #2</option>
                          <option value="3">Gerente #3</option>
                          <option value="4">Gerente #4</option>
                          <option value="5">Gerente #5</option>
                        </Form.Select>
                      </li>
                    </div>
                    <br />
                    <li>
                      <a onClick={validar2} value="validar2">
                        <img
                          className="ImagenF"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </a>
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
                        <Form.Select aria-label="Default select example" id="Asesorv" name="Asesorv">
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
                      <a onClick={validar3} value="validar3">
                        <img
                          className="ImagenF"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </a>
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
                        <Form.Select aria-label="Default select example"id="cajerov" name="cajerov">
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
                      <a onClick={validar4} value="validar4">
                        <img
                          className="ImagenF"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </a>
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
                        <Form.Select aria-label="Default select example" id="CajeroP" name="CajeroP">
                          <option value="0" className="Lform">
                            Selecciona el # de rol
                          </option>
                          <option value="1">Cajero Principal #1</option>
                          <option value="2">Cajero Principal #2</option>
                          <option value="3">Cajero Principal #3</option>
                          <option value="4">Cajero Principal #4</option>
                          <option value="5">Cajero Principal #5</option>
                        </Form.Select>
                      </li>
                    </div>
                    <br />
                    <li>
                      <a onClick={validar5} value="validar5">
                        <img
                          className="ImagenF2"
                          alt=""
                          src="http://cenfma.com/img/flecha.png"
                          width="50"
                          height="50"
                        />
                      </a>
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
