import { useContext } from "react";
import { PokemonContext } from "./context/Pokemon/context";

export const usePokemonContext = () => useContext<any>(PokemonContext)