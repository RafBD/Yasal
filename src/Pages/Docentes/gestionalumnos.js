import React, { useState } from "react";
import { Card, Typography, Select, MenuItem, Button, Grid, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import DataTable from "react-data-table-component";
import "./gestionalumnos.css";

const Companeros = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [attendanceMode, setAttendanceMode] = useState(false);
  const [attendanceData, setAttendanceData] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split("T")[0]);
  const [records, setRecords] = useState({}); // Almacena todas las asistencias por fecha y grupo

  const groups = [
    { id: 1, name: "Logica II" },
    { id: 2, name: "Matematicas Aplicadas" },
    { id: 3, name: "Inteligencia Artificial" },
  ];

  const students = {
    "Logica II": [
      { id: 1, nombre: "Luis David Martínez                  ", correo: "luis.martinez.lo@usb.edu.mx", foto: "/assets/luisdavid.webp" },
      { id: 2, nombre: "Rodrigo Valdez Rivera                 ", correo: "rodrigo.valdez.ri@usb.edu.com", foto: "/assets/rodrigovaldez.webp" },
    ],
    "Matematicas Aplicadas": [
      { id: 3, nombre: "Adrian Ivan Torres Ortega             ", correo: "adrian.torres.or@usb.edu.mx", foto: "/assets/adriantorres.jpg" },
      { id: 4, nombre: "Sofia Hernandez Sanchez               ", correo: "sofia.hernandez.sa@usb.edu.mx", foto: "/assets/sofiahernandez.webp" },
    ],
    "Inteligencia Artificial": [
      { id: 5, nombre: "Juan Bernardo Sánchez Salazar            ", correo: "juan.sanchez.sa@usb.edu.mx", foto: "/assets/juansanchez.png" },
      { id: 6, nombre: "Rafael Benitez Diaz                       ", correo: "rafael.benitez.di@usb.edu.mx", foto: "/assets/rafaelbenitez.webp" },
    ],
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    loadAttendance(currentDate, event.target.value); // Carga asistencias al cambiar grupo
  };

  const handleAttendanceChange = (id) => {
    setAttendanceData((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAttendanceMode = () => {
    if (attendanceMode) {
      // Guardar los datos actuales en registros
      setRecords((prev) => ({
        ...prev,
        [currentDate]: {
          ...prev[currentDate],
          [selectedGroup]: attendanceData,
        },
      }));
    }
    setAttendanceMode(!attendanceMode);
  };

  const loadAttendance = (date, group) => {
    const groupAttendance = records[date]?.[group] || {};
    setAttendanceData(groupAttendance);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setCurrentDate(newDate);
    if (selectedGroup) {
      loadAttendance(newDate, selectedGroup); // Carga asistencias al cambiar fecha
    }
  };

  const columns = [
    {
      name: "Foto",
      selector: (row) => (
        <div className="foto-container">
          <img src={row.foto} alt={row.nombre} className="companero-foto" />
        </div>
      ),
      width: "100px", // Definir el tamaño fijo para la celda de la imagen
      style: {
        padding: "0",
        textAlign: "center",  // Centra la imagen horizontalmente
      },
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
      wrap: true,
      style: { wordWrap: 'break-word', whiteSpace: 'normal' },
    },
    {
      name: "Correo",
      selector: (row) => row.correo,
      wrap: true,
      style: { wordWrap: 'break-word', whiteSpace: 'normal' },
    },
    {
      name: "Asistencia",
      cell: (row) => (
        <Checkbox
          checked={!!attendanceData[row.id]}
          onChange={() => handleAttendanceChange(row.id)}
          disabled={!attendanceMode}
        />
      ),
    },
  ];
  

  return (
    <div className="companeros-container">
      <Grid container spacing={2} alignItems="center" style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={4}>
          <Select
            value={selectedGroup}
            onChange={handleGroupChange}
            displayEmpty
            fullWidth
            style={{ backgroundColor: "#fff" }}
          >
            <MenuItem value="" disabled>
              Selecciona un grupo
            </MenuItem>
            {groups.map((group) => (
              <MenuItem key={group.id} value={group.name}>
                {group.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="date"
            value={currentDate}
            onChange={handleDateChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleAttendanceMode}
            disabled={!selectedGroup}
            className="pasar-lista-btn"  // Aplica la clase aquí
            
          >
            {attendanceMode ? "Guardar Lista" : "Pasar Lista"}
          </Button>
        </Grid>
      </Grid>

      {selectedGroup && (
        <DataTable
          columns={columns}
          data={students[selectedGroup] || []}
          pagination
          highlightOnHover
          striped
          responsive={true} // Añadido para hacer la tabla más responsiva
        />
      )}
    </div>
  );
};

export default Companeros;
