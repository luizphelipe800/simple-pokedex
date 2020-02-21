import React from 'react';
import pokeapi from '../services/pokeapi';

import PokeList from './PokeList';

import './styles/Pokemon.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: []
        };
    }

    componentDidMount() {
        pokeapi.get().then(response => {
            this.setState({
                pokemons: response.data.results
            })
        })
    }

    render() {
        const pokemons = this.state.pokemons;
        return (
            <div className="container">
                <h1>Pokedex</h1>
                <div className="poke-grid">
                    <PokeList list= {pokemons}/>
                </div>
                <div className="footer">
                    <span>&copy; Santos Devs</span>
                </div>
            </div>
        );
    }
}

export default App;