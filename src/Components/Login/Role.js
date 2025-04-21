import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const RoleContext = createContext();

// Proveedor de contexto
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('alumno'); // Estado inicial del rol

  const updateRole = (newRole) => {
    setRole(newRole); // Actualiza el rol
  };

  return (
    <RoleContext.Provider value={{ role, updateRole }}>
      {children}
    </RoleContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
