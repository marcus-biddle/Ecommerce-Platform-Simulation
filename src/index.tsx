import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PokemonProvider } from './hooks/context/Pokemon';
import { ShoppingCartProvider } from './hooks/context/ShoppingCart';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
    <PokemonProvider>
      <App />
    </PokemonProvider>
    </ShoppingCartProvider>
  </React.StrictMode>
);
