import React from 'react';

class Pokemon extends React.Component{
    render(){
        const {name, id} = this.props;
        return(
            <div className="poke-card">
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={name}
                />
                <p>{name}</p>
            </div>
        )
    }
}

export default Pokemon;

//dois props name e id