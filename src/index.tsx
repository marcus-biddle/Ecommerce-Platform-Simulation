import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PokemonProvider } from './hooks/context/Pokemon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>
);
