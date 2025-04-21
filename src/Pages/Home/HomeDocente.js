import React from 'react';
import { Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const HomeDocente = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <Typography variant="h4" align="center">
        Bienvenido
      </Typography>
      {isAuthenticated && user && (
        <Typography variant="h4" align="center" style={{ marginTop: '8px' }}>
          {user.name || 'Usuario'}
        </Typography>
      )}
    </div>
  );
};

export default HomeDocente;
