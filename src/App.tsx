import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Cart, Electronics, Home, Jewelery, MClothing, WClothing } from './pages/index.js';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

const Root = () => {
  return (
    <>
    <Navbar />

    <div>
      <Outlet />
    </div>

    <Footer />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/electronics' element={<Electronics />} />
      <Route path='/jewelery' element={<Jewelery />} />
      <Route path='/mensclothing' element={<MClothing />} />
      <Route path='/womensclothing' element={<WClothing />} />
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
