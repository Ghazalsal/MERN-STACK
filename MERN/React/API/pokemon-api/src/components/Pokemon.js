import React , {useState,useEffect} from 'react';

const Pokemon =(props)=>{
    const [pokemon,setPokemon]= useState([]);

    const fetchPokemon = ()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{
            return response.json()
        })
        .then(response =>{
            setPokemon(response.results)
        });
    }

    
    return (
        <div>
            <button onClick={fetchPokemon} >Fetch Pokemon</button>
            {pokemon.map((item,index)=> {
                return(
                    <li key={index}> {item.name} </li>
                )
            }) }
        </div>
    );
}
export default Pokemon;