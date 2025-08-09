import React from 'react';
import { Link } from 'react-router-dom';
import './ContactItem.css';

const ContactItem = ({ contact, setChatActive, selectedContactId, setSelectedContactId }) => {
    
    const isSelected = Number(selectedContactId) === Number(contact.id);
    
    let lastMessage;
    if (contact.messages && contact.messages.length > 0) {
        const totalMessages = contact.messages.length;    
        const lastIndex = totalMessages - 1;              
        lastMessage = contact.messages[lastIndex].texto;  
    } else {
        lastMessage = contact.description;
    }

    let statusClass;
    if (contact.connectionStatus === 'online') {
        statusClass = 'status-online';
    } else {
        statusClass = 'status-offline';
    }
    
    let itemClass = 'contact-item';
    if (isSelected) {
        itemClass = 'contact-item selected';
    }

    const handleClick = () => {
        if (setChatActive) {
            setChatActive(true);
        }
        if (setSelectedContactId) {
            setSelectedContactId(contact.id);
        }
    };

    return (
        <Link 
            to={`/contact/${contact.id}/messages`} 
            className={itemClass}
            onClick={handleClick}
        >
            <img 
                src={contact.avatar} 
                alt={contact.name} 
                className="contact-avatar"
            />
            <div className="contact-info">
                <div className="contact-header">
                    <h3 className="contact-name">{contact.name}</h3>
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