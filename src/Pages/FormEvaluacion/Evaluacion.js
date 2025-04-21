import React, { useState } from 'react';
import './FormularioEva.css';

const FormularioEva = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    matricula: '',
    materia: '',
    calidadCurso: '',
    claridadProfesor: '',
    participacionProfesor: '',
    materialApoyo: '',
    ritmoClases: '',
    organizacionCurso: '',
    recomendacion: '',
    interaccion: '', // Agregado
    cumplimientoHorario: '', // Agregado
    retroalimentacion: '', // Agregado
    examenes: '', // Agregado
    usoTecnologia: '', // Agregado
    comentarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `Evaluación del curso:
Nombre: ${formData.nombre}
Matrícula: ${formData.matricula}
Materia: ${formData.materia}
Calidad del Curso: ${formData.calidadCurso}
Claridad del Profesor: ${formData.claridadProfesor}
Participación del Profesor: ${formData.participacionProfesor}
Material de Apoyo: ${formData.materialApoyo}
Ritmo de las Clases: ${formData.ritmoClases}
Organización del Curso: ${formData.organizacionCurso}
Recomendación: ${formData.recomendacion}
Interacción: ${formData.interaccion}
Cumplimiento del Horario: ${formData.cumplimientoHorario}
Retroalimentación: ${formData.retroalimentacion}
Dificultad de los Exámenes: ${formData.examenes}
Uso de Tecnología: ${formData.usoTecnologia}
Comentarios adicionales: ${formData.comentarios}`;

    const phoneNumber = "5574704433";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="form-container evaluacion">
      <h2 className='Form'>Formulario de Evaluaciones</h2>
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
          <label htmlFor="materia">Materia:</label>
          <select
            id="materia"
            name="materia"
            value={formData.materia}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una materia</option>
            <option value="matematicas">Matemáticas</option>
            <option value="fisica">Física</option>
            <option value="quimica">Química</option>
            <option value="historia">Historia</option>
            <option value="ingles">Inglés</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="calidadCurso">¿Cómo calificarías la calidad del contenido del curso?</label>
          <select
            id="calidadCurso"
            name="calidadCurso"
            value={formData.calidadCurso}
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
          <label htmlFor="claridadProfesor">¿El profesor explicó los temas de manera clara y comprensible?</label>
          <select
            id="claridadProfesor"
            name="claridadProfesor"
            value={formData.claridadProfesor}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="algunas_veces">Algunas veces</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="participacionProfesor">¿El profesor fomentó la participación y resolvió dudas?</label>
          <select
            id="participacionProfesor"
            name="participacionProfesor"
            value={formData.participacionProfesor}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="materialApoyo">¿Qué tan satisfecho estás con el material de apoyo proporcionado?</label>
          <select
            id="materialApoyo"
            name="materialApoyo"
            value={formData.materialApoyo}
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
          <label htmlFor="ritmoClases">¿El ritmo de las clases fue adecuado?</label>
          <select
            id="ritmoClases"
            name="ritmoClases"
            value={formData.ritmoClases}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="muy_rapido">Muy rápido</option>
            <option value="adecuado">Adecuado</option>
            <option value="muy_lento">Muy lento</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="organizacionCurso">¿Cómo calificarías la organización del curso?</label>
          <select
            id="organizacionCurso"
            name="organizacionCurso"
            value={formData.organizacionCurso}
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
          <label htmlFor="recomendacion">¿Recomendarías este curso a otros alumnos?</label>
          <select
            id="recomendacion"
            name="recomendacion"
            value={formData.recomendacion}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="interaccion">¿Cómo evaluarías la interacción entre el profesor y los alumnos?</label>
          <select
            id="interaccion"
            name="interaccion"
            value={formData.interaccion}
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
          <label htmlFor="cumplimientoHorario">¿El profesor cumplió con el horario establecido para las clases?</label>
          <select
            id="cumplimientoHorario"
            name="cumplimientoHorario"
            value={formData.cumplimientoHorario}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="algunas_veces">Algunas veces</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="retroalimentacion">¿Recibiste retroalimentación suficiente sobre tu desempeño?</label>
          <select
            id="retroalimentacion"
            name="retroalimentacion"
            value={formData.retroalimentacion}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="examenes">¿Cómo evaluarías la dificultad de los exámenes?</label>
          <select
            id="examenes"
            name="examenes"
            value={formData.examenes}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="muy_facil">Muy fácil</option>
            <option value="adecuado">Adecuado</option>
            <option value="muy_dificil">Muy difícil</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="usoTecnologia">¿El uso de tecnología en el curso fue efectivo?</label>
          <select
            id="usoTecnologia"
            name="usoTecnologia"
            value={formData.usoTecnologia}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
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

export default FormularioEva;
