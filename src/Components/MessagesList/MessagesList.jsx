import React from "react"
import Message from "../Message/Message"
import './MessagesList.css'

const MessagesList = ({ messages, deleteMessageById }) => {

    if (messages.length === 0) {
        return (
            <div className="messages-list">
                <div className="no-messages">
                    <div className="no-messages-content">
                        <span>Aún no tienes mensajes</span>
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
            {lista_mensajes}
        </div>
    )
}

export default MessagesList