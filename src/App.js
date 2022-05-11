import React, {useState} from 'react';
import Index from './Components/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Roles from './Components/Roles/Roles';
import Director from './Components/Director/Director'
import Gerente from './Components/Gerente/Gerente'
import Asesor from './Components/Asesor/Asesor'
import Cajero from './Components/Cajero/Cajero'
import PersonaJuridica from './Components/Asesor/Persona_Juridica/PersonaJuridica'
import PersonaNatural from './Components/Asesor/Persona_Natural/Persona_Natural'
import Formulario_Director from './Components/Director/Formulario_Director'
import Asesor2 from './Components/Asesor/Asesor2'
import Asesor3 from './Components/Asesor/Asesor3'
import Asesor4 from './Components/Asesor/Asesor4'
import Asesor5 from './Components/Asesor/Asesor5'
import Persona_Natural2 from './Components/Asesor/Persona_Natural/Persona_Natural2';
import Persona_Natural3 from './Components/Asesor/Persona_Natural/Persona_Natural3';
import Persona_Natural4 from './Components/Asesor/Persona_Natural/Persona_Natural4';
import Persona_Natural5 from './Components/Asesor/Persona_Natural/Persona_Natural5';
import PersonaJuridica2 from './Components/Asesor/Persona_Juridica/PersonaJuridica2';
import PersonaJuridica3 from './Components/Asesor/Persona_Juridica/PersonaJuridica3';
import PersonaJuridica4 from './Components/Asesor/Persona_Juridica/PersonaJuridica4';
import PersonaJuridica5 from './Components/Asesor/Persona_Juridica/PersonaJuridica5';
import {Funcionamiento_form} from './Components/Director/Funcionamiento_form'
import {Tabla_director} from './Components/Director/Tabla_director';
import Consulta from './Components/Asesor/Consulta/Consulta'
import Consulta2 from './Components/Asesor/Consulta/Consulta2'
import CajeroP from './Components/CajeroP/CajeroP'
import Cajero1 from './Components/Cajero/Cajero/Cajero'
import Cajero2 from './Components/Cajero/Cajero/Cajero2'
import Cajero3 from './Components/Cajero/Cajero/Cajero3'
import Cajero4 from './Components/Cajero/Cajero/Cajero4'
import Cajero5 from './Components/Cajero/Cajero/Cajero5'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/Cajero5">
          <Cajero5/>
        </Route>
      <Route path="/Cajero4">
          <Cajero4/>
        </Route>
      <Route path="/Cajero3">
          <Cajero3/>
        </Route>
      <Route path="/Cajero2">
          <Cajero2/>
        </Route>
        <Route path="/Cajero1">
          <Cajero1/>
        </Route>
      <Route path="/CajeroP">
          <CajeroP/>
        </Route>
      <Route path="/Consulta2">
          <Consulta2/>
        </Route>
      <Route path="/Consulta">
          <Consulta/>
        </Route>
        <Route path="/Tabla_director">
          <Tabla_director />
        </Route>
        <Route path="/PersonaJuridica5">
          <PersonaJuridica5 />
        </Route>
        <Route path="/PersonaJuridica4">
          <PersonaJuridica4 />
        </Route>
        <Route path="/PersonaJuridica3">
          <PersonaJuridica3 />
        </Route>
        <Route path="/PersonaJuridica2">
          <PersonaJuridica2 />
        </Route>
        <Route path="/PersonaNatural5">
          <Persona_Natural5 />
        </Route>
        <Route path="/PersonaNatural4">
          <Persona_Natural4 />
        </Route>
        <Route path="/PersonaNatural3">
          <Persona_Natural3 />
        </Route>
        <Route path="/PersonaNatural2">
          <Persona_Natural2 />
        </Route>
        <Route path="/Asesor5">
          <Asesor5 />
        </Route>
        <Route path="/Asesor4">
          <Asesor4 />
        </Route>
        <Route path="/Asesor3">
          <Asesor3 />
        </Route>
        <Route path="/Asesor2">
          <Asesor2 />
        </Route>
        <Route path="/PersonaNatural">
          <PersonaNatural />
        </Route>
        <Route path="/PersonaJuridica">
          <PersonaJuridica />
        </Route>
        <Route path="/Roles">
          <Roles />
        </Route>
        <Route path="/Director">
          <Director />
          <Funcionamiento_form />
        </Route>
        <Route path="/Gerente">
          <Gerente />
        </Route>
        <Route path="/Asesor">
          <Asesor />
        </Route>
        <Route path="/Cajero">
          <Cajero />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
