import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonProvider';

const PokeList = () => {
    const { state: { page: pokemons} } = useContext(PokemonContext);

    if(!pokemons) return <p>Loading...</p>;

    return (
        <>{
            pokemons.map(pokemon => (
                <div 
                    key={pokemon.id}
                    pid={pokemon.id}
                    className="bg-gray-900 flex flex-col justify-center items-center p-3 shadow-md" 
                >
                    <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                        alt={pokemon.name}
                        className="object-fit pointer-events-none"
                    />
                    <p className="pointer-events-none text-white font-bold sm:text-sm">{pokemon.name}</p>
                </div>
            ))
        }</>
    )
}

export default PokeList;