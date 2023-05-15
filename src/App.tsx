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
import { Product } from './components/Product';
import { CLP } from './components/CLP';
import { Header } from './components/Header';
import { createBrowserHistory } from '@remix-run/router';
import { GlobalStyle } from './pages/Home/styled';

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
      <Route path={'/:region/pokemon'} element={<CLP />} />
      <Route path={`/:region/pokemon/:id`} element={<Product />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

let history = createBrowserHistory();
history.listen(({ location, action }) => {
  // this is called whenever new locations come in
  // the action is POP, PUSH, or REPLACE
  history.push('/')
});

function App() {

  return (
    <>
    <GlobalStyle />
    <RouterProvider fallbackElement={'/'} router={router} />
    </>
  );
}



export default App;
