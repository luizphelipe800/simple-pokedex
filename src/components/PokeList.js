import React from 'react';

import Pokemon from './Pokemon';

class PokeList extends React.Component {

    render() {
        const pokemons = this.props.list;
        return (
            <>{
                pokemons.map((pokemon, index) => (
                    <Pokemon key={index} name={pokemon.name} id={index+1}/>
                ))
            }</>
        )
    }
}

export default PokeList;