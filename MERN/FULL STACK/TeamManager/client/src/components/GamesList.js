import React , {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const GamesList= (props) => {
    const { gameId} = props;
    const [player, setPlayer] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/status/game/${gameId}`)
        .then(response => {
            setPlayer(response.data);
        })
    },[gameId])
    const onPlayHandler = (statusNum) => {
        const updatedPlayer = {
            ...player,
            status: {
                ...player.status,
                [`game${gameId}`]: statusNum
            }
        }
        axios.put(`http://localhost:8000/api/status/game/${gameId}`, updatedPlayer)
        .then(response => {
                setPlayer(updatedPlayer);
        })
        .catch(err => {
            console.log("ERROR in update player")
        })
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Player Name: </th>
                    <th>Actions</th>
                </tr>
                {player.map((player, idx)=>{return (
                    <tr>
                        <td key={idx}>{player.name}</td> 
                        <td key ={idx}> <button style={{backgroundColor: player && player.status[`game${gameId}`] === "playing" ? "#4CAF50" : ""}} 
                        onClick={(e) => onPlayHandler(1)}>
                            Playing
                        </button>
                        <button style={{backgroundColor: player && player.status[`game${gameId}`] === "notplaying" ? "#FF0000" : ""}} 
                        onClick={(e) => onPlayHandler(-1)}>
                            Not Playing
                        </button>
                        <button style={{backgroundColor: player && player.status[`game${gameId}`] === "undecided" ? "#FFFF00" : ""}} 
                        onClick={(e) => onPlayHandler(0)}>
                            Undecided
                        </button></td>
                    </tr>
                        )})}
                </table>
        </div>
    )
}
export default GamesList;