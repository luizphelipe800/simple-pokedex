import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonProvider';

const Paginate = () => {
    const { state, dispatch } = useContext(PokemonContext);
    const { pokemons, itemsPerPage, currentPage } = state;
    const totalItems = pokemons.length;
    const pagesNum = [];
    const paginateSize = 3;
    let leftSize = currentPage - (Math.floor(paginateSize/2));
    let rightSize = currentPage + (Math.floor(paginateSize/2));

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pagesNum.push(i);
    }

    if(leftSize < 1){
        leftSize = 1;
        rightSize = paginateSize;
    }

    if(rightSize >= pagesNum.length){
        leftSize = pagesNum.length - ( paginateSize - 1 );
        rightSize = pagesNum.length;
    }

    const paginate = pagesNum.slice(leftSize-1, rightSize)

    const handleOnClick = num => {
        dispatch({ type: 'CHANGE_PAGE', payload: { num }})
    }

    const handleLastClick = () => {
        dispatch({ type: 'CHANGE_PAGE', payload: { num: pagesNum.length }})
    }
    const handleFirstClick = () => {
        dispatch({ type: 'CHANGE_PAGE', payload: { num: 1 }})
    }

    return (
        <div className="my-3 flex w-full justify-center items-center flex-wrap">
            <div onClick={() => handleFirstClick()} className="w-10 flex justify-center items-center mx-0.5 cursor-pointer bg-gray-300 rounded-md text-gray-800 shadow-md">
                <span>{ '<<' }</span>
            </div>
            {
                paginate.map((num, idx)=> (
                    <div 
                        key={idx} 
                        onClick={() => handleOnClick(num)}
                        className={`
                            w-10
                            flex
                            justify-center
                            items-center
                            mx-0.5 
                            cursor-pointer
                            bg-gray-300
                            rounded-md 
                            text-gray-800 
                            shadow-md
                            ${ num === currentPage && 'bg-yellow-500' }
                        `}
                    >
                        { num }
                    </div>
                ))
            }
            <div onClick={() => handleLastClick()} className="w-10 flex justify-center items-center mx-0.5 cursor-pointer bg-gray-300 rounded-md text-gray-800 shadow-md">
                <span>{ '>>' }</span>
            </div>
        </div>
    )
}

export default Paginate;