import React from 'react'
import './Sidebar.css'

const Sidebar = ({ isDarkMode, toggleTheme }) => {
    // Determinar qué icono mostrar
    let themeIcon
    if (isDarkMode) {
        themeIcon = <i className="bi bi-sun"></i>
    } else {
        themeIcon = <i className="bi bi-moon"></i>
    }

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <button className="sidebar-icon active">
                    <i className="bi bi-chat-left-text"></i>
                </button>
                <button className="sidebar-icon">
                    <i className="bi bi-bullseye"></i>
                </button>
                <button className="sidebar-icon">
                    <i className="bi bi-chat-quote"></i>
                </button>
                <button className="sidebar-icon">
                    <i className="bi bi-people"></i>
                </button>
            </div>
            <div className="sidebar-bottom">
                <button className="sidebar-icon" onClick={toggleTheme}>
                    {themeIcon}
                </button>
            </div>
        </div>
    )
}

export default Sidebar