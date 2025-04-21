# Infinitix CRM

Infinitix es una aplicación CRM construida con React y Auth0 para la autenticación. Este proyecto está organizado con varios componentes y páginas, proporcionando una experiencia de usuario fluida para gestionar clientes, facturas y paneles de control.

### Tabla de Contenidos

- [Infinitix CRM](#infinitix-crm)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Instalación](#instalación)
  - [Scripts Disponibles](#scripts-disponibles)
  - [Plugins y Herramientas](#plugins-y-herramientas)

### Estructura del Proyecto
```bash
infinitix/
├── public/
├── src/
│ ├── components/
│ │ ├── Login/
│ │ │ ├── Login.js
│ │ ├── Logout/
│ │ │ ├── Logout.js
│ │ ├── Profile/
│ │ │ ├── Profile.js
│ │ ├── Sidebar/
│ │ │ ├── Sidebar.js
│ │ ├── Topbar/
│ │ │ ├── Topbar.js
│ ├── img/
│ │ ├── background.png
│ ├── pages/
│ │ ├── Clientes/
│ │ │ ├── Clientes.js
│ │ ├── Dashboard/
│ │ │ ├── Dashboard.js
│ │ ├── Factura/
│ │ │ ├── Factura.js
│ ├── App.js
│ ├── App.css
├── package.json
```
### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/rafbd/infi_crm.git
2. Navega al directorio del proyecto:
    ```bash
    cd infi_crm
3. Instala las dependencias:
    ```bash
    npm install
4. Inicia el servidor de desarrollo:
    ```bash
    npm start

###### Esto ejecutará la aplicación en modo desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

### Autenticación:
La aplicación utiliza Auth0 para la autenticación. Inicialmente, verás un botón de inicio de sesión que te redirigirá a la página de inicio de sesión de Auth0.
Una vez autenticado, serás redirigido de vuelta a la aplicación donde podrás acceder a varias funciones como la barra superior y la barra lateral para navegación.

### Navegación:
**Topbar:** Contiene opciones para ver el perfil del usuario logueado, notificaciones, mensajes y configuraciones. También tiene un botón de cierre de sesión.
**Sidebar:** Proporciona navegación a diferentes páginas como Dashboard, Clientes y Factura. Al hacer clic en estas opciones se actualizará el área central de visualización en consecuencia.

#### Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:
  ```
  npm start
  ```
Ejecuta la aplicación en modo desarrollo.
Abre http://localhost:3000 para verla en tu navegador. La página se recargará cuando hagas cambios.
También puedes ver cualquier error en la consola.

Lanza el corredor de pruebas en modo interactivo.
Consulta la sección sobre ejecutar pruebas para más información.
  ```
  npm test
  ```

Construye la aplicación para producción en la carpeta build.
Agrupa correctamente React en modo de producción y optimiza la construcción para obtener el mejor rendimiento. La construcción está minificada y los nombres de archivo incluyen los hashes.
¡Tu aplicación está lista para ser desplegada!
  ```
  npm run build
  ```

Nota: esta es una operación unidireccional. Una vez que eject, no puedes volver atrás!
Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes eject en cualquier momento. Este comando eliminará la única dependencia de construcción de tu proyecto.
  ```
  npm run eject
  ```
Falla al minificar
Consulta la sección sobre solución de problemas para más información.
  ```
  npm run build 
  ```

### Plugins y Herramientas
Este proyecto utiliza los siguientes plugins y herramientas:

**React:** Una biblioteca de JavaScript para construir interfaces de usuario.
**Auth0:** Servicio de autenticación y autorización.
**PrimeReact:** Una colección de componentes de UI para React.
**React Router:** Librería para el enrutamiento en React.
**Tremor:** Biblioteca para visualización de datos.
**CSS:** Para el estilo de la aplicación.

Para instalar estos plugins, **asegúrate de que las siguientes dependencias están en tu archivo package.json:**
  ```
  {
    "dependencies": {
      "@auth0/auth0-react": "^1.8.0",
      "primereact": "^6.5.1",
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "react-router-dom": "^5.2.0",
      "@tremor/react": "^2.0.0"
    }
  }
  ```
