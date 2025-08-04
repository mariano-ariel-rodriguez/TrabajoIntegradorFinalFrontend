import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        if (new_message_text === '') {
            return
        }
        
        addNewMessage(new_message_text)
        event.target.message.value = ''
    }

    return (
        <form className="new-message-form" onSubmit={handleSubmitSendMessageForm}>
            <div className="message-input-container">
                <label htmlFor="message" className="message-input-label">
                    Escribe un mensaje:
                </label>
                <input 
                    type="text" 
                    placeholder='Escribe un mensaje...' 
                    id='message' 
                    name='message' 
                    className="message-input"
                />
            </div>
            <button type='submit' className="send-button">
                <i className="bi bi-send"></i>
            </button>
        </form>
    )
}

export {NewMessageForm}