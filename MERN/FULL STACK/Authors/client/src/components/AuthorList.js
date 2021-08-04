import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
const AuthorList =(props) => {
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthor(res.data));
    }, [])
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId))
        
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Authors</th>
                    <th>Actions</th>
                </tr>
                {props.author.map((author, idx)=>{return (
                    <tr>
                        <td key={idx}><Link to={"/author/"+ author._id}> {author.name}</Link></td> <Link to={"/author/" + author._id + "/edit"}>
                        Edit
                    </Link> 
                    |   <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                    </tr>
                        )})}
                </table>
        </div>
    )
}
export default AuthorList;