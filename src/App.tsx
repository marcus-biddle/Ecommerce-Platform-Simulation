import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Cart, Kanto, Johto, Sinnoh, Home } from './pages/index.js';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer/index';
import { REGIONS, ROUTES } from './constants';
import { usePokemonContext } from './hooks';

const Root = () => {
  
  return (
    <>
    <Navbar />

    <Outlet />
    
    <Footer />
    </>
  )
}



const router = ({ kantoPokemon, johtoPokemon, sinnohPokemon }: any) => createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      {/* replace element with clp and pass region to it */}
      <Route path={`/${ROUTES[0].location}`} element={<Kanto />}>
        {kantoPokemon.map((pokemon: any) => {
          return (
            <Route path={`${pokemon.id}`} element={<Kanto />} />
          )
        })}
      </Route>
      <Route path={`/${ROUTES[1].location}`} element={<Johto />} />
        {johtoPokemon.map((pokemon: any) => {
            return (
              <Route path={`${pokemon.id}`} element={<Johto />} />
            )
          })}
      <Route path={`/${ROUTES[2].location}`} element={<Sinnoh />} />
        {sinnohPokemon.map((pokemon: any) => {
          console.log(pokemon.id)
            return (
              <Route path={`${pokemon.id}`} element={<Sinnoh />} />
            )
          })}
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

function App() {
  const { kantoPokemon, johtoPokemon, sinnohPokemon } = usePokemonContext();

  return (
    <div>
    <RouterProvider router={router({ kantoPokemon, johtoPokemon, sinnohPokemon })} />
    </div>
  );
}



export default App;
