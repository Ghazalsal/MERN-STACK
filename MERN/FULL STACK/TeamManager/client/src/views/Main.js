import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
import DiffLinks from '../components/DiffLinks';
const Main= () => {
    const [player, setPlayer] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors,setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/list')
            .then(res=>{
                setPlayer(res.data);
                setLoaded(true);
            });
    },[])
    const createPlayer= (name,position) =>{
        axios.post('http://localhost:8000/api/players/addplayer',
        {name,position})
        .then(res=> {
            setPlayer([...player,res.data])
        })
        .catch(err=>{
            const errorRes = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorRes)){
                errorArr.push(errorRes[key].message)
            }
            setErrors(errorArr);
        })
    }
    const removeFromDom = playerId =>{
        setPlayer(player.filter(player => player._id !== playerId));
    }
    return(
        <div>
            <DiffLinks />
            <PlayerForm functionPlayer={createPlayer} errors={errors} initialName ="" initialPosition="" />
            <hr />
            {loaded && <PlayerList player={player} setPlayer={setPlayer} removeFromDom={removeFromDom}/> }
        </div>
    )
}
export default Main;