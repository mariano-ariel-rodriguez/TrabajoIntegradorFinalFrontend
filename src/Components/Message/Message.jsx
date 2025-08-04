import React, { useState } from 'react'
import './Message.css'

const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {

    const [message_selected, setMessageSelected] = useState(false)

    const handleChangeMessageSelected = (event) => {
        event.preventDefault()
        setMessageSelected(true)
    }

    // Determinar si es mensaje propio o de otro
    let messageClass;
    if (emisor === 'YO') {
        messageClass = 'message-container message-own';
    } else {
        messageClass = 'message-container message-other';
    }

    // Agregar clase si está seleccionado
    let bubbleClass = 'message-bubble';
    if (message_selected) {
        bubbleClass = 'message-bubble message-selected';
    }

    return (
        <div className={messageClass}>
            <div 
                className={bubbleClass}
                onContextMenu={handleChangeMessageSelected}
            >
                <p className="message-text">{texto}</p>
                <div className="message-info">
                    <span className="message-time">{hora}</span>
                    {emisor === 'YO' && (
                        <i className="bi bi-check message-status"></i>
                    )}
                </div>
                
                {message_selected && (
                    <button 
                        className="message-delete-button"
                        onClick={() => {deleteMessageById(id)}}
                    >
                        <i className="bi bi-trash3"></i>
                    </button>
                )}
            </div>
        </div>
    )
}

export default Message