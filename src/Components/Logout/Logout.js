import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const LogOutButton = () => {
    const { logout } = useAuth0();
    return(
        <button className='flex justify-center items-center gap-2' onClick = {() => logout()}>
        <i className="pi pi-sign-out"></i>
        Cerrar Sesión
        </button>
        /*
        <button className='flex justify-center items-center gap-2' onClick = {() => logout()}>
        <i className="pi pi-sign-out"></i>
        Cerrar Sesión
        </button>
        */
    )
}