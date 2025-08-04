import React from 'react'
import './Sidebar.css'

const Sidebar = ({ isDarkMode, toggleTheme }) => {
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
                    {isDarkMode ? (
                        <i className="bi bi-sun"></i>
                    ) : (
                        <i className="bi bi-moon"></i>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Sidebar