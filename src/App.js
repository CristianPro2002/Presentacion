import React from "react";
import Index from "./Components/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Roles from "./Components/Roles/Roles";
import Director from "./Components/Director/Director";
import Gerente from "./Components/Gerente/Gerente";
import {Asesor, Asesor2, Asesor3, Asesor4, Asesor5} from "./Components/Asesor/viewsAsesor";
import {PersonaJuridica, PersonaJuridica2, PersonaJuridica3, PersonaJuridica4, PersonaJuridica5} from "./Components/Asesor/Persona_Juridica/viewsPJ";
import {PersonaNatural, PersonaNatural2, PersonaNatural3, PersonaNatural4, PersonaNatural5} from "./Components/Asesor/Persona_Natural/viewsPN";
import {AsesorD1, AsesorD2, AsesorD3, AsesorD4, AsesorD5} from "./Components/Asesor/viewsAsesor";
import { Funcionamiento_form } from "./Components/Director/Funcionamiento_form";
import { Tabla_director } from "./Components/Director/Tabla_director";
import Consulta from "./Components/Asesor/Consulta/Consulta";
import Consulta2 from "./Components/Asesor/Consulta/Consulta2";
import CajeroP from "./Components/CajeroP/CajeroP";
import {Cajero1, Cajero2, Cajero3, Cajero4, Cajero5} from "./Components/Cajero/viewsCajero";
import Tabla from "./Components/Cajero/Tabla";
import Rolasesor from "./Components/Roles/Rasesor/Rolasesor";
import Rolgerente from "./Components/Roles/Rgerente/Rolgerente";
import Rolcajero from "./Components/Roles/Rcajero/Rolcajero";
import Rolcajerop from "./Components/Roles/Rcajerop/Rolcajerop";
import Factura from "./Components/Cajero/Factura";
import MyProvider from "./Components/application/provider";

function App() {
  return (
    <MyProvider>
      <Router>
        <Switch>
          <Route path="/AsesorD5">
            <AsesorD5 />
          </Route>
          <Route path="/AsesorD4">
            <AsesorD4 />
          </Route>
          <Route path="/AsesorD3">
            <AsesorD3 />
          </Route>
          <Route path="/AsesorD2">
            <AsesorD2 />
          </Route>
          <Route path="/AsesorD1">
            <AsesorD1 />
          </Route>
          <Route path="/Factura">
            <Factura />
          </Route>
          <Route path="/Rasesor">
            <Rolasesor />
          </Route>
          <Route path="/Rgerente">
            <Rolgerente />
          </Route>
          <Route path="/Rcajero">
            <Rolcajero />
          </Route>
          <Route path="/Rcajerop">
            <Rolcajerop />
          </Route>
          <Route path="/Tabla">
            <Tabla />
          </Route>
          <Route path="/Cajero5">
            <Cajero5 />
          </Route>
          <Route path="/Cajero4">
            <Cajero4 />
          </Route>
          <Route path="/Cajero3">
            <Cajero3 />
          </Route>
          <Route path="/Cajero2">
            <Cajero2 />
          </Route>
          <Route path="/Cajero1">
            <Cajero1 />
          </Route>
          <Route path="/CajeroP">
            <CajeroP />
          </Route>
          <Route path="/Consulta2">
            <Consulta2 />
          </Route>
          <Route path="/Consulta">
            <Consulta />
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
            <PersonaNatural5 />
          </Route>
          <Route path="/PersonaNatural4">
            <PersonaNatural4 />
          </Route>
          <Route path="/PersonaNatural3">
            <PersonaNatural3 />
          </Route>
          <Route path="/PersonaNatural2">
            <PersonaNatural2 />
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
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </MyProvider>
  );
}

export default App;
