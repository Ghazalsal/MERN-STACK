import React , {useState, useEffect} from 'react';
import axios from 'axios';

const Planet =(props) =>{
    const [planet,setPlanet] = useState("");

    useEffect(()=>{
        axios.get("https://swapi.dev/api/planets/"+props.id)
        .then((response)=>setPlanet(response.data))
        .catch(reject => setPlanet({error:"These aren't the droids you're looking for"}))
    },[props.id])

    return(
        <div>
            <h1>{planet.name}</h1>
            <p>{planet.rotation_period}</p>
            <p>{planet.orbital_period}</p>
            <p>{planet.diameter}</p>
            <p>{planet.climate}</p>
        </div>
    )
}
export default Planet;