import React from 'react';
import ReactDOM from 'react-dom';
import { PokemonProvider } from './contexts/PokemonProvider';
import './styles/main.css';

//components
import App from './App';

ReactDOM.render(
    <PokemonProvider>
        <App/>
    </PokemonProvider>
    , document.getElementById('root')
);