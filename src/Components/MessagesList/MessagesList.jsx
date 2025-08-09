import React from "react"
import Message from "../Message/Message"
import './MessagesList.css'

const MessagesList = ({ messages, deleteMessageById }) => {

    if (messages.length === 0) {
        return (
            <div className="messages-list empty">
                <div className="no-messages">
                    <div className="no-messages-content">
                        <i className="bi bi-chat-text"></i>
                        <span>No hay mensajes aquí todavía...</span>
                        <p>Envía un mensaje para iniciar la conversación</p>
                    </div>
                </div>
            </div>
        )
    }

    const lista_mensajes = messages.map(
        function (message) {
            return <Message 
                key={message.id}
                emisor={message.emisor} 
                hora={message.hora} 
                id={message.id} 
                texto={message.texto} 
                status={message.status}
                deleteMessageById={deleteMessageById}
            />
        }
    )

    return (
        <div className="messages-list">
            <div className="messages-container">
                {lista_mensajes}
            </div>
        </div>
    )
}

export default MessagesList