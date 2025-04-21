import React, { useState } from 'react';

const DocumentPage = () => {
    const [photo, setPhoto] = useState(null);

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Documentos</h1>

            <div style={{ margin: '20px 0' }}>
                <h2>Circular 2024 Marzo</h2>
                <p>Este es un documento informativo sobre las nuevas políticas implementadas en marzo de 2024. A continuación se proporciona un resumen y un espacio para cargar una imagen relacionada.</p>
            </div>

            {/* Recuadro para imagen */}
            <div
                style={{
                    border: '2px solid #ddd',
                    padding: '20px',
                    textAlign: 'center',
                    marginTop: '20px',
                    position: 'relative',
                    minHeight: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f9f9f9'
                }}
            >
                {photo ? (
                    <img src={photo} alt="Uploaded" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                ) : (
                    <span style={{ color: '#999' }}>Cargar imagen aquí</span>
                )}

                {/* Input para cargar foto */}
                <input
                    type="file"
                    onChange={handlePhotoUpload}
                    style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        opacity: 0,
                    }}
                />
            </div>
        </div>
    );
};

export default DocumentPage;
