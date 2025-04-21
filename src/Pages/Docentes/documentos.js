import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import './documentos.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// Documento PDF simulado
const SamplePdfDocument = ({ month }) => (
  <Document>
    <Page size="A4" style={{ padding: 30 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Reporte del mes de {month}</Text>
      <Text>Este es un ejemplo de documento PDF generado para el mes de {month}.</Text>
    </Page>
  </Document>
);

const DocumentCards = () => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

  return (
    <div className="cards-container">
      <Grid container spacing={3} justifyContent="center">
        {months.map((month, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="card-circle" elevation={4}>
              <CardContent className="card-content">
                <Typography variant="h6" align="center">
                  Documento de {month}
                </Typography>
                <PDFDownloadLink
                  document={<SamplePdfDocument month={month} />}
                  fileName={`Reporte_${month}.pdf`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                    fullWidth
                  >
                    Descargar PDF
                  </Button>
                </PDFDownloadLink>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DocumentCards;
