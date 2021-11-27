import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Asesor = () => {

    let History  = useHistory();

    return (
        <div>
            <Button onClick = {()=>History.push('/')}>Inicio</Button>
            <br/>
            <br/>
            <Button onClick = {()=>History.push('/Roles')}> Regresar</Button>
            <br/>
            <br/>
            <Button onClick = {()=>History.push('/PersonaJuridica')}>Persona Juridica</Button>
            <br/>
            <br/>
            <Button onClick = {()=>History.push('/PersonaNatural')}>Persona Natural</Button>
        </div>
    )
}

export default Asesor
