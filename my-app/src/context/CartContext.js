// src/contexts/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState("");


    const addToCart = (product) => {
        setCartItems(prevItems => {
            // Check if the product is already in the cart
            const isProductInCart = prevItems.some(item => item.id === product.id);
            
            if (!isProductInCart) {
                // Product is not in the cart, add it
                console.log("Cart Updated", product);
                return [...prevItems, product];
            } else {
                // Product is already in the cart, do not add it
                setError('Product already exists in the cart.');

                console.log("Product already exists in the cart", product);
                return prevItems;
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
