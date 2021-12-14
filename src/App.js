import React from 'react';
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

function App() {
  return (
    <Router>
    <Switch>
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
          <Formulario_Director/>
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
