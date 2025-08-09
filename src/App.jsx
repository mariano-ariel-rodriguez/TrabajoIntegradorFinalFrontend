import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import EmptyScreen from './Screens/EmptyScreen/EmptyScreen'
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [chatActive, setChatActive] = useState(false)
    const [selectedContactId, setSelectedContactId] = useState(null)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    // Función helper para obtener las clases del layout
    const getLayoutClass = () => {
        if (chatActive) {
            return 'app-layout chat-active'
        }
        return 'app-layout'
    }

    // Función helper para obtener la clase del tema
    const getThemeClass = () => {
        if (isDarkMode) {
            return 'dark-mode'
        }
        return 'light-mode'
    }

    return (
        <div className={getThemeClass()}>
            <div className={getLayoutClass()}>
                <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                <ContactScreen 
                    setChatActive={setChatActive} 
                    selectedContactId={selectedContactId}
                    setSelectedContactId={setSelectedContactId}
                />
                <Routes>
                    <Route 
                        path='/' 
                        element={<EmptyScreen />} 
                    />
                    <Route 
                        path='/contact/:contact_id/messages' 
                        element={<ChatScreen setChatActive={setChatActive} />} 
                    />
                </Routes>
            </div>
        </div>
    )
}

export default App