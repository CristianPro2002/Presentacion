import react from 'react';
import AsesorGeneral from './AsesorGeneral';
import { useHistory } from "react-router-dom";

export const Asesor = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Rasesor")} numeroAsesor= "Asesor #1"/></div>
    )
}

export const Asesor2 = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Rasesor")} numeroAsesor= "Asesor #2"/></div>
    )
}

export const Asesor3 = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Rasesor")} numeroAsesor= "Asesor #3"/></div>
    )
}
export const Asesor4 = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Rasesor")} numeroAsesor= "Asesor #4"/></div>
    )
}

export const Asesor5 = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Rasesor")} numeroAsesor= "Asesor #5"/></div>
    )
}

export const AsesorD1 = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Roles")} numeroAsesor= "Asesor #1"/></div>
    )
}

export const AsesorD2 = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Roles")} numeroAsesor= "Asesor #2"/></div>
    )
}

export const AsesorD3 = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Roles")} numeroAsesor= "Asesor #3"/></div>
    )
}

export const AsesorD4 = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Roles")} numeroAsesor= "Asesor #4"/></div>
    )
}

export const AsesorD5 = () => {
    let History = useHistory();
    return (
        <div><AsesorGeneral onclick={()=> History.push("/Roles")} numeroAsesor= "Asesor #5"/></div>
    )
}