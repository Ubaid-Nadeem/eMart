import React, { useState, createContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
export const AppContext = createContext({});

export function AppProvider({ children }) {
    const [showproduct, setShowproduct] = useState({})
    const [cart, setCart] = useState([])
    const [cartlength, setCartlength] = useState(null)
    const [user, setUser] = useState({})
    const [products, setProducts] = useState(null)
    const [loader, setLoader] = useState(true)
    const HTTP = "https://emart-server-1.herokuapp.com/"

    useEffect(() => {

        let cart = JSON.parse(localStorage.getItem("emart_user_cart")) || []
        let sum = 0
        for (let value of cart) {
            sum += value.Quantity
        }
        console.log(sum)
        setCartlength(sum)
        setCart(cart)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        });

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${HTTP}getallproduct`)
            .then(response => response.json())
            .then(result => {
                setLoader(false)
                setProducts(result)
            })
            .catch(error => console.log('error', error));

    }, [])
    return (
        <AppContext.Provider value={{ cartlength, setCartlength, loader, setLoader, products, setProducts, showproduct, setShowproduct, cart, setCart, user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}