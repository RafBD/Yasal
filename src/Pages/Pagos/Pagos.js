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
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Opciones de cuatrimestres
const cuatrimestres = [
  'Cuatrimestre 1', 'Cuatrimestre 2', 'Cuatrimestre 3', 
  'Cuatrimestre 4', 'Cuatrimestre 5', 'Cuatrimestre 6', 
  'Cuatrimestre 7'
];

// Función para crear datos de la tabla
const createData = (descripcion, descuento, importe, abonado, saldo) => {
  return { descripcion, descuento, importe, abonado, saldo };
};

// Datos de los cuatrimestres con pagos (Reinscripción + 3 meses de colegiaturas)
const tableData = [
  // Cuatrimestre 1 (Agosto, Septiembre, Octubre, Noviembre)
  [
    createData('Reinscripción TIN (Agosto)', 1770, 4130, 4130, 0),
    createData('Colegiatura Septiembre TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Octubre TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Noviembre TIN', 1770, 4130, 4130, 0),
  ],
  // Cuatrimestre 2 (Diciembre, Enero, Febrero, Marzo)
  [
    createData('Reinscripción TIN (Diciembre)', 1770, 4130, 4130, 0),
    createData('Colegiatura Enero TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Febrero TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Marzo TIN', 1770, 4130, 4130, 0),
  ],
  // Cuatrimestre 3 (Abril, Mayo, Junio, Julio)
  [
    createData('Reinscripción TIN (Abril)', 1770, 4130, 4130, 0),
    createData('Colegiatura Mayo TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Junio TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Julio TIN', 1770, 4130, 4130, 0),
  ],
  // Cuatrimestre 4 (Agosto, Septiembre, Octubre, Noviembre)
  [
    createData('Reinscripción TIN (Agosto)', 1770, 4130, 4130, 0),
    createData('Colegiatura Septiembre TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Octubre TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Noviembre TIN', 1770, 4130, 4130, 0),
  ],
  // Cuatrimestre 5 (Diciembre, Enero, Febrero, Marzo)
  [
    createData('Reinscripción TIN (Diciembre)', 1770, 4130, 4130, 0),
    createData('Colegiatura Enero TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Febrero TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Marzo TIN', 1770, 4130, 4130, 0),
  ],
  // Cuatrimestre 6 (Abril, Mayo, Junio, Julio)
  [
    createData('Reinscripción TIN (Abril)', 1770, 4130, 4130, 0),
    createData('Colegiatura Mayo TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Junio TIN', 1770, 4130, 4130, 0),
    createData('Colegiatura Julio TIN', 1770, 4130, 4130, 0),
  ],
  // Cuatrimestre 7 (Agosto, Septiembre, Octubre, Noviembre) - No pagado
  [
    createData('Reinscripción TIN (Agosto)', 1770, 4130, 0, 4130),
    createData('Colegiatura Septiembre TIN', 1770, 4130, 0, 4130),
    createData('Colegiatura Octubre TIN', 1770, 4130, 0, 4130),
    createData('Colegiatura Noviembre TIN', 1770, 4130, 0, 4130),
  ],
];

export default function Pagos() {
  const [selectedCuatrimestre, setSelectedCuatrimestre] = useState(cuatrimestres[0]);

  const handleCuatrimestreChange = (event) => {
    setSelectedCuatrimestre(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Página de Pagos
      </Typography>

      {/* Acordeón para los requisitos de la beca */}
      <Accordion style={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><strong>Aviso Importante: Requisitos para no perder la beca</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Ser alumno de la Universidad Simón Bolívar en el programa y nivel en el que se solicita y haber aprobado todas las asignaturas del ciclo previo.</li>
            <li>Que en su familia ningún otro miembro cuente con beca.</li>
            <li>Que el alumno sea mexicano por nacimiento o naturalización.</li>
            <li>Que el alumno entregue debidamente requisitada la solicitud otorgada y a tiempo.</li>
            <li>Haber obtenido en el cuatrimestre inmediato anterior un promedio mínimo de 8 (ocho).</li>
            <li>No haber presentado ningún examen extraordinario.</li>
            <li>Asistir de forma regular y puntual a clases.</li>
            <li>La beca se renueva cada semestre en Servicios Escolares.</li>
            <li>No tener ningún adeudo de colegiatura, material de laboratorio o biblioteca.</li>
            <li>Cubrir el último pago de colegiatura antes de los exámenes finales de cada semestre.</li>
          </ul>
        </AccordionDetails>
      </Accordion>

      {/* Selección de cuatrimestre */}
      <FormControl variant="outlined" style={{ marginBottom: '20px', minWidth: 200 }}>
        <InputLabel id="cuatrimestre-select-label">Selecciona un cuatrimestre</InputLabel>
        <Select
          labelId="cuatrimestre-select-label"
          value={selectedCuatrimestre}
          onChange={handleCuatrimestreChange}
          label="Selecciona un cuatrimestre"
        >
          {cuatrimestres.map((cuatrimestre) => (
            <MenuItem key={cuatrimestre} value={cuatrimestre}>
              {cuatrimestre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Tabla de pagos */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="tabla de pagos">
          <TableHead>
            <TableRow style={{ backgroundColor: '#1976d2' }}>
              <TableCell style={{ color: '#ffffff' }}>Descripción</TableCell>
              <TableCell style={{ color: '#ffffff' }} align="right">Descuento</TableCell>
              <TableCell style={{ color: '#ffffff' }} align="right">Importe</TableCell>
              <TableCell style={{ color: '#ffffff' }} align="right">Abonado</TableCell>
              <TableCell style={{ color: '#ffffff' }} align="right">Saldo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData[cuatrimestres.indexOf(selectedCuatrimestre)]?.map((row) => (
              <TableRow key={row.descripcion}>
                <TableCell component="th" scope="row">{row.descripcion}</TableCell>
                <TableCell align="right">{row.descuento}</TableCell>
                <TableCell align="right">{row.importe}</TableCell>
                <TableCell align="right">{row.abonado}</TableCell>
                <TableCell align="right">{row.saldo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
