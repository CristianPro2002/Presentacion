import React,{useState} from 'react'
import './ESTILOS_FORMD/estile_form_d.css'
import imagen from './Imagenes/Manager-icon.png'
import imagenxd from './Imagenes/eye-solid.png'
import { Form} from 'react-bootstrap'

export const Formulario_Director = (props) => {
  
  const [passwordshow,setpasswordshow] = useState(false);
  const togglepasword = () =>{
  setpasswordshow(!passwordshow);
  }
  
  const initialStateDatos ={
    Nombre_usu_form:'',
    Contraseña_usu_form:'',
    Tipo_de_rol:'',
    Confirmacion_creacion:'false'

      }

const [datos,setDatos] = useState(initialStateDatos);

const handleInputChange = event =>{
    const {name,value}= event.target;
    setDatos({...datos,[name]:value})
    
};
const handleChecked = event =>{
  const {name,checked}= event.target;
  setDatos({...datos,[name]:checked})
  
};
const enviarDatos = event =>{
    event.preventDefault();
    console.log(datos)
    props.addoredit(datos);
    setDatos({...initialStateDatos})
    
}

return (
  <div className="container" id="contenedor_formd">
      <div className="Title_and_image">
       <img  className="img_usu_creacion" src={imagen}></img>
        <h3 classname="Titulo_creacion_usuarios">Creacion de usuarios </h3>
      </div>
      <Form onSubmit={enviarDatos}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control  
           placeholder="Enter the user name"
           type="text"
           name="Nombre_usu_form"
           onChange={handleInputChange}
           value={datos.Nombre_usu_form}
           />
           </Form.Group>
           <div className="mb-3" id="Contenedor_contraseña">
          <div className="Contenedor_contraseña_Arreglo">
            <Form.Group className="mb-3" controlId="formBasicontraseña">
              <Form.Label>Contraseña de usuario</Form.Label>
              <Form.Control
              id="input_contra_form"
               placeholder="Enter the password"
               type={passwordshow ? "text" : "password"}
                name="Contraseña_usu_form"
                value={datos.Contraseña_usu_form}
                onChange={handleInputChange}
                ></Form.Control>
            </Form.Group>
          </div>
          <div className="Contenedor_imagen_boton">
          <input onClick ={togglepasword} id="Boton_imagen_eyes" type="image" src={imagenxd}></input>
         
          </div> 
        </div>
        <div>
          <label>Seleccione el tipo de rol</label>
        </div>
        <div className="mb-3" id="arreglos_desple">
          <select
           name="Tipo_de_rol"
            id="select_sin_react"
            onChange={handleInputChange}
            >
            Tipo de rol
            <option value="Director">Director</option>
            <option value="Gerente">Gerente</option>
            <option value="Asesor">Asesor</option>
            <option value="Cajero">Cajero</option>
          </select>
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Clic para confirmar la creacion del usuario"
            name="Confirmacion_creacion"
            value="Form_usu.Confirmacion_creacion"
            onChange={handleChecked}
          />
           </Form.Group>
           <div className="center_button">
           <button 
           className="fourth" 
           type ="submit">crear</button>
           </div>
      </Form>
      </div>
        );
        
      }
