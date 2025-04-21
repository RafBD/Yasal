import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Definición de horarios y materias
const horarios = [
  { hora: '07:00 - 08:00', lunes: 'Desarrollo de Aplicaciones', martes: '', miércoles: '', jueves: '', viernes: 'Bases de Conocimiento' },
  { hora: '08:00 - 09:00', lunes: 'Desarrollo de Aplicaciones', martes: 'Ética Profesional', miércoles: '', jueves: '', viernes: '' },
  { hora: '09:00 - 10:00', lunes: 'Conmutación y Redes', martes: 'Ética Profesional', miércoles: 'Administración de Finanzas', jueves: '', viernes: 'Desarrollo de Aplicaciones' },
  { hora: '10:00 - 11:00', lunes: '', martes: 'Sistemas CRM', miércoles: 'Conmutación y Redes', jueves: 'Desarrollo de Aplicaciones', viernes: 'Fundamentos Legales' },
  { hora: '11:00 - 12:00', lunes: 'Ética Profesional', martes: 'Desarrollo de Aplicaciones', miércoles: 'Bases de Conocimiento', jueves: 'Conmutación y Redes', viernes: 'Administración de Finanzas' },
];

const materias = [
  { codigo: 'DA123', nombre: 'Desarrollo de Aplicaciones', profesor: 'Juan Pérez' },
  { codigo: 'BC456', nombre: 'Bases de Conocimiento', profesor: 'María López' },
  { codigo: 'CR789', nombre: 'Conmutación y Redes', profesor: 'Pedro González' },
  { codigo: 'FL101', nombre: 'Fundamentos Legales', profesor: 'Ana Martínez' },
  { codigo: 'AF112', nombre: 'Administración de Finanzas', profesor: 'Laura Fernández' },
  { codigo: 'SC113', nombre: 'Sistemas CRM', profesor: 'Luis Herrera' },
  { codigo: 'EP114', nombre: 'Ética Profesional', profesor: 'Ricardo Sánchez' },
];

const HorariosPage = ({ sidebarOpen }) => {
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
        Horarios de Clases
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
              <TableCell sx={{ backgroundColor: '#0062AD', color: 'white' }}>Nombre del Profesor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materias.map((materia) => (
              <TableRow key={materia.codigo}>
                <TableCell>{materia.codigo}</TableCell>
                <TableCell>{materia.nombre}</TableCell>
                <TableCell>{materia.profesor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HorariosPage;
