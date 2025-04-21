import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/Login/Login';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import MainLayout from './Components/MainLayout'; 
import { useEffect, useState } from 'react';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from 'axios';
import HomeDocente from './Pages/Docentes/gestionalumnos.js';
import HomeAlumno from './Pages/Home/HomeAlumno.js';
import Eventos from './Pages/Eventos calendario/Eventos.js'; // Importamos la nueva página
import HorariosPage from './Pages/Horarios/Horarios.js'; // Importa la página de horarios
import QuejasAlum from './Pages/FormQuejasSug/Quejas.js'; // Importamos la nueva página
import FormsAlumno from './Pages/FormEvaluacion/Evaluacion.js'; // Importamos la nueva página
import Companeros from './Pages/Companeros/Companeros.js';
import CredencialDigital from './Pages/Credencial_digital/Credencial.js';
import Historial from './Pages/Historial_academico/Historial.js';
import Pagos from './Pages/Pagos/Pagos.js';
import Calendario from './Pages/Docentes/calendario.js'; // Importamos la nueva página
import Docs from './Pages/Docentes/documentos.js'; // Importamos la nueva página
import FormEvalDoc from './Pages/Docentes/formularioeval.js'; // Importamos la nueva página
import FormQuejasDoc from './Pages/Docentes/formularioquejas.js'; // Importamos la nueva página
import Evaluacionesdoc from './Pages/Docentes/evaluacionesalumnos.js'; // Importamos la nueva página
import Settins from './Pages/SettingPage/SettingPage.js'; // Importamos la nueva página
import { Dialog } from 'primereact/dialog';
import Politicas from './Pages/politicas.js'; // Importamos la nueva página
import Gestionalumdoc from './Pages/Docentes/gestionalumnos.js'; // Importamos la nueva página
import Horariosdoc from './Pages/Docentes/planificacionclases.js'; // Importamos la nueva página


function App() {
  const { isAuthenticated, user, logout } = useAuth0();
  const [role, setRole] = useState(localStorage.getItem('userRole') || 'alumno'); // Recuperar el rol desde localStorage
  const [isUserValid, setIsUserValid] = useState(null); // Para almacenar el estado de la validación del usuario
  const [setLoading] = useState(true); // Para manejar el estado de carga
  const [showMessage, setShowMessage] = useState(false);


  
    useEffect(() => {
      if (isAuthenticated && user) {
        const userRole = localStorage.getItem('userRole') || 'alumno';
        axios
          .post('http://localhost:5000/validate-role', {
            username: user.email,
            role: userRole,
          })
          .then((response) => {
            if (response.status === 200) {
              setIsUserValid(true);
            }
            setLoading(false);
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              setIsUserValid(false);
              setShowMessage(true); // Mostrar el mensaje cuando el usuario no es válido
            }
          });
      } else {
        setLoading(false);
      }
    }, [isAuthenticated, user, setLoading]);
  
useEffect(() => {
  if (showMessage) {
    // Temporizador para cerrar la sesión después de 3 segundos
    const timer = setTimeout(() => {
      logout({ returnTo: window.location.origin });
    }, 3000); // 3 segundos antes de hacer logout

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }
}, [showMessage, logout]);


if (!isAuthenticated) {
  // Si no está autenticado, esperamos 5 segundos antes de redirigir al login
  setTimeout(() => {
    return <LoginButton />;
  }, 5000); // 5 segundos
}


  if (isUserValid === false) {
    // Mostrar el mensaje en un modal dentro del navegador
    return (
      <Dialog
        header="Error de autenticación"
        visible={showMessage}
        style={{ width: '50vw' }}
        modal
        onHide={() => setShowMessage(false)} // Cerrar el modal
      >
        <p>Usuario no válido. Por favor, inténtalo nuevamente.</p>
      </Dialog>
    );
  }
  
  
  

  return (
    <Router>
    <Routes>
    <Route path="/" element={isAuthenticated ? <Navigate to={`/home-${role}`} /> : <LoginButton onRoleChange={setRole} />} />
      
      {/* Rutas para el docente */}
      <Route
        path="/home-docente"
        element={
          <MainLayout role="Docente">
            <HomeDocente />
          </MainLayout>
        }
      />

      {/* Rutas para el alumno */}
      <Route
        path="/home-alumno"
        element={
          <MainLayout role="Alumno">
            <HomeAlumno />
          </MainLayout>
        }
      />
      <Route
        path="/quejas-sugerencias"
        element={
          <MainLayout role="Alumno">
            <QuejasAlum />
          </MainLayout>
        }
      />
      <Route
        path="/eventos"
        element={
          <MainLayout role="Alumno">
            <Eventos />
          </MainLayout>
        }
      />
              {/* Rutas para el Evaluaciones */}
              <Route
        path="/formularios-evaluaciones"
        element={
          <MainLayout role="Alumno">
            <FormsAlumno />
          </MainLayout>
        }
      />
      <Route
        path="/horarios" // Agrega la ruta para la página de horarios
        element={
          <MainLayout role="Alumno"> {/* O "Docente" según necesites */}
            <HorariosPage />
          </MainLayout>
        }
      />
              {/* Nueva ruta para la página de Compañeros */}
              <Route
        path="/Companeros"
        element={
          <MainLayout role="Alumno">
            <Companeros />
          </MainLayout>
        }
      />
      <Route
        path="/credencial-digital"
        element={
          <MainLayout role="Alumno">
            <CredencialDigital />
          </MainLayout>
        }
      />
      <Route
        path="/historial-academico"
        element={
          <MainLayout role="Alumno">
            <Historial />
          </MainLayout>
        }
      />
            <Route
        path="/calendario"
        element={
          <MainLayout role="Docente">
            <Calendario />
          </MainLayout>
        }
      />
                  <Route
        path="/documentosDoc"
        element={
          <MainLayout role="Docente">
            <Docs />
          </MainLayout>
        }
      />
                        <Route
        path="/formEvalDoc"
        element={
          <MainLayout role="Docente">
            <FormEvalDoc />
          </MainLayout>
        }
      />
                              <Route
        path="/formQuejasDoc"
        element={
          <MainLayout role="Docente">
            <FormQuejasDoc />
          </MainLayout>
        }
      />
      <Route
        path="/pagos"
        element={
          <MainLayout role="Alumno">
            <Pagos />
          </MainLayout>
        }
      />
            <Route
        path="/evaluacionesdoc"
        element={
          <MainLayout role="Docente">
            <Evaluacionesdoc />
          </MainLayout>
        }
      />
                  <Route
        path="/Settings"
        element={
          <MainLayout role="Docente">
            <Settins />
          </MainLayout>
        }
      />
                  <Route
        path="/Settings"
        element={
          <MainLayout role="Alumno">
            <Settins />
          </MainLayout>
        }
      />
                        <Route
        path="/politicas"
        element={
          <MainLayout >
            <Politicas />
          </MainLayout>
        }
      />
        <Route
        path="/gestionalum"
        element={
          <MainLayout  role="Docente">
            <Gestionalumdoc />
          </MainLayout>
        }
      />
              <Route
        path="/Horariosdoc"
        element={
          <MainLayout  role="Docente">
            <Horariosdoc />
          </MainLayout>
        }
      />
    </Routes>
    
  </Router>
  );
}

export default App;
