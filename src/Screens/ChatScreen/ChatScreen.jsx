import React, { useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import { NewMessageForm } from '../../Components/NewMessageForm/NewMessageForm'
import { useParams, Link } from 'react-router'
import { getContactById } from '../../services/contactService'
import './ChatScreen.css'

const ChatScreen = () => {
    const { contact_id } = useParams()
    const contact_selected = getContactById(contact_id)

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
        const new_message = {
            emisor: 'YO',
            hora: '11:10',
            texto: text,
            status: 'no-visto',
            id: messages.length + 1
        }

        const cloned_messages_list = [...messages]
        cloned_messages_list.push(new_message)
        setMessages(cloned_messages_list)
    }

    const deleteAllMessages = () => {
        setMessages([])
    }

    let statusText = ''
    if (contact_selected) {
        if (contact_selected.connectionStatus === 'online') {
            statusText = 'En línea'
        } else {
            statusText = `Últ. vez ${contact_selected.lastConnection}`
        }
    }

    return (
        <div className="chat-screen">
            <div className="chat-container">
                <div className="chat-header">
                    <Link to="/" className="chat-back-button">
                        <i className="bi bi-arrow-left"></i>
                    </Link>
                    <div className="chat-contact-info">
                        <img 
                            src={contact_selected ? contact_selected.avatar : ''} 
                            alt={contact_selected ? contact_selected.name : ''}
                            className="chat-contact-avatar"
                        />
                        <div className="chat-contact-details">
                            <h1>{contact_selected ? contact_selected.name : ''}</h1>
                            <span className="chat-contact-status">
                                {statusText}
                            </span>
                        </div>
                    </div>
                    <div className="chat-actions">
                        {messages.length > 0 && (
                            <button 
                                className="chat-action-button delete-all-button" 
                                onClick={deleteAllMessages}
                            >
                                Borrar todos
                            </button>
                        )}
                    </div>
                </div>

                <div className="chat-messages-area">
                    <MessagesList messages={messages} deleteMessageById={deleteMessageById} />
                    <NewMessageForm addNewMessage={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default ChatScreen