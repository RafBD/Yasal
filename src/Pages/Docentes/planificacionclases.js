import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { jsPDF } from "jspdf";
import "./planificacionclases.css";

// Definición de horarios y materias
const horarios = [
  { hora: '07:00 - 08:00', lunes: 'Desarrollo de Aplicaciones', martes: '', miércoles: '', jueves: '', viernes: 'Bases de Conocimiento', salon: 'A101' },
  { hora: '08:00 - 09:00', lunes: 'Desarrollo de Aplicaciones', martes: 'Ética Profesional', miércoles: '', jueves: '', viernes: '' , salon: 'B202'},
  { hora: '09:00 - 10:00', lunes: 'Conmutación y Redes', martes: 'Ética Profesional', miércoles: 'Administración de Finanzas', jueves: '', viernes: 'Desarrollo de Aplicaciones', salon: 'C303' },
  { hora: '10:00 - 11:00', lunes: '', martes: 'Sistemas CRM', miércoles: 'Conmutación y Redes', jueves: 'Desarrollo de Aplicaciones', viernes: 'Fundamentos Legales', salon: 'D404' },
  { hora: '11:00 - 12:00', lunes: 'Ética Profesional', martes: 'Desarrollo de Aplicaciones', miércoles: 'Bases de Conocimiento', jueves: 'Conmutación y Redes', viernes: 'Administración de Finanzas', salon: 'E505' },
];

const materias = [
  { codigo: 'DA123', nombre: 'Desarrollo de Aplicaciones' },
  { codigo: 'BC456', nombre: 'Bases de Conocimiento' },
  { codigo: 'CR789', nombre: 'Conmutación y Redes'},
  { codigo: 'FL101', nombre: 'Fundamentos Legales' },
  { codigo: 'AF112', nombre: 'Administración de Finanzas'},
  { codigo: 'SC113', nombre: 'Sistemas CRM' },
  { codigo: 'EP114', nombre: 'Ética Profesional'},
];

const HorariosPage = ({ sidebarOpen }) => {

  // Función para generar el PDF con la planeación
  const generarPlaneacionPDF = (nombreMateria) => {
    const doc = new jsPDF();

    // Agregar el título y el nombre de la materia
    doc.setFontSize(16);
    doc.text('Planeación', 20, 20);  // Título "Planeación"
    doc.setFontSize(12);
    doc.text(`Materia: ${nombreMateria}`, 20, 30); // Nombre de la materia

    // Descargar el PDF
    doc.save(`${nombreMateria}_Planeacion.pdf`);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F5F5F5',
        minHeight: '100vh',
        padding: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
        marginLeft: sidebarOpen ? '300px' : '0',
        transition: 'margin-left 0.3s ease',
      }}
    >
      <Typography variant="h4" color="#1E3A5F" align="center">
        Horarios del Docente
      </Typography>

      {/* Tabla de Horarios */}
      <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Horario</TableCell>
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Lunes</TableCell>
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Martes</TableCell>
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Miércoles</TableCell>
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Jueves</TableCell>
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Viernes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {horarios.map((horario) => (
              <TableRow key={horario.hora}>
                <TableCell>{horario.hora}</TableCell>
                <TableCell>{horario.lunes}</TableCell>
                <TableCell>{horario.martes}</TableCell>
                <TableCell>{horario.miércoles}</TableCell>
                <TableCell>{horario.jueves}</TableCell>
                <TableCell>{horario.viernes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Lista de Materias */}
      <Typography variant="h5" color="#1E3A5F" align="center" sx={{ marginTop: '40px' }}>
        Lista de Materias a Cursar
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Código de Materia</TableCell>
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Nombre de Materia</TableCell>
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materias.map((materia) => (
              <TableRow key={materia.codigo}>
                <TableCell>{materia.codigo}</TableCell>
                <TableCell>{materia.nombre}</TableCell>
                <TableCell>
                  <Button className="table-button"
                    variant="contained"
                    color="primary"
                    onClick={() => generarPlaneacionPDF(materia.nombre)}
                  >
                    Descargar Planeación
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HorariosPage;
