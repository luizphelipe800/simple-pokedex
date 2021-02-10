import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonProvider';

const Paginate = () => {
    const { state, dispatch } = useContext(PokemonContext);
    const { pokemons, itemsPerPage } = state;
    const pagesNum = [];

    for(let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++){
        pagesNum.push(i);
    }

    const handleOnClick = num => {
        dispatch({ type: 'CHANGE_PAGE', payload: { num }})
    }

    return (
        <div className="my-3 flex w-full justify-center items-center flex-wrap">
            {
                pagesNum.map((num, idx)=> (
                    <div 
                        key={idx} 
                        onClick={() => handleOnClick(num)}
                        className="p-1 mx-0.5 cursor-pointer bg-yellow-700 rounded-md text-white shadow-md"
                    >
                        { num }
                    </div>
                ))
            }
        </div>
    )
}

export default Paginate;