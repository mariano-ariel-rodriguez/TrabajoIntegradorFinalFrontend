import React from 'react'
import './EmptyScreen.css'

const EmptyScreen = () => {
    return (
        <div className="empty-screen">
            <div className="empty-screen-content">
                <div className="empty-screen-icon">
                    <i className="bi bi-chat-left-text"></i>
                </div>
                <h2 className="empty-screen-title">WhatsApp to the Future</h2>
                <p className="empty-screen-subtitle">Selecciona un chat para empezar a conversar</p>
            </div>
        </div>
    )
}

export default EmptyScreen