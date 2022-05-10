import React, {useState} from 'react'
import Display from './display';

const ApiCall = () => {
    const[pokemon, setPokemon] = useState();

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => {
            return response.json();
        })
        .then(jsonResponse=>{
            setPokemon(jsonResponse.results);
        })
        .catch(err=>console.log(err));
    }

    return (
        <div>
            <button onClick={getPokemon}>Get Pokémon!</button>
            {
            pokemon?
            <Display pokemon={pokemon} />: 
            'Click to get pokemon!'
            }
        </div>
    )
}

export default ApiCall;