import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { RoleProvider } from './Components/Login/Role';  // Asegúrate de importar RoleProvider
import './index.css';
import '@tremor/react/dist/esm/tremor.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1ndc6bcu12lqf3ak.us.auth0.com"
      clientId="S4HlMXczLOiIQNBwac0T3bhAL95DlUbP"
      authorizationParams={{ redirect_uri: window.location.origin }}>
      {/* Asegúrate de envolver la aplicación con RoleProvider */}
      <RoleProvider>  
        <App />
      </RoleProvider>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
