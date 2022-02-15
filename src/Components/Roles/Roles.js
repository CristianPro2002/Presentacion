import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import "./Roles.css";
import { useAuth } from "../firebase";
import imgasesor from '../Asesor/Imagens/asss.png'

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
      History.push("/Director");
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

  return (
    <div className="principal2">
      <div className="fondo">
        <div className="fondo2 ">
          <div className="f2">
            <i
              class="bi bi-arrow-left-circle-fill"
              id="cir"
              onClick={() => History.push("/")}
            ></i>
          </div>
          <div className="Croles">
            <div className="row">
              <h3 className="regis">Registrado con: {currentUser?.email} </h3>
              <h1 className="TituloR">Escoge tu Rol</h1>
              <div className="col" id="colsito">
                <div className="Fl">
                  <img
                    className=""
                    alt=""
                    src="https://es.seaicons.com/wp-content/uploads/2015/07/Manager-icon.png"
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Director Operativo</b>
                    </li>
                    <div className="Formu">
                      <li>
                        <Form.Select aria-label="Default select example" id="directorv" name="directorv">
                          <option value="0" className="Lform">
                            Selecciona el # de Rol
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
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
              <div className="col" id="colsito">
                <div className="Fl">
                  <img
                    className=""
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/512/1802/1802979.png"
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
                            Selecciona el # de Rol
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
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
              <div className="col" id="colsito">
                <div className="Fl">
                  <img
                    className=""
                    alt=""
                    src={imgasesor}
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
                            Selecciona el # de Rol
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
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

              <div className="col" id="colsito">
                <div className="Fl">
                  <img
                    className=""
                    alt=""
                    src="https://image.flaticon.com/icons/png/512/1059/1059923.png"
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
                            Selecciona el # de Rol
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
