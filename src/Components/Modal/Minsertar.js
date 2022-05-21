import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import imagen from "../Director/Imagenes/Manager-icon.png";

const Minsertar = ({modalInsertar, handleChange,handleToggle, icon, type, dato, peticionPost, abrirCerrarModalInsertar}) => {

  return (
    <div>
<Modal isOpen={modalInsertar}>
<ModalHeader></ModalHeader>
<ModalBody>
  <div className="contenedor_padre_director">
    <div className="container_formulario_director">
      <form>
        <div className="titulo_creacion_usu">
          <img className="img_usu_creacion" src={imagen}></img>
          <h3>Creacion de Usuarios</h3>
        </div>
        <div className="Nombre_Usuario">
          <div className="label_usu">
            <label>Usuario:</label>
          </div>
          <input
            required
            className="input_color1"
            placeholder="Enter the user name"
            type="text"
            name="Usuario"
            onChange={handleChange}
          ></input>
        </div>
        <div className="Contraseña_Usuario">
          <span class="icon_eye" onClick={handleToggle}>
            <FontAwesomeIcon icon={icon} />
          </span>
          <div className="Contraseña_label_usu">
            <label>Contraseña:</label>
          </div>
          <input
            required
            className="input_color2"
            id="input_contra_form"
            placeholder="Enter the password"
            type={type}
            name="Contra"
            onChange={handleChange}
          ></input>
        </div>
        <div id="arreglos_desple">
          <select
            className="nashe"
            required
            name="Idti_rol"
            id="select_sin_react"
            onChange={handleChange}
          >
            {" "}
            Tipo de rol
            <option value="">Seleccione un rol </option>
            {dato.map((Usuario) => (
              <option value={Usuario.Idti_rol}>
                {Usuario.Nom_rol}
              </option>
            ))}
          </select>
        </div>

        <div className="center_button">
          <button className="btn third" type='submit' onClick={() => peticionPost()}>
            Crear
          </button>
        </div>
      </form>
    </div>
  </div>
</ModalBody>
<ModalFooter>
  <button
    className="btn btn-danger"
    onClick={() => abrirCerrarModalInsertar()}
  >
    Cancelar
  </button>
</ModalFooter>
</Modal>
</div>
  )
}

export default Minsertar

