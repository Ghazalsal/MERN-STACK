import React , {useState} from 'react';
import {Link} from "@reach/router"; 

const Search = (props) => {
    const[category,setCategory] = useState("people");
    const[id, setId] = useState(0);

    const handleCat =(e) =>{
        setCategory(e.target.value);
    }

    const handleId=(e) =>{
        setId(e.target.value);
    }

    return (
        <form action={"/"+category+"/"+id}>
        <label>Search For: </label>
        <select value={category} onChange={handleCat}>
        <option value="people">People</option>
        <option value="planets">Planet</option>
        </select>
        <label>ID: </label>
        <input type="number" onChange = {handleId} />
        <button>Search</button>
        </form>
    );
}






export default Search;