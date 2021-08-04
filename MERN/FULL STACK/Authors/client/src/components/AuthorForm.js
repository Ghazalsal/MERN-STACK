import React, { useState } from 'react';
import axios from 'axios';
const AuthorForm=(props)=> {
    const {functionAuthor,initialName,errors} = props; 
    const [name, setName] = useState(initialName);
    const onSubmitHandler= (e)=>{
e.preventDefault();
functionAuthor(name);
    }
    
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <p>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <label>Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value) } />
                </p>
                <input type="submit"  />
            </form>
        </div>
    )
}
export default AuthorForm;