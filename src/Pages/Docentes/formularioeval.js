import React, { useState } from 'react';
import './formularioeval.css';

const FormularioServicios = () => {
  const [formData, setFormData] = useState({
    nombreDocente: '',
    asignatura: '',
    infraestructura: '',
    apoyoAdministrativo: '',
    accesoMateriales: '',
    capacitacion: '',
    comunicacion: '',
    tecnologia: '',
    satisfaccionGeneral: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `Formulario de Evaluación de Servicios:
Nombre del Docente: ${formData.nombreDocente}
Asignatura: ${formData.asignatura}
Calidad de la Infraestructura: ${formData.infraestructura}
Apoyo Administrativo: ${formData.apoyoAdministrativo}
Acceso a Materiales Didácticos: ${formData.accesoMateriales}
Capacitación Docente: ${formData.capacitacion}
Comunicación con la Dirección: ${formData.comunicacion}
Uso y Acceso a Tecnología: ${formData.tecnologia}
Satisfacción General: ${formData.satisfaccionGeneral}
Comentarios adicionales: ${formData.comentarios}`;

    const phoneNumber = "5574704433";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="form-container servicios">
      <h2 className="form-header">Formulario de Servicios para Docentes</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombreDocente">Nombre del Docente:</label>
          <input
            type="text"
            id="nombreDocente"
            name="nombreDocente"
            value={formData.nombreDocente}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="asignatura">Asignatura:</label>
          <input
            type="text"
            id="asignatura"
            name="asignatura"
            value={formData.asignatura}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="infraestructura">Calidad de la Infraestructura (Aulas, equipos):</label>
          <select
            id="infraestructura"
            name="infraestructura"
            value={formData.infraestructura}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="excelente">Excelente</option>
            <option value="buena">Buena</option>
            <option value="regular">Regular</option>
            <option value="mala">Mala</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="apoyoAdministrativo">¿Cómo evaluarías el apoyo administrativo recibido?</label>
          <select
            id="apoyoAdministrativo"
            name="apoyoAdministrativo"
            value={formData.apoyoAdministrativo}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="excelente">Excelente</option>
            <option value="bueno">Bueno</option>
            <option value="regular">Regular</option>
            <option value="malo">Malo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="accesoMateriales">¿El acceso a materiales didácticos es adecuado?</label>
          <select
            id="accesoMateriales"
            name="accesoMateriales"
            value={formData.accesoMateriales}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="parcialmente">Parcialmente</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacitacion">¿Consideras que recibes capacitación adecuada?</label>
          <select
            id="capacitacion"
            name="capacitacion"
            value={formData.capacitacion}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comunicacion">¿La comunicación con la dirección es efectiva?</label>
          <select
            id="comunicacion"
            name="comunicacion"
            value={formData.comunicacion}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="parcialmente">Parcialmente</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tecnologia">¿El uso de tecnología en la escuela es satisfactorio?</label>
          <select
            id="tecnologia"
            name="tecnologia"
            value={formData.tecnologia}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="parcialmente">Parcialmente</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="satisfaccionGeneral">¿Cómo calificarías tu satisfacción general con los servicios?</label>
          <select
            id="satisfaccionGeneral"
            name="satisfaccionGeneral"
            value={formData.satisfaccionGeneral}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="muy_satisfecho">Muy satisfecho</option>
            <option value="satisfecho">Satisfecho</option>
            <option value="insatisfecho">Insatisfecho</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comentarios">Comentarios adicionales:</label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioServicios;
