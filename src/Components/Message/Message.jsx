import React, { useState } from 'react'
import './Message.css'

const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {

    const [message_selected, setMessageSelected] = useState(false)

    const handleChangeMessageSelected = (event) => {
        event.preventDefault()
        setMessageSelected(true)
    }

    const handleCloseSelection = () => {
        setMessageSelected(false)
    }

    let messageClass;
    if (emisor === 'YO') {
        messageClass = 'message-container message-own';
    } else {
        messageClass = 'message-container message-other';
    }

    let bubbleClass = 'message-bubble';
    if (message_selected) {
        bubbleClass = 'message-bubble message-selected';
    }

    let statusIcon = null;
    if (emisor === 'YO') {
        if (status === 'visto') {
            statusIcon = <i className="bi bi-check-all message-status visto"></i>
        } else if (status === 'enviado') {
            statusIcon = <i className="bi bi-check message-status"></i>
        } else {
            statusIcon = <i className="bi bi-clock message-status"></i>
        }
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
                    {statusIcon}
                </div>
                
                {message_selected && (
                    <div className="message-options">
                        <button 
                            className="message-delete-button"
                            onClick={() => {deleteMessageById(id)}}
                        >
                            <i className="bi bi-trash3"></i>
                        </button>
                        <button 
                            className="message-close-button"
                            onClick={handleCloseSelection}
                        >
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Message