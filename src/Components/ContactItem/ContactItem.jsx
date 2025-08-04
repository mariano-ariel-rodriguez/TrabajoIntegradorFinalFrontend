import React from 'react';
import { Link } from 'react-router';
import './ContactItem.css';

const ContactItem = ({ contact }) => {
    // Obtener el último mensaje para mostrarlo
    let lastMessage;
    if (contact.messages && contact.messages.length > 0) {
        const totalMessages = contact.messages.length;    
        const lastIndex = totalMessages - 1;              
        lastMessage = contact.messages[lastIndex].texto;  
    } else {
        lastMessage = contact.description;
    }

    // Determinar la clase CSS del indicador de estado
    let statusClass;
    if (contact.connectionStatus === 'online') {
        statusClass = 'status-online';
    } else {
        statusClass = 'status-offline';
    }

    return (
        <Link to={`/contact/${contact.id}/messages`} className="contact-item">
            <img 
                src={contact.avatar} 
                alt={contact.name} 
                className="contact-avatar"
            />
            <div className="contact-info">
                <div className="contact-header">
                    <h2 className="contact-name">{contact.name}</h2>
                    <span className="contact-time">{contact.lastConnection}</span>
                </div>
                <div className="contact-details">
                    <span className="contact-last-message">{lastMessage}</span>
                    <div className="contact-status">
                        <div className={`status-indicator ${statusClass}`}></div>
                        <span className="status-text">{contact.connectionStatus}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ContactItem