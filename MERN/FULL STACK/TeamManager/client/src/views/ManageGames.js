import { Link } from '@reach/router'
import React, {useState,useEffect} from 'react'
import GamesList from '../components/GamesList'
import axios from 'axios';

const ManageGames = (props) => {
    
    const { gameId} = props;
    const [player,setPlayer] = useState([])
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/status/game/1')
            .then(res=>{
                setPlayer(res.data);
                setLoaded(true);
            });
    },[])

    return (
        <div>
            <h4>Player Status -Game <Link to="/status/game/1"> {gameId}</Link></h4>
            <h5>
                <Link to="/status/game/1">Game 1</Link> | 
                <Link to="/status/game/2">Game 2</Link> | 
                <Link to="/status/game/3">Game 3</Link>
            </h5>
            {loaded && <GamesList player={player} setPlayer={setPlayer} gameId/>}
        </div>
    )
}

export default ManageGames
