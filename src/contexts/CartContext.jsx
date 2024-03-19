import React, { createContext, useEffect } from 'react';
import { useState } from 'react';


export const CartInfoContext = createContext();


const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])

    const getCart = () => {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    }

    const setCartToLocal = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const addItem = (id) => {
        const newCart = [...cart, id]

        for (const item of cart) {
            if (item === id) {
                return
            }
        }

        setCart(newCart)
        setCartToLocal(newCart)
    }


    const removeItem = (id) => {
        const newCart = cart.filter(item => item !== id)
        setCart(newCart)
        setCartToLocal(newCart)
    }

    const clearCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    useEffect(() => {
        setCart(getCart())
    }, [])




    const cartInfo = {
        cart,
        addItem,
        removeItem,
        clearCart
    }

    return (
        <CartInfoContext.Provider value={cartInfo}>
            {children}
        </CartInfoContext.Provider>
    );
};

export default CartContext;