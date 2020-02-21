import React from 'react';

class PokeInfo extends React.Component {
    render() {
        let { name, types, id, sprites } = this.props.teste;
        console.log({ name, types, id, sprites });
        if(name && types && id && sprites){
            return (
                <div className="poke-info">
                    <h1>{name}</h1>
                    <p>{id}</p>
                    <img src={sprites.front_default} alt={name}/>
                    {
                        types.map((each, index) => (
                            <p key={index}>{each.type.name}</p>
                        ))
                    }
                </div>
            )
        }else{
            return (
                <div className="poke-info">
                    <h1>Carregando...</h1>
                </div>
            );
        }
    }
}

export default PokeInfo;