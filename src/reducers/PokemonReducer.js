export const initialState = {
    pokemons: [],
    selected: 1,
    page: [],
    currentPage: 1,
    itemsPerPage: 20
}

export const PokemonReducer = (state=initialState, action) => {
    if(action.type === 'LOAD'){
        const { pokemons } = action.payload;
        const pokemonsWithId = pokemons.map((pokemon, idx) => ({ ...pokemon, id: idx+1}))
        const last = state.currentPage * state.itemsPerPage;
        const first = last - state.itemsPerPage;

        const itemsPage = pokemonsWithId.slice(first, last);

        return { ...state, pokemons: [ ...pokemonsWithId ], page: [ ...itemsPage ]} 
    }

    if(action.type === 'SELECT'){
        const { pokeId } = action.payload;
        return { ...state, selected: pokeId }
    }

    if(action.type === 'CHANGE_PAGE'){
        const { num } = action.payload;
        const last = num * state.itemsPerPage;
        const first = last - state.itemsPerPage;

        const itemsPage = state.pokemons.slice(first, last);

        return { ...state, page: [ ...itemsPage ], currentPage: num }
    }

    return { ...state }
}