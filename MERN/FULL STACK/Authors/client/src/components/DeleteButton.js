import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const DeleteButton =(props) => {
    const { authorId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                successCallback();
                
            })
    }
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}
export default DeleteButton;
