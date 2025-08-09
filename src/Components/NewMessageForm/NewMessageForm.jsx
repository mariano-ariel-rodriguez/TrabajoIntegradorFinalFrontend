import React, { useState } from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {
    const [messageText, setMessageText] = useState('')

    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        
        // Verificar que el mensaje no esté vacío y no sea solo espacios
        let hasContent = false
        for (let i = 0; i < messageText.length; i++) {
            if (messageText[i] !== ' ') {
                hasContent = true
                break
            }
        }
        
        if (!hasContent || messageText === '') {
            return
        }
        
        addNewMessage(messageText)
        setMessageText('')
    }

    const handleInputChange = (event) => {
        setMessageText(event.target.value)
    }

    return (
        <form className="new-message-form" onSubmit={handleSubmitSendMessageForm}>
            <div className="message-input-container">
                <button type="button" className="emoji-button">
                    <i className="bi bi-emoji-smile"></i>
                </button>

                <label htmlFor="message" className="message-input-label">
                    Escribe un mensaje:
                </label>
                <input 
                    type="text" 
                    placeholder="Escribe un mensaje" 
                    id="message" 
                    name="message" 
                    className="message-input"
                    value={messageText}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                
                <button type="button" className="attach-button">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </div>

            <button type="submit" className="send-button">
                <i className="bi bi-send-fill"></i>
            </button>
        </form>
    )
}

export {NewMessageForm}