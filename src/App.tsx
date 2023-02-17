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
import { PDP } from './components/PDP';

const Root = () => {
  
  return (
    <>
    <Navbar />

    <Outlet />
    
    <Footer />
    </>
  )
}



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      {/* replace element with clp and pass region to it */}
      <Route path={`${ROUTES[0].location}`} element={<Kanto />} />
      <Route path={`${ROUTES[0].location}/:id`} element={<PDP />} />
      <Route path={`${ROUTES[1].location}`} element={<Johto />} />
      <Route path={`${ROUTES[1].location}/:id`} element={<PDP />} />
      <Route path={`${ROUTES[2].location}`} element={<Sinnoh />} />
      <Route path={`${ROUTES[2].location}/:id`} element={<PDP />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

function App() {

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}



export default App;
