import { createContext } from "react";

const PokemonContext = createContext<any>([])

const { Consumer: PokemonConsumer } = PokemonContext;

export { PokemonConsumer, PokemonContext };