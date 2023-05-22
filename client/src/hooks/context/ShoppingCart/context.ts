import { createContext } from "react";
import { CartItem } from "./provider";

type CartContext = {
    getItemQuantity: (id: number) => number;
    updateCart: (id: number, price: number, original_price: number, name: string, amount: number, level: number, pdp: boolean) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number, level: number) => void;
    clearCart: () => void;
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as CartContext)

const { Consumer: ShoppingCartConsumer } = ShoppingCartContext;

export { ShoppingCartConsumer, ShoppingCartContext };