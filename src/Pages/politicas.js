import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PoliticasPrivacidad = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '40px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box style={{ borderBottom: `3px solid #0062AD`, paddingBottom: '10px' }}>
          <Typography variant="h4" style={{ color: '#0062AD', textAlign: 'center', marginBottom: '20px' }}>
            Políticas de Privacidad
          </Typography>
        </Box>

        <Typography variant="body1" style={{ marginTop: '20px', lineHeight: '1.8' }}>
          En [Nombre de la Empresa], valoramos tu privacidad y estamos comprometidos a proteger tu información personal. 
          Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y compartimos tus datos cuando 
          interactúas con nuestros servicios.
        </Typography>

        <Box style={{ marginTop: '30px' }}>
          <Typography variant="h5" style={{ color: '#0062AD', marginBottom: '10px' }}>
            1. Información que recopilamos
          </Typography>
          <Typography variant="body1">
            Recopilamos los siguientes tipos de información:
            <ul>
              <li>Información personal: como nombre, correo electrónico y número de teléfono.</li>
              <li>Datos técnicos: como dirección IP, tipo de dispositivo y navegador.</li>
              <li>Datos de uso: como las páginas visitadas y el tiempo de permanencia en nuestro sitio web.</li>
            </ul>
          </Typography>
        </Box>

        <Box style={{ marginTop: '30px' }}>
          <Typography variant="h5" style={{ color: '#0062AD', marginBottom: '10px' }}>
            2. Uso de tu información
          </Typography>
          <Typography variant="body1">
            Utilizamos tu información para los siguientes fines:
            <ul>
              <li>Proveer y personalizar nuestros servicios.</li>
              <li>Responder a tus consultas y solicitudes.</li>
              <li>Mejorar la experiencia del usuario en nuestro sitio web.</li>
              <li>Cumplir con obligaciones legales.</li>
            </ul>
          </Typography>
        </Box>

        <Box style={{ marginTop: '30px' }}>
          <Typography variant="h5" style={{ color: '#0062AD', marginBottom: '10px' }}>
            3. Compartir tu información
          </Typography>
          <Typography variant="body1">
            No vendemos tu información personal. Podemos compartir tu información con terceros solo en los siguientes casos:
            <ul>
              <li>Con proveedores de servicios que nos ayudan a operar el sitio web.</li>
              <li>Cuando sea requerido por la ley o para proteger nuestros derechos legales.</li>
            </ul>
          </Typography>
        </Box>

        <Box style={{ marginTop: '30px' }}>
          <Typography variant="h5" style={{ color: '#0062AD', marginBottom: '10px' }}>
            4. Protección de tus datos
          </Typography>
          <Typography variant="body1">
            Implementamos medidas técnicas y organizativas para proteger tu información contra accesos no autorizados, 
            pérdida o destrucción.
          </Typography>
        </Box>

        <Box style={{ marginTop: '30px' }}>
          <Typography variant="h5" style={{ color: '#0062AD', marginBottom: '10px' }}>
            5. Tus derechos
          </Typography>
          <Typography variant="body1">
            Tienes derecho a acceder, corregir o eliminar tu información personal. Para ejercer estos derechos, 
            contáctanos a través de [correo electrónico o formulario de contacto].
          </Typography>
        </Box>

        <Box style={{ marginTop: '30px' }}>
          <Typography variant="h5" style={{ color: '#0062AD', marginBottom: '10px' }}>
            6. Cambios a esta Política
          </Typography>
          <Typography variant="body1">
            Podemos actualizar esta Política de Privacidad en cualquier momento. Notificaremos cualquier cambio 
            significativo publicando una nueva versión en esta página.
          </Typography>
        </Box>

        <Box style={{ marginTop: '30px', textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            Última actualización: [Fecha].
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PoliticasPrivacidad;
