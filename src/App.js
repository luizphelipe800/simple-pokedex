import React, { useEffect, useContext } from 'react';
import { PokemonContext } from './contexts/PokemonProvider';

import PokeApi from './services/pokeapi';

import PokeList from './components/PokeList';
import Paginate from './components/Paginate';

const App = () => {
    const { dispatch } = useContext(PokemonContext);

    const handleClick = e => {
        const pokeId = Object.entries(e.target)[1][1].pid;
        dispatch({ type: 'SELECT', payload: { pokeId }})
    }

    useEffect(() => {
        (async () => {
            try{
                const { data } = await PokeApi.get('/pokemon?limit=898');
                dispatch({ type: 'LOAD', payload: { pokemons: data.results }});
            }catch(err){
                console.log(err);
            }
        })()
    }, [dispatch])

    return (
        <div className="h-full bg-gray-900 py-3 px-10">
            <h1 className="text-3xl font-bold ml-10 text-center md:text-left text-gray-300">Poke<span className="text-red-600">dex</span></h1>
            <Paginate/>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 my-3" onClick={handleClick}>
                <PokeList/>
            </div>
            <div className="flex justify-center items-center">
                <span className="text-gray-200 text-sm">Luiz Santos - Dev</span>
            </div>
        </div>
    )
}

export default App;