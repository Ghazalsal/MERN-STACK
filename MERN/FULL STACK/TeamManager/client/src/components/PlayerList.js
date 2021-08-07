import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
const PlayerList= (props) => {
    const {player,setPlayer} =props;
    const removeFromDom = playerId =>{
        setPlayer(player.filter(player => player._id !== playerId))
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Player Name: </th>
                    <th>Preferred Position: </th>
                    <th>Actions</th>
                </tr>
                {props.player.map((player, idx)=>{return (
                    <tr>
                        <td key={idx}>{player.name}</td> 
                        <td key ={idx}> {player.position}</td>
                    <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/>
                    </tr>
                        )})}
                </table>
        </div>
    )
}
export default PlayerList;