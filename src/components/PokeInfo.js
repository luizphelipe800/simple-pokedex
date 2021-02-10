import React, { useContext } from 'react';
import useRequest from '../hooks/useRequest';
import { PokemonContext } from '../contexts/PokemonProvider';

const PokeInfo = () => {
    const { state: { selected } } = useContext(PokemonContext);
    const [ data, error, loading ] = useRequest(`pokemon/${selected}`);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error...</p>;

    return (
        <div className="poke-info">
            <h1>{data.name}</h1>
            <p>{data.id}</p>
            <img src={data.sprites.front_default} alt={data.name}/>
            {
                data.types.map((each, index) => (
                    <p key={index}>{each.type.name}</p>
                ))
            }
        </div>
    )
}

export default PokeInfo;