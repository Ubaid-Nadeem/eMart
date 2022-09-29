import React, { useState, createContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
export const AppContext = createContext({});

export function AppProvider({ children }) {
    const [showproduct, setShowproduct] = useState({})
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({})


    return (
        <AppContext.Provider value={{ showproduct, setShowproduct, cart, setCart, user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}