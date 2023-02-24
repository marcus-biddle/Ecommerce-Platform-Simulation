import React, { ReactNode, useEffect, useState } from 'react'
import { ShoppingCartContext } from './context';

type ShoppingCartProviderProps = {
    children: ReactNode;
}

export type CartItem = {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

const items = JSON.parse(localStorage.getItem("cartItems") || '{}');

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    // changed from JSON.parse(localStorage.getItem('items') || '') || []
    const [cartItems, setCartItems] = useState<CartItem[]>(items || []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log(`Saved ${cartItems.length} items to localstorage.`)
    }, [cartItems]);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    };

    function increaseCartQuantity(id: number, price: number, name: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, name, price, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        // removing price: item.price
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        })
    }

    const values = {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems
    }

  return (
    <ShoppingCartContext.Provider value={values}>
        {children}
    </ShoppingCartContext.Provider>
  )
}