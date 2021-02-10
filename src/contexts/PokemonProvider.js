import React, { createContext, useReducer } from 'react';
import { initialState, PokemonReducer } from '../reducers/PokemonReducer';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [ state, dispatch] = useReducer(PokemonReducer, initialState);

    return (
        <PokemonContext.Provider value={{ state, dispatch }}>
            { children }
        </PokemonContext.Provider>
    )
}