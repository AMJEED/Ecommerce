// src/contexts/CartContext.js
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState("");


    const addToCart = (product) => {
        console.log("Products",product)
        console.log("cartItems",cartItems)
        setCartItems(prevItems => {
            

            // Check if the product is already in the cart
            const isProductInCart = prevItems.some(item => item._id === product._id);
            
            if (!isProductInCart) {
                // Product is not in the cart, add it
                console.log("Cart Updated", product);
                return [...prevItems, product];
            } else {
                // Product is salready in the cart, do not add it
                setError('Product already exists in the cart.');
              
            

                console.log("Product already exists in the cart", product);
                return prevItems;
            }
        });
    };
    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,error }}>
            {children}
        </CartContext.Provider>
    );
};
