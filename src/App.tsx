import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Cart, Home } from './pages/index.js';
import Footer from './components/Footer/index';
import { PDP } from './components/Pdp';
import { CLP } from './components/Clp';
import { Header } from './components/Header';

const Root = () => {
  return (
    <>
    <Header />

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
      <Route path={'/:region/pokemon'} element={<CLP />} />
      <Route path={`/:region/pokemon/:id`} element={<PDP />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}



export default App;
