import React, { useState, useRef } from "react";
import {
  Formulario,
  ContenedorBotonCentrado,
  Boton,
  MensajeError,
} from "./Elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./ComponentesInicio/Input";
import "./InicioS.css";
import logo from "../Inicio_sesion/Logo/logo.webp";
import { useHistory } from "react-router-dom";


const URL_LOGIN ="http://localhost:8080/banca/bd_sesion/login.php"

const enviarData = async (url, datos)=>{

  const resp = await fetch (url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  //console.log(resp);
  const json = await resp.json();
  //console.log(json)

  return json;
}

const App = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  let history = useHistory();

  const expresiones = {
    usuario: /^ADMIN$/, // Letras, numeros, guion y guion_bajo
    password: /^ADMIN$/, // 4 a 12 digitos.
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const refUsuario = useRef(null);

  const refContraseña = useRef(null)

  const handleLogin = async() =>{
      const datos = {
        "Usuario" : refUsuario.current.value,
        "Contra" : refContraseña.current.value
      }
      //console.log(datos);
      const respuestaJson = await enviarData( URL_LOGIN, datos );
      console.log("respuesta desde el evento", respuestaJson);
      const Rol = (respuestaJson.Idti_rol)
      const Usuario = (respuestaJson.Usuario)
      const conectado = (respuestaJson.conectado)
      if(conectado === true & Rol == "1"){
        cambiarFormularioValido(true);
        cambiarUsuario({ campo: "", valido: "" });
        cambiarPassword({ campo: "", valido: null });
        history.push("/Roles");}

        else if (conectado === true & Rol == "2"){
          cambiarFormularioValido(true);
        cambiarUsuario({ campo: "", valido: "" });
        cambiarPassword({ campo: "", valido: null });
        history.push("/Rasesor");
        }
        else if (conectado === true & Rol == "3"){
          cambiarFormularioValido(true);
        cambiarUsuario({ campo: "", valido: "" });
        cambiarPassword({ campo: "", valido: null });
        history.push("/Rgerente");
        }
        else if (conectado === true & Rol == "4"){
          cambiarFormularioValido(true);
          cambiarUsuario({ campo: "", valido: "" });
          cambiarPassword({ campo: "", valido: null });
          history.push("/Rcajero");
        }
        else if (conectado === true & Rol == "5"){
          cambiarFormularioValido(true);
          cambiarUsuario({ campo: "", valido: "" });
          cambiarPassword({ campo: "", valido: null });
          history.push("/rcajerop");
        }
          else if (usuario.valido === "true" && password.valido === "true" ) {
            cambiarFormularioValido(true);
            cambiarUsuario({ campo: "", valido: "" });
            cambiarPassword({ campo: "", valido: null });
            history.push("/Roles");
          }else {
            cambiarFormularioValido(false);
          } 
  }

  
  return (
    <div className="Fondo">
      <div className="Fondo2">
        <main className="main">
          <div className="cont">
            <div className="cont3">
              <div className="contenderlogo">
                <img className="Logo" alt="" src={logo} />
              </div>
            </div>
            <br />
            <div className="">
              <Formulario action="" onSubmit={onSubmit}>
                <Input
                  estado={usuario}
                  cambiarEstado={cambiarUsuario}
                  tipo="text"
                  label="Usuario"
                  placeholder="john123"
                  name="usuario"
                  expresionRegular={expresiones.usuario}
                  Referencia={refUsuario}
                />

                <Input
                  estado={password}
                  cambiarEstado={cambiarPassword}
                  tipo="password"
                  label="Contraseña"
                  name="password1"
                  expresionRegular={expresiones.password}
                  Referencia={refContraseña}
                />

                {formularioValido === false && (
                  <MensajeError>
                    <p>
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      <b>Error:</b> Por favor rellena correctamente.
                    </p>
                  </MensajeError>
                )}
                <br />
                <ContenedorBotonCentrado>
                  <Boton type="submit" className="Botonsito" onClick={handleLogin}>
                    <span>Ingresar</span>
                  </Boton>
                </ContenedorBotonCentrado>
              </Formulario>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
