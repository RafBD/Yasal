import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from 'chart.js';
import { useTable } from 'react-table';
import './homealumno.css'; // Asegúrate de importar tu archivo CSS

ChartJS.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const materias = [
  {
    grupo: '231061178',
    nombre: '(601) Desarrollo De Aplicaciones para Dispositivos Móviles',
    parciales: [5.0],
    asistencia: '100.0 %',
    examen: 6,
  },
  {
    grupo: '231061176',
    nombre: '(602) Bases De Conocimiento',
    parciales: [10.0],
    asistencia: '100.0 %',
    examen: 9,
  },
  {
    grupo: '231061177',
    nombre: '(603) Conmutación y Redes Inalámbricas',
    parciales: [10.0],
    asistencia: '100.0 %',
    examen: 10,
  },
  {
    grupo: '231061180',
    nombre: '(604) Fundamentos Legales en las TI',
    parciales: [9.9],
    asistencia: '100.0 %',
    examen: 10,
  },
  {
    grupo: '231061175',
    nombre: '(605) Administración De las Finanzas en las TI',
    parciales: [9.4,],
    asistencia: '100.0 %',
    examen: 9,
  },
  {
    grupo: '231061181',
    nombre: '(606) Sistemas CRM',
    parciales: [10.0],
    asistencia: '100.0 %',
    examen: 10,
  },
  {
    grupo: '231061179',
    nombre: '(607) Ética en el Ejercicio Profesional',
    parciales: [9.1,],
    asistencia: '92.8 %',
    examen: 10,
  },
];

const calcularPromedio = (materia) => {
  const { parciales, examen } = materia;
  if (parciales.length === 0) return null;

  const sumaParciales = parciales.reduce((a, b) => a + b, 0);
  const promedioParcial = sumaParciales / parciales.length;

  return ((promedioParcial + examen) / 2).toFixed(2);
};

const promedioFinalCuatrimestre = () => {
  const sumaPromedios = materias.reduce((sum, materia) => sum + parseFloat(calcularPromedio(materia)), 0);
  return (sumaPromedios / materias.length).toFixed(2);
};

function App() {
  const columns = React.useMemo(
    () => [
      { Header: 'Grupo', accessor: 'grupo' },
      { Header: 'Materia', accessor: 'nombre' },
      { Header: 'Parciales', accessor: 'parciales' },
      { Header: 'Asistencia', accessor: 'asistencia' },
      { Header: 'Examen', accessor: 'examen' },
      { Header: 'Promedio', accessor: 'promedio' },
    ],
    []
  );

  const data = React.useMemo(
    () =>
      materias.map((materia) => ({
        grupo: materia.grupo,
        nombre: materia.nombre,
        parciales: materia.parciales.join(', '),
        asistencia: materia.asistencia,
        examen: materia.examen,
        promedio: calcularPromedio(materia),
      })),
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Resumen Académico</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6} className="grafico-container">
          <Bar
            data={{
              labels: materias.map((_, index) => `Materia ${index + 1}`),
              datasets: [
                {
                  label: 'Promedio Final',
                  data: materias.map((materia) => calcularPromedio(materia)),
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
              ],
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} className="grafico-container">
          <Line
            data={{
              labels: ['Cuatri 1', 'Cuatri 2', 'Cuatri 3', 'Cuatri 4', 'Cuatri  5', 'Cuatri 6', 'Cuatri 7'],
              datasets: [
                {
                  label: 'Promedio Parcial',
                  data: [
                    ...materias.map((materia) => materia.parciales.reduce((a, b) => a + b, 0) / materia.parciales.length),
                    parseFloat(promedioFinalCuatrimestre()),
                  ],
                  borderColor: 'rgba(153, 102, 255, 1)',
                  borderWidth: 2,
                  fill: false,
                },
              ],
            }}
          />
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>Calificaciones Cuatrimestre 7</Typography>
        <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} style={{ border: '1px solid #ddd', padding: '8px' }}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>

      <Box mt={2}>
        <Typography variant="h6">Promedio Final del Cuatrimestre: {promedioFinalCuatrimestre()}</Typography>
      </Box>
    </Box>
  );
}

export default App;
