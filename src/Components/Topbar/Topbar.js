import React, { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SidebarAlumno from '../Sidebar/SidebarAlumno';
import SidebarDocente from '../Sidebar/SidebarDocente';
import { LogOutButton } from '../Logout/Logout';
import { SettingsButton } from '../SettingButton/SettingsButton';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import './Topbar.css';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const { user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="topbar">
      {/* Mostrar Sidebar dependiendo del rol */}
      {userRole === 'docente' ? (
        <SidebarDocente visible={sidebarVisible} onHide={toggleSidebar} />
      ) : (
        <SidebarAlumno visible={sidebarVisible} onHide={toggleSidebar} />
      )}

      <img
        src={user.picture}
        alt={user.name}
        onClick={toggleDropdown}
        className="user-img"
      />
      {showDropdown && (
        <div className="dropdown-container" ref={dropdownRef}>
          <div className="dropdown-content">
            <img
              src={user.picture}
              alt={user.name}
              className="imagen_usuario"
            />
            <p>Hola, {user.name}</p>
            <p>Rol: {userRole || 'No asignado'}</p>
            <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
            <div className="icons-container">
              <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '1.5rem' }}>
                <Badge value="2"></Badge>
              </i>
              <i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '1.5rem' }}>
                <Badge value="5+" severity="danger"></Badge>
              </i>
              <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '1.5rem' }}>
                <Badge severity="danger"></Badge>
              </i>
            </div>
            <div className="flex flex-col gap-2">
              {/* Llamar a closeDropdown al hacer clic en los botones */}
              <LogOutButton onClick={closeDropdown} />
              <SettingsButton onClick={closeDropdown} />
            </div>
            <div className="mt-3 flex gap-2 text-[0.8rem] text-dark-tremor-background-subtle">
              <Link to="/politicas" onClick={closeDropdown} style={{ color: '#0062AD', textDecoration: 'none' }}>
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
