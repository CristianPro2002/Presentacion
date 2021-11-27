import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';
import './Estilos del director/estilosDirector.css'
import imagen from './Imagenes/logo_banca.svg'
import { signup, useAuth } from '../firebase';



const Director = () => {
    const [loading, setLoading] = useState(false);
    
    const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();

let History  = useHistory();

async function handleSignup () {

    setLoading(true);
    try {
        
        await signup(emailRef.current.value,passwordRef.current.value);
    } catch {
        alert("Error, cuenta ya registrada")
    }
    setLoading(false);
}

        
    return (

        <div className="contenedor">
           
            <Button onClick = {()=>History.push('/')}>Inicio</Button>
            <br/>
            <br/>
            <Button onClick = {()=>History.push('/Roles')}> Regresar</Button>
                
                <div className="row">
                
                 <form className="form">
                        <div className="Creacion__usuarios ">

                        <div className="
                    "> <img className="Imagen_bank" src={imagen}/>  </div>

                        <div className="Creacion__usuarios--Titulo">
                         
                            <h2> Creacion de Usuarios</h2>
                        
                            </div>

                                <div className="">
                                   
                                     <label>
                                         <div className="Creacion__usuarios--nombre">
                                        Nombre de usuario </div>
                                            <input
                                                ref={emailRef}
                                                placeholder="enter the username"
                                                type="text"
                                                name="nom_usu"
                                                >
                                            </input>
                                        </label>
                                </div>

                                <div > 
                                        <label>
                                            <div className="creacion__usuarios--contraseña">
                                            Contraseña
                                            </div>
                                            <input
                                                ref={passwordRef}
                                                placeholder="password"
                                                type="password"
                                                name="contraseña_usu"
                                                >
                                            </input>
                                        </label>
                                       
                                </div>

                                

                                <div className="Boton__Crear--usuario">
                                        <Button disable= {loading || currentUser} onClick = {handleSignup}>Crear</Button>


                                </div>

                                


                        </div>
                </form>


                <div className="Infore__Solicitud--Aprobacion">
                         <h2>
                        Informe de solicitud de aprobacion
                        </h2>

                </div>

</div>
               
               
        </div>
    )
    
}

export default Director
