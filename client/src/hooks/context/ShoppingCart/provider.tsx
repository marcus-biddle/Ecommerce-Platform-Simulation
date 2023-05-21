import React, { ReactNode, useEffect, useState } from 'react'
import { getLocalStorageCart, setLocalStorageCart } from '../../../helpers/storage';
import { ShoppingCartContext } from './context';

type ShoppingCartProviderProps = {
    children: ReactNode;
}

export type CartItem = {
    id: number;
    name: string;
    quantity: number;
    price: number;
    original_price: number;
    level: number;
}

const items = getLocalStorageCart('cartItems');

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(items || []);

    useEffect(() => {
        setLocalStorageCart(cartItems, 'cartItems');
        console.log('ShoppingContext', cartItems);
        console.log(`Saved ${cartItems.length} items to localstorage.`)
    }, [cartItems]);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    };

    function increaseCartQuantity(id: number, price: number, original_price: number ,name: string, amount: number, level: number, pdp: boolean) {
        setCartItems(currItems => {
            // returns a new item if not found
            if (currItems.find(item => item.id === id && item.level === level) === undefined) {
                return [...currItems, { id, name, price, original_price, quantity: amount, level: level}]
            } else {
                // returns the item with updated price and quantity
                return currItems.map(item => {
                    if (item.id === id && item.level === level) {
                        return {id, name, price: price, original_price, quantity: pdp ? item.quantity + amount : amount, level};
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

    function removeFromCart(id: number, level: number) {
        setCartItems(currItems => {
            return currItems.filter(item => {
                if (item.id === id) {
                    if (item.level !== level) {
                        return item
                    }
                } else if (item.id !== id) {
                    return item
                }
            });
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