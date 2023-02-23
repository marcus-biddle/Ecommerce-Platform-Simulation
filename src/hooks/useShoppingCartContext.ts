import { useContext } from "react";
import { ShoppingCartContext } from "./context/ShoppingCart";

export const useShoppingCartContext = () => useContext(ShoppingCartContext)