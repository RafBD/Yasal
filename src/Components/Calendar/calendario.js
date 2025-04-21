import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale, locale } from 'primereact/api';
import 'primeflex/primeflex.css';
import './calendario.css';

addLocale('es', {
  firstDayOfWeek: 1,
  dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  dayNamesMin: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  today: 'Hoy',
});

locale('es');

const Calendario = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Calendario</h2>
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        dateFormat="yy-mm-dd"
        locale="es"
      />
      <div className="event-container">
        <h3>Eventos Importantes</h3>
        <EventTable />
      </div>
    </div>
  );
};

const EventTable = () => {
  const events = [
    { color: '#FFD700', label: 'Día de Exámenes' },
    { color: '#FF6347', label: 'Día de Descanso' },
    { color: '#D3D3D3', label: 'Día Actual' },
  ];

  return (
    <table className="event-table">
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>
              <div className="event-icon" style={{ backgroundColor: event.color }}></div>
            </td>
            <td>{event.label}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendario;