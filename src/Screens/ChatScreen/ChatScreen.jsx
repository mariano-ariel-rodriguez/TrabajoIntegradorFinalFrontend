import React, { useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import { NewMessageForm } from '../../Components/NewMessageForm/NewMessageForm'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import { useParams, Link } from 'react-router-dom'
import { getContactById } from '../../services/contactService'
import './ChatScreen.css'

const ChatScreen = ({ setChatActive }) => {
    const { contact_id } = useParams()
    const contact_selected = getContactById(contact_id)
    const [showContactInfo, setShowContactInfo] = useState(false)

    let initialMessages = []
    if (contact_selected && contact_selected.messages) {
        initialMessages = contact_selected.messages
    }

    const [messages, setMessages] = useState(initialMessages)
    const [currentContactId, setCurrentContactId] = useState(contact_id)

    if (currentContactId !== contact_id) {
        setCurrentContactId(contact_id)
        if (contact_selected && contact_selected.messages) {
            setMessages(contact_selected.messages)
        } else {
            setMessages([])
        }
        // Cerrar panel de info al cambiar de contacto
        setShowContactInfo(false)
    }

    const deleteMessageById = (message_id) => {
        const new_message_list = []
        for (const message of messages) {
            if (message.id !== message_id) {
                new_message_list.push(message)
            }
        }
        setMessages(new_message_list)
    }

    const addNewMessage = (text) => {
        // Obtener hora actual en formato 24 horas
        const now = new Date()
        const currentTime = now.toLocaleTimeString('es-AR', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        })

        const new_message = {
            emisor: 'YO',
            hora: currentTime,
            texto: text,
            status: 'enviado',
            id: messages.length + 1
        }

        const cloned_messages_list = [...messages]
        cloned_messages_list.push(new_message)
        setMessages(cloned_messages_list)
    }

    const deleteAllMessages = () => {
        setMessages([])
    }

    // Manejar el botón de volver
    const handleBackClick = () => {
        if (setChatActive) {
            setChatActive(false)
        }
    }

    // Manejar mostrar/ocultar info del contacto
    const handleShowContactInfo = () => {
        setShowContactInfo(true)
    }

    const handleCloseContactInfo = () => {
        setShowContactInfo(false)
    }

    let statusText = ''
    if (contact_selected) {
        if (contact_selected.connectionStatus === 'online') {
            statusText = 'En línea'
        } else {
            statusText = `Últ. vez ${contact_selected.lastConnection}`
        }
    }

    // Valores por defecto para evitar ternarios
    let avatarSrc = ''
    let avatarAlt = ''
    let contactName = ''
    
    if (contact_selected) {
        avatarSrc = contact_selected.avatar
        avatarAlt = contact_selected.name
        contactName = contact_selected.name
    }

    return (
        <div className="chat-screen">
            <div className="chat-container">
                <div className="chat-header">
                    <Link to="/" className="chat-back-button" onClick={handleBackClick}>
                        <i className="bi bi-arrow-left"></i>
                    </Link>
                    <div className="chat-contact-info" onClick={handleShowContactInfo}>
                        <img 
                            src={avatarSrc} 
                            alt={avatarAlt}
                            className="chat-contact-avatar"
                        />
                        <div className="chat-contact-details">
                            <h1>{contactName}</h1>
                            <span className="chat-contact-status">
                                {statusText}
                            </span>
                        </div>
                    </div>
                    <div className="chat-actions">
                        <button className="chat-action-button">
                            <i className="bi bi-search"></i>
                        </button>
                        <button className="chat-action-button">
                            <i className="bi bi-three-dots-vertical"></i>
                        </button>
                        {messages.length > 0 && (
                            <button 
                                className="chat-action-button delete-all-button" 
                                onClick={deleteAllMessages}
                            >
                                <i className="bi bi-trash"></i>
                            </button>
                        )}
                    </div>
                </div>

                <div className="chat-messages-area">
                    <MessagesList messages={messages} deleteMessageById={deleteMessageById} />
                    <NewMessageForm addNewMessage={addNewMessage} />
                </div>

                {showContactInfo && (
                    <ContactInfo 
                        contact={contact_selected}
                        onClose={handleCloseContactInfo}
                    />
                )}
            </div>
        </div>
    )
}

export default ChatScreen