import React from "react";
import { useHistory } from "react-router-dom";
import CajeroGeneral from "./CajeroGeneral";

export const Cajero1 = (props) => {
    let History = useHistory();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #1"/>
        </div>
    );
}

export const Cajero2 = (props) => {
    let History = useHistory();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #2"/>
        </div>
    );
}

export const Cajero3 = (props) => {
    let History = useHistory();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #3"/>
        </div>
    );
}

export const Cajero4 = (props) => {
    let History = useHistory();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #4"/>
        </div>
    );
}

export const Cajero5 = (props) => {
    let History = useHistory();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #5"/>
        </div>
    );
}