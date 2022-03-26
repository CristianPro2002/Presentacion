import React,{useState} from 'react'
import './ESTILOS_FORMD/estile_form_d.css'
import imagen from './Imagenes/Manager-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignCenter, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

export const Formulario_Director = (props) => {
  const mostrarAlerta=()=>{
    swal({
      title:"Usuario creado con Exito",
      icon: "success",
      button:false,
      timer: 1300
     
    
     });
  }
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
  
    <div className="contenedor_padre_director">
      <div className="container_formulario_director">
        <form onSubmit={enviarDatos} className="">
          <div className="titulo_creacion_usu">
          <img  className="img_usu_creacion" src={imagen}></img>
            <h3>Creacion de Usuarios</h3>
          </div>
          <div className="Nombre_Usuario">
            
            <div className="label_usu">
              <label>Nombre  de usuario</label>
            </div>
            <input 
            required
            className="input_color1"
              placeholder="Enter the user name"
              type="text"
              name="Nombre_usu_form"
              onChange={handleInputChange}
              value={datos.Nombre_usu_form}
            ></input>
          </div>
          <div className="Contraseña_Usuario">
            <span class="icon_eye"  onClick ={togglepasword} >
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>
            <div className="Contraseña_label_usu">
              <label>Contraseña de usuario</label>
            </div>
            <input
            required
             className="input_color2"
              id="input_contra_form"
              placeholder="Enter the password"
              type={passwordshow ? "text" : "password"}
              name="Contraseña_usu_form"
              value={datos.Contraseña_usu_form}
              onChange={handleInputChange}
            ></input>
          </div>
          <div id="arreglos_desple">
          <select className="nashe"
          required
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
          <div className="chequeo">
            <input type="checkbox"
            required
            name="Confirmacion_creacion"
            value="Form_usu.Confirmacion_creacion"
            onChange={handleChecked}>
            </input>
            <label className="label_check"> Confirmar  creacion de  usuario</label>
          </div>
          <div className="center_button">
          <button  onClick={()=>mostrarAlerta()} type ="submit" class="btn third">crear
          </button>
          </div>
        </form>
      </div>
    </div>
        );
        
      }
