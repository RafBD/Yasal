import React, { useState } from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const tableOptions = ['Cuatrimestre 1', 'Cuatrimestre 2', 'Cuatrimestre 3', 'Cuatrimestre 4', 'Cuatrimestre 5', 'Cuatrimestre 6', 'Cuatrimestre 7'];

const createData = (materia, profesor, final) => {
  return { materia, profesor, final };
};

const tableData = [
  [
    createData('Matemáticas Aplicadas a la Computación', 'Mtro. Almazán Alvarado Salvador', 10),
    createData('Fundamentos De Programación', 'Mtro. Gutiérrez Becerril Genaro', 10),
    createData('Fundamentos De Bases De Datos', 'Dr. Hernández Martínez Leonardo', 10),
    createData('Sistemas Operativos', 'Mtro. González Avila Miguel Ángel', 7),
    createData('Fundamentos De Administración', 'Mtro. Nova Ambia Guillermo Alfonso', 10),
    createData('Seminario De Investigación I', 'Dra. López Rodríguez Mayli del Refugio', 10),
    createData('Lógica Aplicada', 'Dr. Ambrosio Bastián José', 10),
  ],
  [
    createData(' Estadística para la Toma De Decisiones en las Ti', 'Dra. Cortes Quezada Hilda', 10),
    createData('Algoritmos y Estructuras De Datos', 'Mtro. Torres Lomelí Antonio Vicente', 10),
    createData('Administración y Explotación De Bases De Datos', 'Dr. Hernández Martínez Leonardo', 10),
    createData('Arquitectura De Computadoras y Soporte Técnico', 'Mtro. Gutiérrez Becerril Genaro', 10),
    createData('Proceso Administrativo', 'Mtro. Rincón Belmont Mario', 9),
    createData('Modelado De Procesos De Negocios', 'Mtro. Nova Ambia Guillermo Alfonso', 10),
    createData('Competencias Lingüísticas', 'Dr. Arreola Rueda Edwin Alberto', 10),
  ],
  [
    createData('Matemáticas Aplicadas a la Administración, Economía y Finanzas', 'Dr. Ambrosio Bastián José', 10),
    createData('Programación Orientada a Objetos', 'Mtro. González Avila Miguel Ángel', 9),
    createData('Bases De Datos Distribuidas', 'Dr. Hernández Martínez Leonardo', 10),
    createData('Fundamentos De Contabilidad', 'Mtro. Bahena García Omar', 10),
    createData('Metodologías para el Análisis y Diseño De Sistemas', 'Mtro. Martínez Valdés Diego Francisco', 9),
    createData('Teoría del Conocimiento', 'Mtro. Algalán Meneses Mauricio', 10),
    createData('Administración De Proyectos I', 'Mtra. Sánchez Méndez Itzia María del Carmen', 9),
  ],
  [
    createData('Investigación De Operaciones', 'Mtro. Torres Lomelí Antonio Vicente', 10),
    createData('Desarrollo De Aplicaciones para Web', 'Mtro. Martínez Valdés Diego Francisco', 10),
    createData('Minería De Datos', 'Mtra. Sánchez Méndez Itzia María del Carmen', 10),
    createData('Redes De Comunicación', 'Mtro. Orozco Álvarez Juan José', 9),
    createData('Mercadotecnia De Productos y Servicios De Ti', 'Dra. Rodríguez Caballero Bibián', 10),
    createData('Desarrollo De Aplicaciones para Comercio Electrónico', 'Ing. Morales Chávez Osiel', 10),
    createData('Conocimiento del Hombre', 'Lic. De Haro Alcázar Ana Lucía', 10),
    createData('Administración De Proyectos II', 'Mtro. Nova Ambia Guillermo Alfonso', 10),
  ],
  [
    createData('Valuación De Proyectos', 'Mtra. Sánchez Méndez Itzia María del Carmen', 9),
    createData('Desarrollo De Aplicaciones para Computación en la Nube', 'Mtro. Martínez Valdés Diego Francisco', 10),
    createData('Inteligencia Artificial y Sistemas Expertos', 'Dr. Ambrosio Bastián José', 10),
    createData('Protocolos De Enrutamiento en Redes', 'Mtro. Orozco Álvarez Juan José', 9),
    createData('Administración De Unidades De Ti', 'Mtro. González Avila Miguel Ángel', 10),
    createData('Sistemas Erp', 'Ing. Morales Chávez Osiel', 10),
    createData('Ética', 'Mtro. Algalán Meneses Mauricio', 10),
  ],
  [
    createData('Desarrollo De Aplicaciones para Dispositivos Móviles', 'Mtro. Martínez Valdés Diego Francisco', 10),
    createData('Bases De Conocimiento', 'Mtra. Sánchez Méndez Itzia María del Carmen', 10),
    createData('Conmutación y Redes Inalámbricas', 'Dr. Hernández Martínez Leonardo', 10),
    createData('Fundamentos Legales en las Ti', 'Lic. Martínez Irene Raúl', 10),
    createData('Administración De las Finanzas en las Ti', 'Mtro. Vela Hernández Esteban Luis', 9),
    createData('Sistemas CRM', 'Ing. Morales Chávez Osiel', 10),
    createData('Ética en el Ejercicio Profesional', 'Dr. Arreola Rueda Edwin Alberto', 10),
  ],
  [
    createData('Desarrollo De Aplicaciones Basadas en Conocimiento', 'Mtro. Torres Lomelí Antonio Vicente', 0),
    createData('Administración De Centros De Datos', 'Mtro. Gutiérrez Becerril Genaro', 0),
    createData('Redes De Área Amplia', 'Lic. Vargas Cortés Miguel Felipe', 0),
    createData('Presupuestos en las Ti', 'Dra. Cortes Quezada Hilda', 0),
    createData('Sistemas De Inteligencia De Negocios', 'Mtro. Arellano González Marco Antonio', 0),
    createData('Ética De la Vida y Tecnología', 'Mtra. Pérez Reyes Lorena Guadalupe Lebeo', 0),
    createData('Desarrollo Empresarial', 'Mtro. Jiménez González Juan', 0),
  ],
  // Más datos para otras tablas
];

const periods = [
  '22231',
  '22232',
  '22233',
  '23241',
  '23242',
  '23243',
  '24251',
];

export default function App() {
  const [selectedTable, setSelectedTable] = useState(tableOptions[0]);
  const [showCredits, setShowCredits] = useState(false);

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleCreditsChange = (event) => {
    setShowCredits(event.target.checked);
  };

  const totalCreditos = 314;
  const completedCreditos = 216;
  const porcentajeCreditos = ((completedCreditos / totalCreditos) * 100).toFixed(2);
  const promedioTotal = (
    tableData
      .flat()
      .filter((row) => row.final > 0)  // Filtra las materias con calificaciones mayores a 0
      .reduce((sum, row) => sum + row.final, 0) /
    tableData
      .flat()
      .filter((row) => row.final > 0).length  // Calcula el número de materias con calificación mayor a 0
  ).toFixed(2);
  

  return (
    <div style={{ padding: '20px' }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={showCredits}
            onChange={handleCreditsChange}
            color="primary"
          />
        }
        label="Resumen"
        style={{ marginBottom: '20px' }}
      />

      {showCredits && (
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" style={{ color: 'black' }}>
            <b>Total de Créditos del Plan de Estudios:</b> <b>{totalCreditos}</b>
          </Typography>
          <Typography variant="h6" style={{ color: 'black' }}>
            <b>Total de Créditos Completados:</b> <b>{completedCreditos}</b>
          </Typography>
          <Typography variant="h6" style={{ color: 'black' }}>
            <b>Porcentaje de Créditos Completados:</b> <b>{porcentajeCreditos}%</b>
          </Typography>
          <Typography variant="h6" style={{ color: 'black' }}>
            <b>Promedio Total:</b> <b>{promedioTotal}</b>
          </Typography>
        </div>
      )}

      <FormControl variant="outlined" style={{ marginBottom: '20px', minWidth: 200 }}>
        <InputLabel id="table-select-label">Selecciona una tabla</InputLabel>
        <Select
          labelId="table-select-label"
          value={selectedTable}
          onChange={handleTableChange}
          label="Selecciona una tabla"
        >
          {tableOptions.map((tableOption) => (
            <MenuItem key={tableOption} value={tableOption}>
              {tableOption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {tableOptions.includes(selectedTable) && (
        <div
          style={{
            marginBottom: '40px',
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h6"
            style={{ color: 'black', marginBottom: '10px' }}
          >
            Periodo: {periods[tableOptions.indexOf(selectedTable)]}
          </Typography>
          <Typography
            variant="h6"
            style={{ color: 'black', marginBottom: '20px' }}
          >
            Cuatrimestre: {selectedTable}
          </Typography>
          <TableContainer component={Paper} style={{ backgroundColor: '#ffffff' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: '#1976d2' }}>
                  <TableCell style={{ color: '#ffffff' }}>Materia</TableCell>
                  <TableCell style={{ color: '#ffffff' }}>Profesor</TableCell>
                  <TableCell style={{ color: '#ffffff' }} align="right">Final</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData[tableOptions.indexOf(selectedTable)]?.map((row) => (
                  <TableRow key={row.materia}>
                    <TableCell component="th" scope="row">
                      {row.materia}
                    </TableCell>
                    <TableCell>{row.profesor}</TableCell>
                    <TableCell align="right">{row.final}</TableCell>
                  </TableRow>
                ))}
                <TableRow style={{ backgroundColor: '#e3f2fd' }}>
                  <TableCell colSpan={2}><b>Promedio</b></TableCell>
                  <TableCell align="right"><b>{(
                      tableData[tableOptions.indexOf(selectedTable)].reduce(
                        (sum, row) => sum + row.final,
                        0
                      ) /
                      tableData[tableOptions.indexOf(selectedTable)].length
                    ).toFixed(2)}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}
