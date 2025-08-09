import React from 'react'
import './ContactInfo.css'

const ContactInfo = ({ contact, onClose }) => {
    if (!contact) {
        return null
    }

    let statusText = ''
    let statusClass = ''
    
    if (contact.connectionStatus === 'online') {
        statusText = 'En línea'
        statusClass = 'status-online'
    } else {
        statusText = 'Desconectado'
        statusClass = 'status-offline'
    }

    return (
        <div className="contact-info-panel">
            <div className="contact-info-header">
                <button className="contact-info-close" onClick={onClose}>
                    <i className="bi bi-x-lg"></i>
                </button>
                <h2>Info. del contacto</h2>
            </div>

            <div className="contact-info-content">
                <div className="contact-info-profile">
                    <img 
                        src={contact.avatar} 
                        alt={contact.name}
                        className="contact-info-avatar"
                    />
                    <h3 className="contact-info-name">{contact.name}</h3>
                    <span className={`contact-info-status ${statusClass}`}>
                        {statusText}
                    </span>
                </div>

                <div className="contact-info-section">
                    <p className="contact-info-label">Info.</p>
                    <p className="contact-info-description">{contact.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo