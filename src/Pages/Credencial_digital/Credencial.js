import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { PDFDownloadLink, Document, Page, Image, Text, View } from '@react-pdf/renderer';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // Importa el ícono de PDF
import './Credencial.css';

const CredencialDigital = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [imageUrl, setImageUrl] = useState('');

  // Si el usuario está autenticado, obtener la imagen
  useEffect(() => {
    if (isAuthenticated && user) {
      setImageUrl(user.picture); // La imagen está en user.picture
    }
  }, [isAuthenticated, user]);

  // Componente PDF con ambas imágenes y texto
  const QrPdfDocument = ({ imageUrl, qrCodeUrl, nombre }) => (
    <Document>
      <Page size="A4" style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Imagen de Auth0 */}
        <Image
          src={imageUrl}
          alt={nombre}
          style={{ width: '150px', height: '150px', borderRadius: 8, marginBottom: 20 }}
        />
        {/* Imagen del código QR */}
        <Image
          src={qrCodeUrl}
          alt="Código QR"
          style={{ width: '150px', height: '150px', marginBottom: 20 }}
        />
        {/* Texto del nombre y leyenda */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
          {nombre}
        </Text>
        <Text style={{ fontSize: 14, textAlign: 'center', color: '#555' }}>
          Esta es tu Credencial Digital
        </Text>
      </Page>
    </Document>
  );

  // Si el usuario no está autenticado o está cargando, mostrar un mensaje
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>No estás autenticado</div>;
  }

  return (
    <div className="qr-container">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card className="qr-card">
            <div
              className="qr-image-container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              {/* Imagen de Auth0 */}
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={user.name}
                  className="qr-image"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    marginBottom: '20px', // Espacio entre las dos imágenes
                  }}
                />
              ) : (
                <div>No se encontró la imagen</div>
              )}

              {/* Imagen del código QR */}
              <img
                src="/assets/qrcode.png"
                alt="Código QR"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'contain',
                }}
              />
            </div>

            <CardContent>
              <Typography variant="h6" className="qr-title" align="center">
                {user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                Esta es tu Credencial Digital
              </Typography>
              <PDFDownloadLink
                document={
                  <QrPdfDocument
                    imageUrl={imageUrl}
                    qrCodeUrl="/assets/qrcode.png"
                    nombre={user.name}
                  />
                }
                fileName={`${user.name}.pdf`}
                className="download-button"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PictureAsPdfIcon />}
                  style={{
                    width: '100%',
                    padding: '12px 0',
                    textAlign: 'center',
                  }}
                >
                  Descargar como PDF
                </Button>
              </PDFDownloadLink>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CredencialDigital;
