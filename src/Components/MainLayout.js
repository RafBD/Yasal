import React, { useState, useEffect } from 'react';
import Topbar from '../Components/Topbar/Topbar.js';
import SidebarDocente from '../Components/Sidebar/SidebarDocente.js';
import SidebarAlumno from '../Components/Sidebar/SidebarAlumno.js';

const MainLayout = ({ children, role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Resetear el sidebar cuando el rol cambie
  useEffect(() => {
    setSidebarOpen(false); // Cierra el sidebar al cambiar de rol
  }, [role]);

  return (
    <div className="relative min-h-screen">
      {/* Topbar fijo */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Topbar onToggleSidebar={handleToggleSidebar} />
      </div>

      {/* Sidebar que no desplaza el contenido */}
      {role === 'Docente' ? (
        <SidebarDocente visible={sidebarOpen} onHide={handleToggleSidebar} />
      ) : (
        <SidebarAlumno visible={sidebarOpen} onHide={handleToggleSidebar} />
      )}

      <main className="pt-16 px-4"> {/* Ajusta el padding superior para que no se superponga el contenido */}
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
