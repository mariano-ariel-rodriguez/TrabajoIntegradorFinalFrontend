import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import EmptyScreen from './Screens/EmptyScreen/EmptyScreen'
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    let themeClass
    if (isDarkMode) {
        themeClass = 'dark-mode'
    } else {
        themeClass = 'light-mode'
    }

    return (
        <div className={themeClass}>
            <div className="app-layout">
                <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                <ContactScreen />
                <Routes>
                    <Route 
                        path='/' 
                        element={<EmptyScreen/>} 
                    />
                    <Route 
                        path='/contact/:contact_id/messages' 
                        element={<ChatScreen/>} 
                    />
                </Routes>
            </div>
        </div>
    )
}

export default App