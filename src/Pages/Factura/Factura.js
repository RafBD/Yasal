import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './Factura.css';

export default function Factura() {
  const [facturas, setFacturas] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API para obtener los datos de las facturas
    // Por ahora, usaremos datos ficticios
    const datosFacturas = [
      { id: 1, numero: 'F001', cliente: 'Juan Pérez', fecha: '2023-01-01', monto: 500, estado: 'Pagada' },
      { id: 2, numero: 'F002', cliente: 'María García', fecha: '2023-02-15', monto: 1500, estado: 'Pendiente' },
      { id: 3, numero: 'F003', cliente: 'Pedro Jiménez', fecha: '2023-03-20', monto: 750, estado: 'Vencida' },
      { id: 4, numero: 'F004', cliente: 'Ana López', fecha: '2023-04-10', monto: 1200, estado: 'Pagada' },
    ];
    setFacturas(datosFacturas);
  }, []);

  const header = (
    <div className="table-header">
      <div className="p-inputgroup">
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar facturas..." />
        <Button icon="pi pi-search" />
      </div>
    </div>
  );

  return (
    <div className="facturas">
      <h2 className="titulof">Facturas</h2>
      <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
      <div className="card">
        <DataTable
          value={facturas}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 20]}
          className="p-datatable-customers"
          globalFilter={globalFilter}
          header={header}
          responsiveLayout="scroll"
        >
          <Column field="numero" header="Número" sortable></Column>
          <Column field="cliente" header="Cliente" sortable></Column>
          <Column field="fecha" header="Fecha" sortable></Column>
          <Column field="monto" header="Monto ($)" sortable></Column>
          <Column field="estado" header="Estado" sortable></Column>
          <Column
            body={(rowData) => (
            <Button icon="pi pi-pencil" className="custom-icon-button" />
            )}
            header="Acciones"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
