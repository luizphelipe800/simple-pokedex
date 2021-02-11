import React, { useContext } from 'react';
import useRequest from '../hooks/useRequest';
import { PokemonContext } from '../contexts/PokemonProvider';

const PokeInfo = props => {
    const { state: { selected } } = useContext(PokemonContext);
    const [ data, error, loading ] = useRequest(`pokemon/${selected}`);

    if(loading) return '';
    if(error) return '';

    return (
        <div 
            className="w-full h-full grid place-items-center bg-gray-900 bg-opacity-50 fixed cursor-pointer"
            onClick={() => props.handleOnClick(false)}
        >
            <div className="bg-gray-200 flex flex-col p-10 justify-center items-center rounded-md shadow-md">
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <img src={data.sprites.front_default} alt={data.name}/>
                {
                    data.types.map((each, index) => (
                        <p key={index}>{each.type.name}</p>
                    ))
                }
                <p className="text-sm font-bold">click to close</p>
            </div>
        </div>
    )
}

export default PokeInfo;