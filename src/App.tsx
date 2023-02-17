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
      <Route path={`/${ROUTES[0].location}`} element={<Kanto />} />
      <Route path={`/${ROUTES[1].location}`} element={<Johto />} />
      <Route path={`/${ROUTES[2].location}`} element={<Sinnoh />} />
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
