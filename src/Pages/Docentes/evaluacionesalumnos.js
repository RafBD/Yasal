import React, { useState } from 'react';

// Datos de grupos y alumnos (como en el segundo código)
const groups = [
  { id: 1, name: "Lógica II" },
  { id: 2, name: "Matemáticas Aplicadas" },
  { id: 3, name: "Inteligencia Artificial" },
];

const students = {
  "Lógica II": [
    { id: 1, nombre: "Luis David Martínez", parcial1: 8.5, parcial2: 7.0, parcial3: 9.2 },
    { id: 2, nombre: "Rodrigo Valdez Rivera", parcial1: 6.5, parcial2: 8.0, parcial3: 7.5 },
  ],
  "Matemáticas Aplicadas": [
    { id: 3, nombre: "Adrian Ivan Torres Ortega", parcial1: 7.0, parcial2: 8.0, parcial3: 7.5 },
    { id: 4, nombre: "Sofia Hernandez Sanchez", parcial1: 6.5, parcial2: 7.5, parcial3: 8.0 },
  ],
  "Inteligencia Artificial": [
    { id: 5, nombre: "Juan Bernardo Sánchez Salazar", parcial1: 9.0, parcial2: 8.5, parcial3: 9.2 },
    { id: 6, nombre: "Rafael Benitez Diaz", parcial1: 7.5, parcial2: 6.5, parcial3: 8.0 },
  ],
};

const MateriaPage = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [materia, setMateria] = useState({ nombre: "Grupo A" });  // Solo el grupo será dinámico
  const [editMode, setEditMode] = useState(false);
  const [editableAlumnos, setEditableAlumnos] = useState([]);

  // Cambiar el grupo seleccionado
  const handleGroupChange = (event) => {
    const groupName = event.target.value;
    setSelectedGroup(groupName);
    setEditableAlumnos(students[groupName] || []);
  };

  // Activar/desactivar el modo de edición
  const handleEditClick = () => {
    if (editMode) {
      setMateria({ ...materia, alumnos: editableAlumnos });
    }
    setEditMode(!editMode);
  };

  // Calcular el promedio
  const calcularPromedio = (parcial1, parcial2, parcial3) => {
    const promedio = (parcial1 + parcial2) * 0.25 + parcial3 * 0.50;
    return promedio.toFixed(1); // Redondear a una decimal
  };

  // Manejar el cambio de valor de una calificación
  const handleChange = (index, field, value) => {
    const updatedAlumnos = [...editableAlumnos];
    updatedAlumnos[index][field] = parseFloat(value);
    setEditableAlumnos(updatedAlumnos);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Selector de grupo */}
      <h2>Calificaciones</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>Selecciona un grupo:</label>
        <select onChange={handleGroupChange} value={selectedGroup} style={{ marginLeft: '10px', padding: '5px' }}>
          <option value="" disabled>Selecciona un grupo</option>
          {groups.map((group) => (
            <option key={group.id} value={group.name}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      {selectedGroup && (
        <>
          <h3>{selectedGroup}</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Alumno</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Parcial 1</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Parcial 2</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Parcial 3</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Promedio</th>
              </tr>
            </thead>
            <tbody>
              {editableAlumnos.map((alumno, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{alumno.nombre}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                    {editMode ? (
                      <input
                        type="number"
                        value={alumno.parcial1}
                        onChange={(e) => handleChange(index, 'parcial1', e.target.value)}
                        step="0.1"
                        style={inputStyle}
                      />
                    ) : (
                      alumno.parcial1.toFixed(1)
                    )}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                    {editMode ? (
                      <input
                        type="number"
                        value={alumno.parcial2}
                        onChange={(e) => handleChange(index, 'parcial2', e.target.value)}
                        step="0.1"
                        style={inputStyle}
                      />
                    ) : (
                      alumno.parcial2.toFixed(1)
                    )}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                    {editMode ? (
                      <input
                        type="number"
                        value={alumno.parcial3}
                        onChange={(e) => handleChange(index, 'parcial3', e.target.value)}
                        step="0.1"
                        style={inputStyle}
                      />
                    ) : (
                      alumno.parcial3.toFixed(1)
                    )}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                    {calcularPromedio(alumno.parcial1, alumno.parcial2, alumno.parcial3)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={handleEditClick} style={editButtonStyle}>
            {editMode ? 'Guardar cambios' : 'Editar calificaciones'}
          </button>
        </>
      )}
    </div>
  );
};

// Estilos
const inputStyle = {
  width: '60px',
  padding: '4px',
  textAlign: 'center',
  border: '1px solid #ddd',
};

const editButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  borderRadius: '4px',
  margin: '10px 0',
  width: 'auto',
  display: 'inline-block',
  textAlign: 'center',
};

export default MateriaPage;
