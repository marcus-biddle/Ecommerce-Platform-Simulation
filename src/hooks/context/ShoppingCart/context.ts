import { createContext } from "react";
import { CartItem } from "./provider";

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number, price: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

const { Consumer: ShoppingCartConsumer } = ShoppingCartContext;

export { ShoppingCartConsumer, ShoppingCartContext };