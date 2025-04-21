import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import MailOutline from "@mui/icons-material/MailOutline";
import Phone from "@mui/icons-material/Phone";
import Instagram from "@mui/icons-material/Instagram";
import "./Companeros.css";

const Companeros = () => {
  const companerosData = [
    {
      nombre: "Luis David Martínez",
      correo: "luis.martinez.lo@usb.edu.mx",
      telefono: "+123456789",
      instagram: "fzda92",
      foto: "/assets/luisdavid.webp",
      artistaFavorito: "Jose Torres",
    },
    {
      nombre: "Rodrigo Valdez Rivera",
      correo: "rodrigo.valdez.ri@usb.edu.com",
      telefono: "+987654321",
      instagram: "rodrigo_valdez03",
      foto: "/assets/rodrigovaldez.webp",
    },
    {
      nombre: "Adrian Ivan Torres Ortega",
      correo: "adrian.torres.or@usb.edu.mx",
      telefono: "+111222333",
      instagram: "usbMexico",
      foto: "/assets/adriantorres.jpg",
    },
    {
      nombre: "Sofia Hernandez Sanchez",
      correo: "sofia.hernandez.sa@usb.edu.mx",
      telefono: "+444555666",
      instagram: "usbMexico",
      foto: "/assets/sofiahernandez.webp",
    },
    {
      nombre: "Juan Bernardo Sánchez Salazar",
      correo: "juan.sanchez.sa@usb.edu.mx",
      telefono: "+777888999",
      instagram: "usbMexico",
      foto: "/assets/juansanchez.png",
    },
    {
      nombre: "Rafael Benitez Diaz",
      correo: "rafael.benitez.di@usb.edu.mx",
      telefono: "+777888999",
      instagram: "usbMexico",
      foto: "/assets/rafaelbenitez.webp",
    },
  ];

  return (
    <div className="companeros-container">
      <Grid container spacing={4}>
        {companerosData.map((companero) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={companero.correo}>
            <Card className="companero-card-custom">
              <div className="companero-left">
                <div className="companero-foto-container">
                  <img
                    src={companero.foto}
                    alt={companero.nombre}
                    className="companero-foto"
                  />
                </div>
                <Typography variant="h6" className="companero-nombre">
                  {companero.nombre}
                </Typography>
              </div>
              <CardContent className="companero-right">
                <Typography variant="body2" color="textSecondary">
                  <MailOutline /> {companero.correo}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <Phone /> {companero.telefono}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <a
                    href={`https://instagram.com/${companero.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <Instagram /> {`@${companero.instagram}`}
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Companeros;
