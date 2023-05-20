import { createContext } from "react";
import { CartItem } from "./provider";

type CartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number, price: number, name: string, amount: number, level: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as CartContext)

const { Consumer: ShoppingCartConsumer } = ShoppingCartContext;

export { ShoppingCartConsumer, ShoppingCartContext };