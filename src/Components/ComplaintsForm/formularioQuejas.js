import React, { useState } from 'react';
import './formularioQuejas.css';
import emailjs from 'emailjs-com';

const FormularioQuejasSugerencias = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    matricula: '',
    tipoQueja: '',
    descripcion: '',
    sugerencia: '',
    fecha: '',
    correo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_y5q9zuv';
    const templateId = 'template_kfmrx65';
    const userId = 'rRHKitGFiXMboWjoU';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Correo enviado con éxito:', response.status, response.text);
        alert('Tu queja/sugerencia ha sido enviada correctamente.');
      }, (err) => {
        console.error('Error al enviar el correo:', err);
        alert('Hubo un problema al enviar tu queja/sugerencia.');
      });

    setFormData({
      nombre: '',
      matricula: '',
      tipoQueja: '',
      descripcion: '',
      sugerencia: '',
      fecha: '',
      correo: ''
    });
  };

  return (
    <div className="form-container">
      <h2 className='Form'>Formulario de Quejas y Sugerencias</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipoQueja">Tipo de Queja:</label>
          <select
            id="tipoQueja"
            name="tipoQueja"
            value={formData.tipoQueja}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="servicio">Problemas de servicio</option>
            <option value="material">Material de apoyo</option>
            <option value="profesor">Queja sobre el profesor</option>
            <option value="falla">Fallas de la página</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción de la queja:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            rows="4"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="sugerencia">Sugerencias para mejorar:</label>
          <textarea
            id="sugerencia"
            name="sugerencia"
            value={formData.sugerencia}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha de la experiencia:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioQuejasSugerencias;