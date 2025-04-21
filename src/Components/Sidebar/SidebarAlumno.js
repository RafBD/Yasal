import React, { useState } from "react";
import { Sidebar as PrimeSidebar } from "primereact/sidebar";
import { Ripple } from "primereact/ripple";
import { Link } from "react-router-dom"; // Importamos Link de react-router-dom
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-dark-purple/theme.css"; // Tema de PrimeReact
import "primereact/resources/primereact.min.css"; // Estilos principales de PrimeReact
import "primeflex/primeflex.css"; // PrimeFlex para layout
import "./SidebarAlumnos.css"; // Tu archivo de estilos
import { useAuth0 } from "@auth0/auth0-react"; // Importamos useAuth0

const SidebarAlumno = () => {
  const { user } = useAuth0(); // Obtener el usuario desde Auth0
  const [visible, setVisible] = useState(false); // Estado de visibilidad del sidebar

  // Función para abrir el sidebar
  const toggleSidebar = () => {
    setVisible(!visible);
  };
  // Función para cerrar el sidebar al hacer clic en un enlace
  const closeSidebar = () => {
    setVisible(false);
  };

  const sidebarContent = (
    <ul className="list-none p-3 m-0">
      <li>
        <Link
          to="/home-alumno"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-file mr-2"></i>
          <span className="font-medium">Home</span>
          <Ripple />
        </Link>
      </li>
      <li className="oculto">
        <Link
          to="/docs-alumno"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-file mr-2"></i>
          <span className="font-medium">Circulares y Documentos</span>
          <Ripple />
        </Link>
      </li>
      <li>
        <Link
          to="/eventos"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-calendar mr-2"></i>
          <span className="font-medium">Eventos</span>
          <Ripple />
        </Link>
      </li>
      <li>
        <Link
          to="/historial-academico"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-book mr-2"></i>
          <span className="font-medium">Historial Académico</span>
          <Ripple />
        </Link>
      </li>
      <li>
        <Link
          to="/credencial-digital"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-id-card mr-2"></i>
          <span className="font-medium">Credencial Digital</span>
          <Ripple />
        </Link>
      </li>
      <li>
        <Link
          to="/companeros"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-comments mr-2"></i>
          <span className="font-medium">Compañeros Grupo</span>
          <Ripple />
        </Link>
      </li>
      <li>
        <Link
          to="/horarios"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-clock mr-2"></i>
          <span className="font-medium">Horarios</span>
          <Ripple />
        </Link>
      </li>
      <li className="oculto">
        <Link
          to="/creditos-talleres"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-tags mr-2"></i>
          <span className="font-medium">Créditos y Talleres</span>
          <Ripple />
        </Link>
      </li>
      <li className="oculto">
        <Link
          to="/plano-escuela"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-map mr-2"></i>
          <span className="font-medium">Plano de la Escuela</span>
          <Ripple />
        </Link>
      </li>
      <li>
        <Link
          to="/formularios-evaluaciones"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-file mr-2"></i>
          <span className="font-medium">Formularios Evaluaciones</span>
          <Ripple />
        </Link>
      </li>
      <li>
        <Link
          to="/pagos"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-credit-card mr-2"></i>
          <span className="font-medium">Pagos</span>
          <Ripple />
        </Link>
      </li>
      <li>
        <Link
          to="/quejas-sugerencias"
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-200 transition-colors w-full"
          onClick={closeSidebar}
        >
          <i className="pi pi-question-circle mr-2"></i>
          <span className="font-medium">Quejas y Sugerencias</span>
          <Ripple />
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      {/* Botón para abrir el Sidebar */}
      <button
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          zIndex: 1000,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          padding: 0,
        }}
        aria-label="Abrir menú lateral"
      >
        <i
          className="pi pi-bars"
          style={{ fontSize: "1.5em", color: "white" }}
        ></i>
      </button>

      <PrimeSidebar
        visible={visible}
        onHide={() => setVisible(false)} // Controlamos la visibilidad
        position="left"
        className="surface-border"
        style={{ position: "fixed", zIndex: 1000 }} // Asegura que el sidebar no mueva el contenido
      >
        <div className="min-h-screen flex flex-column">
          {/* Información del usuario */}
          <div className="usuario-container flex flex-column align-items-center justify-content-center px-4 pt-3 flex-shrink-0">
            <img
              src={user.picture}
              alt={user.name}
              className="imagen_usuario"
            />
            <div className="pic-name-user mt-2 text-center">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          <div className="overflow-y-auto flex-grow">{sidebarContent}</div>
        </div>
      </PrimeSidebar>
    </div>
  );
};

export default SidebarAlumno;
