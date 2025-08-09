import React from 'react'
import './EmptyScreen.css'

const EmptyScreen = () => {
    return (
        <div className="empty-screen">
            <div className="empty-screen-content">
                <div className="empty-screen-icon">
                    <img 
                        src="https://static.whatsapp.net/rsrc.php/v4/y6/r/wa669aeJeom.png" 
                        alt="WhatsApp" 
                        className="empty-screen-image"
                    />
                </div>
                <h2 className="empty-screen-title">WhatsApp to the Future</h2>
                <p className="empty-screen-subtitle">
                    Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.
                </p>
                <div className="empty-screen-footer">
                    <i className="bi bi-lock-fill"></i>
                    <span>Tus mensajes personales están cifrados de extremo a extremo</span>
                </div>
            </div>
        </div>
    )
}

export default EmptyScreen