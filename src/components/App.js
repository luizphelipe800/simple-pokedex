import React from 'react';
import pokeapi from '../services/pokeapi';

import PokeList from './PokeList';
import PokeInfo from './PokeInfo';

import './styles/Pokemon.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            currentUrl: {}
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        pokeapi.get('/pokemon?limit=151').then(response => {
            this.setState({
                pokemons: response.data.results
            })
        })

        pokeapi.get('/pokemon/bulbasaur').then(res => {
            this.setState({
                currentUrl: res.data
            })
        })
    }

    handleClick(e) {
        let pokeTarget = null
        if (e.target.className !== 'poke-card') {
            pokeTarget = e.target.parentElement;
        } else {
            pokeTarget = e.target;
        }

        pokeapi.get(`/pokemon/${pokeTarget.children[0].alt}`).then(res => {
            this.setState({
                currentUrl: res.data
            })
        }).catch(err => {
            console.log('pokemon não encontrado!');
        })
    }

    render() {
        const pokemons = this.state.pokemons;
        return (
            <div className="container">
                <h1>Poke<span>dex</span></h1>
                <div className="poke-grid" onClick={this.handleClick}>
                    <PokeList list={pokemons} />
                </div>
                <PokeInfo teste={this.state.currentUrl} />
                <div className="footer">
                    <span>&copy; Luiz Santos - Dev</span>
                </div>
            </div>
        );
    }
}

export default App;