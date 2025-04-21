const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 5000;

// Configurar CORS para permitir solicitudes desde el cliente React
// Puedes usar '*' para permitir todas las solicitudes durante el desarrollo, o especificar el origen exacto.
app.use(cors({ origin: 'http://localhost:3000' }));

// Configurar body-parser para poder recibir datos JSON en las solicitudes
app.use(express.json());

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'escuela',
});

// Conectar a la base de datos MySQL
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    process.exit(1);  // Detener el servidor si no puede conectarse a la base de datos
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// Endpoint para validar el usuario con Auth0 y el rol seleccionado
app.post('/validate-role', (req, res) => {
  const { username, role } = req.body; // Obtenemos username y role desde el cuerpo de la solicitud

  console.log('Datos recibidos:', req.body); // Verifica los datos que recibes

  // Validación básica
  if (!username || !role) {
    return res.status(400).json({ message: 'El correo y el rol son necesarios' });
  }

  // Validación del rol
  const roles = ['alumno', 'docente'];
  if (!roles.includes(role)) {
    return res.status(400).json({ message: 'Rol inválido' });
  }

  let query = '';
  if (role === 'alumno') {
    query = 'SELECT * FROM alumnos WHERE email = ?'; // Tabla alumnos si el rol es "alumno"
  } else if (role === 'docente') {
    query = 'SELECT * FROM docentes WHERE email = ?'; // Tabla docentes si el rol es "docente"
  }

  // Ejecutamos la consulta en la base de datos
  db.query(query, [username], (err, result) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    console.log('Resultado de la consulta:', result); // Verifica si hay datos

    if (result.length === 0) {
      return res.status(404).json({ message: `Usuario con rol '${role}' no encontrado` });
    }

    // Si se encuentra al usuario en la base de datos
    return res.status(200).json({ message: 'Usuario verificado', userData: result[0] });
  });
});

// Agregar ruta para comprobar si el servidor está funcionando correctamente
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando');
});

// Iniciar el servidor Express
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
