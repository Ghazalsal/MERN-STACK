import React, { useState } from 'react'
import axios from 'axios';
const PlayerForm = (props) => {
    const {functionPlayer,initialName,initialPosition,errors} = props; 
    const [name, setName] = useState(initialName);
    const [position,setPosition] =useState(initialPosition)
    const onSubmitHandler= (e)=>{
        e.preventDefault();
        functionPlayer(name,position);
    }
    
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
            {errors.map((err, index) => <p key={index} className="error" > {err}</p>)}
                <label>Name: </label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Position: </label><br/>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default PlayerForm;