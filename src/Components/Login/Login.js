import React, { useState } from 'react';
import { useRole } from './Role'; // Importar el hook useRole
import { useAuth0 } from '@auth0/auth0-react';
import Switch from './Switch';
import './Login.css';
import logo from '../img/LogoSimon.webp';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { role, updateRole } = useRole(); // Obtener el rol y la función de actualización
  const [localRole, setLocalRole] = useState(role); // Estado local para cambiar el rol

  const handleRoleChange = (newRole) => {
    setLocalRole(newRole); // Actualizar el rol local
    updateRole(newRole); // Actualizar el rol en el contexto global
  };

  const handleLogin = () => {
    // Guardar el rol en localStorage antes de la redirección
    localStorage.setItem('userRole', localRole);

    // Redirigir al login
    loginWithRedirect({
      appState: { role: localRole }
    });
  };

  return (
    <div className="login">
      <img src={logo} alt="Logo de iNFiNiTiX" className="logo" />
      <div className="containerlogin">
        <Switch onRoleChange={handleRoleChange} />
        <button onClick={handleLogin} className="btn" type="button">
          <strong>ENTRAR</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
