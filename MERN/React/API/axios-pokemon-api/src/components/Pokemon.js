import React, {useState,useEffect} from 'react'
import axios from 'axios';

const Pokemon = (props) => {
    const[pokemon, setPokemon] = useState([]);

    const fetchPokemon = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{setPokemon(response.data.results)})
    }
    
    return (
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            {pokemon.map((item,index)=> {
                return(
                    <li key={index}> {item.name} </li>
                )
            }) }
        </div>
    )
}

export default Pokemon
